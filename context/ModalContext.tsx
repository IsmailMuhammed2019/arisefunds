"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
  isSpeechModalOpen: boolean;
  openSpeechModal: () => void;
  closeSpeechModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSpeechModalOpen, setIsSpeechModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openSpeechModal = () => setIsSpeechModalOpen(true);
  const closeSpeechModal = () => setIsSpeechModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isContactModalOpen,
        openContactModal,
        closeContactModal,
        isSpeechModalOpen,
        openSpeechModal,
        closeSpeechModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
