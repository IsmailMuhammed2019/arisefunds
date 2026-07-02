"use client";

import React from "react";
import { ModalProvider } from "@/context/ModalContext";
import ContactModal from "@/components/ContactModal";
import SpeechModal from "@/components/SpeechModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <ContactModal />
      <SpeechModal />
    </ModalProvider>
  );
}
