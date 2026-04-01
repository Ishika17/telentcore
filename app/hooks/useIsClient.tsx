"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // Browser/Client value
    () => false, // Server value
  );
}
