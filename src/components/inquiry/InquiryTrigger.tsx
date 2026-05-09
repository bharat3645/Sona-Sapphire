"use client";

import type { MouseEvent, ReactNode } from "react";
import { INQUIRY_OPEN_EVENT } from "./InquiryDialog";

interface Props {
  readonly children: ReactNode;
  readonly className?: string;
  readonly fallbackHref?: string;
  readonly dataAttrs?: Record<string, string>;
}

/**
 * Wraps a CTA so click intent opens the inquiry modal. Renders an <a> so
 * SSR keeps semantic anchor accessibility / right-click "open in new tab"
 * to the fallback (the contact section). Click is intercepted client-side
 * to dispatch the open event instead.
 */
export function InquiryTrigger({
  children,
  className,
  fallbackHref = "#contact",
  dataAttrs,
}: Props) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(INQUIRY_OPEN_EVENT));
  };

  return (
    <a href={fallbackHref} className={className} onClick={onClick} {...dataAttrs}>
      {children}
    </a>
  );
}
