// app/context/PortalContext.js
"use client";

import { createContext, useContext } from "react";

const PortalContext = createContext(null);

export function PortalProvider({
  children,
  portalInfo,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  portalInfo: any;
}) {
  return (
    <PortalContext.Provider value={portalInfo}>
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  return useContext(PortalContext);
}
