// ConfirmationAlert.tsx
"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";
import { X, CheckCircle } from "lucide-react"; // Importa os ícones necessários

interface ConfirmationAlertProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogPortal>
        <AlertDialogOverlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
        <AlertDialogContent className="fixed top-1/2 left-1/2 w-11/12 sm:w-1/2 max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform duration-300 z-50 bg-[#1C1917] text-white">
          {/* Botão "X" para fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>

          <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
          <AlertDialogTitle className="text-2xl font-semibold">
            Cadastro Realizado com Sucesso!
          </AlertDialogTitle>
          <p className="mt-2">Entraremos em contato em breve!</p>
          {/* Botão "OK" removido */}
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};

export default ConfirmationAlert;
