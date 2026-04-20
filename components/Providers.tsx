"use client";

import React from "react";
import { ModalProvider } from "@/context/ModalContext";
import ContactModal from "@/components/ContactModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <ContactModal />
    </ModalProvider>
  );
}
