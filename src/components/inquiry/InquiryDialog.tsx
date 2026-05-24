"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT, SERVICE_TYPES, type ServiceType } from "@/data/content";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "error"; message: string }
  | { kind: "network-error" }
  | { kind: "success" };

const INITIAL_FORM = {
  name: "",
  email: "",
  type: "Website Development" as ServiceType,
  message: "",
  website: "",
};

export const INQUIRY_OPEN_EVENT = "sona-inquiry:open";

function buildMailto(form: typeof INITIAL_FORM): string {
  const subject = `Inquiry — ${form.type} — ${form.name || "(no name)"}`;
  const bodyLines = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Project type: ${form.type}`,
    "",
    "Message:",
    form.message,
    "",
    "—",
    "Sent via sonasapphire.com",
  ].join("\n");
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(bodyLines)}`;
}

export function InquiryDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  // Open via custom event from any trigger; close on Esc / submit / overlay click.
  useEffect(() => {
    const open = () => {
      const el = dialogRef.current;
      if (!el || el.open) return;
      try { el.showModal(); } catch { el.setAttribute("open", ""); }
    };
    window.addEventListener(INQUIRY_OPEN_EVENT, open);

    // Allow ?inquiry=open to deep-link the modal.
    if (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("inquiry") === "open") {
      requestAnimationFrame(open);
    }

    return () => window.removeEventListener(INQUIRY_OPEN_EVENT, open);
  }, []);

  const close = () => {
    const el = dialogRef.current;
    if (el?.open) el.close();
    setTimeout(() => {
      setStatus({ kind: "idle" });
      setForm(INITIAL_FORM);
    }, 200);
  };

  // When a successful submit lands, hold the success panel for 3s then close.
  useEffect(() => {
    if (status.kind !== "success") return;
    const t = setTimeout(close, 3200);
    return () => clearTimeout(t);
  }, [status]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) close();
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      setStatus({ kind: "network-error" });
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        const raw = json.error ?? `Submission failed (${res.status}).`;
        const friendly = /testing emails|verify a domain|resend\.com\/domains/i.test(raw)
          ? "We're finalising the mailer setup. Please email us at info@sonasapphire.com or call +91 88818 57060 — we'll reply within 24 hours."
          : raw;
        setStatus({ kind: "error", message: friendly });
        return;
      }
      setStatus({ kind: "success" });
    } catch {
      setStatus({ kind: "network-error" });
    }
  };

  const isSubmitting = status.kind === "submitting";

  return (
    <dialog
      ref={dialogRef}
      className="inquiry"
      onClick={onBackdropClick}
      onClose={close}
      aria-label="Start a project"
    >
      <div className="inquiry__panel" onClick={(e) => e.stopPropagation()}>
        {status.kind === "success" ? (
          <div className="inquiry__success">
            <span className="eyebrow">Message sent</span>
            <h2 className="inquiry__success-title">We&rsquo;ll be in touch within 24h.</h2>
            <p className="inquiry__success-body">
              Thanks for reaching out. A reply lands at <strong>{form.email}</strong> shortly.
            </p>
            <button type="button" className="inquiry__close-btn" onClick={close}>
              Close
            </button>
          </div>
        ) : status.kind === "network-error" ? (
          <div className="inquiry__success">
            <span className="eyebrow">Connection blocked</span>
            <h2 className="inquiry__success-title">
              Our mailer can&rsquo;t be reached from here.
            </h2>
            <p className="inquiry__success-body">
              No problem — tap below to open your mail app with everything you
              typed already prefilled. Or call the studio at{" "}
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
            </p>
            <div className="inquiry__actions">
              <a
                href={buildMailto(form)}
                className="inquiry__submit"
                onClick={() => setTimeout(close, 600)}
              >
                Open in mail app →
              </a>
              <button type="button" className="inquiry__close-btn" onClick={close}>
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <header className="inquiry__head">
              <span className="eyebrow">Start a project</span>
              <h2 className="inquiry__title">Tell us what you&rsquo;re building.</h2>
              <p className="inquiry__lede">
                Drop a few lines — we usually reply within 24 hours.
              </p>
              <button
                type="button"
                className="inquiry__close"
                onClick={close}
                aria-label="Close dialog"
              >
                ×
              </button>
            </header>

            <form className="inquiry__form" onSubmit={onSubmit} noValidate>
              <label className="inquiry__field">
                <span>Name</span>
                <input
                  type="text"
                  required
                  maxLength={200}
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </label>

              <label className="inquiry__field">
                <span>Email</span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </label>

              <label className="inquiry__field">
                <span>Project type</span>
                <select
                  value={form.type}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, type: e.target.value as ServiceType }))
                  }
                >
                  {SERVICE_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <label className="inquiry__field inquiry__field--message">
                <span>Message</span>
                <textarea
                  required
                  rows={5}
                  maxLength={4000}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                />
              </label>

              {/* Honeypot — bots fill, humans don't see it */}
              <label className="inquiry__honeypot" aria-hidden="true">
                Website
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, website: e.target.value }))
                  }
                />
              </label>

              {status.kind === "error" ? (
                <p className="inquiry__error" role="alert">
                  {status.message} &nbsp;· Or{" "}
                  <a href={buildMailto(form)}>open the message in your mail app</a>.
                </p>
              ) : null}

              <div className="inquiry__actions">
                <button
                  type="submit"
                  className="inquiry__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send inquiry →"}
                </button>
                <a className="inquiry__mailto" href={CONTACT.emailHref}>
                  Or mail us directly
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
