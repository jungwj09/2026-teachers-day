"use client";

import { useEffect, useState } from "react";
import { isEventClosed, EVENT_CLOSE_UTC } from "@/src/lib/utils";

export function useEventClosed() {
  const [closed, setClosed] = useState(isEventClosed);

  useEffect(() => {
    if (closed) return;

    const remaining = EVENT_CLOSE_UTC.getTime() - Date.now();
    if (remaining <= 0) return;

    const timer = setTimeout(() => setClosed(true), remaining);
    return () => clearTimeout(timer);
  }, [closed]);

  return closed;
}