"use client";

import { useEffect, type ReactNode } from "react";
import StringTune from "@fiddle-digital/string-tune";
import { STRINGTUNE_MODULES } from "./modules";

interface Props {
  readonly children: ReactNode;
  readonly fps?: number;
}

export function StringTuneProvider({ children, fps = 60 }: Props) {
  useEffect(() => {
    const instance = StringTune.getInstance();
    for (const Module of STRINGTUNE_MODULES) {
      instance.use(Module);
    }
    instance.start(fps);
  }, [fps]);

  return <>{children}</>;
}
