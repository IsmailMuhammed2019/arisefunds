"use client";

import React, { useEffect } from "react";
import { ModalProvider, useModal } from "@/context/ModalContext";
import ContactModal from "@/components/ContactModal";
import SpeechModal from "@/components/SpeechModal";

function SpeechAutoTrigger() {
  const { openSpeechModal } = useModal();

  useEffect(() => {
    const hasSeenSpeech = sessionStorage.getItem("hasSeenWaccSpeech");
    if (!hasSeenSpeech) {
      openSpeechModal();
      sessionStorage.setItem("hasSeenWaccSpeech", "true");
    }
  }, [openSpeechModal]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <ContactModal />
      <SpeechModal />
      <SpeechAutoTrigger />
    </ModalProvider>
  );
}
