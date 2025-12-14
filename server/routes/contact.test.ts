import { describe, it, expect, vi, beforeEach } from "vitest";

// Top-level send stub that our mock will call so tests can mutate it
let sendStub = vi.fn(async () => ({}));

vi.mock("resend", () => {
  return {
    Resend: class {
      emails = { send: (...args: any[]) => sendStub(...args) };
    },
  };
});

import { handleContactForm } from "./contact";

// Helper to mock express req/res
const mockRes = () => {
  const json = vi.fn();
  const status = vi.fn(() => ({ json }));
  return { status, json };
};

describe("handleContactForm", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    // restore default sendStub implementation
    sendStub = vi.fn(async () => ({}));
    delete process.env.RESEND_API_KEY;
    process.env.NODE_ENV = "test";
  });

  it("returns 400 when required fields are missing", async () => {
    const req = { body: { name: "", email: "", message: "" } } as any;
    const res = mockRes() as any;

    await handleContactForm(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.status().json).toHaveBeenCalledWith(
      expect.objectContaining({ success: false, error: "Missing required fields" }),
    );
  });

  it("returns 400 for invalid email", async () => {
    const req = { body: { name: "Test", email: "not-an-email", message: "Hi" } } as any;
    const res = mockRes() as any;

    await handleContactForm(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.status().json).toHaveBeenCalledWith(
      expect.objectContaining({ success: false, error: "Invalid email address" }),
    );
  });

  it("logs and returns success when RESEND_API_KEY is not set in non-production", async () => {
    const req = { body: { name: "Alice", email: "alice@example.com", message: "Hello" } } as any;
    const res = mockRes() as any;

    await handleContactForm(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status().json).toHaveBeenCalledWith(
      expect.objectContaining({ success: true, message: expect.any(String) }),
    );
  });

  it("sends emails when RESEND_API_KEY is set and returns success", async () => {
    // Replace sendStub implementation for this test
    sendStub = vi.fn(async () => ({}));

    process.env.RESEND_API_KEY = "fake-key";

    const req = { body: { name: "Bob", email: "bob@example.com", message: "Hi there" } } as any;
    const res = mockRes() as any;

    await handleContactForm(req, res);

    // Should have called send at least once (to admin)
    expect(sendStub).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status().json).toHaveBeenCalledWith(
      expect.objectContaining({ success: true, message: "Email sent successfully" }),
    );
  });
});
