"use client";

import { useState } from "react";
import { CONTACT, SERVICE_TYPES, type ServiceType } from "@/data/content";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "error"; message: string }
  | { kind: "success" };

const INITIAL_FORM = {
  name: "",
  email: "",
  type: "Website Development" as ServiceType,
  message: "",
  website: "",
};

/**
 * Inline inquiry section — the "Start a Project" CTA in long-form. Lives at
 * the bottom of the page so visitors who scroll all the way down can submit
 * without opening the modal. Posts to the same /api/inquiry route.
 */
export function InquirySection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = (await res
        .json()
        .catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus({
          kind: "error",
          message: json.error ?? `Submission failed (${res.status}).`,
        });
        return;
      }
      setStatus({ kind: "success" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Network error.";
      setStatus({ kind: "error", message: msg });
    }
  };

  const reset = () => {
    setStatus({ kind: "idle" });
    setForm(INITIAL_FORM);
  };

  const isSubmitting = status.kind === "submitting";

  return (
    <section
      id="inquiry"
      className="inquiry-section"
      aria-label="Start a project"
    >
      <div className="shell">
        <div className="inquiry-section__head">
          <span
            className="eyebrow"
            data-string="parallax"
            data-string-id="inq-eyebrow"
            data-string-parallax="0.12"
          >
            Start a project · 2026
          </span>
          <h2
            className="inquiry-section__title"
            data-string="parallax"
            data-string-id="inq-title"
            data-string-parallax="-0.06"
          >
            Tell us what you&rsquo;re <em>building</em>.
          </h2>
          <p
            className="inquiry-section__lede"
            data-string="parallax"
            data-string-id="inq-lede"
            data-string-parallax="0.08"
          >
            Drop a few lines about scope, timeline, and the metric you&rsquo;re
            moving. We reply within 24 hours, IST or anywhere.
          </p>
        </div>

        {status.kind === "success" ? (
          <div className="inquiry-section__success">
            <span className="eyebrow">Message received</span>
            <h3 className="inquiry-section__success-title">
              We&rsquo;ll be in touch within 24h.
            </h3>
            <p className="inquiry-section__success-body">
              A reply lands at <strong>{form.email}</strong> shortly. In the
              meantime, you can mail us directly at{" "}
              <a href={CONTACT.emailHref}>{CONTACT.email}</a> or message the
              studio at{" "}
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
            </p>
            <button
              type="button"
              className="inquiry-section__reset"
              onClick={reset}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="inquiry-section__form"
            onSubmit={onSubmit}
            noValidate
          >
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

            <label className="inquiry__field inquiry-section__message">
              <span>Message</span>
              <textarea
                required
                rows={6}
                maxLength={4000}
                placeholder="Tell us about scope, timeline, the audience you're chasing, and the metric you'd like us to move."
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
              />
            </label>

            {/* Honeypot — hidden via CSS, server rejects if filled */}
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
                {status.message} &nbsp;· Or email us at{" "}
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>.
              </p>
            ) : null}

            <div className="inquiry-section__actions">
              <button
                type="submit"
                className="inquiry__submit"
                disabled={isSubmitting}
                data-string="magnetic"
                data-string-id="inq-submit"
                data-string-strength="0.3"
                data-string-radius="160"
              >
                {isSubmitting ? "Sending…" : "Send inquiry →"}
              </button>
              <a className="inquiry__mailto" href={CONTACT.emailHref}>
                Or mail us directly
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
