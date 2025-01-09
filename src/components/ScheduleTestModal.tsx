// ScheduleTestModal.tsx

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radiogroup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import ConfirmationAlert from "./ConfirmationAlert";

interface ScheduleTestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ScheduleTestModal: React.FC<ScheduleTestModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    profession: string;
    university: string;
    period: string;
    specialization: string;
    institution: string;
  }>({
    name: "",
    email: "",
    profession: "Estudante",
    university: "",
    period: "",
    specialization: "",
    institution: "",
  });

  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Limpa o erro correspondente ao campo alterado
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Função para lidar com mudanças na profissão
  const handleProfessionChange = (value: string) => {
    setFormData({
      ...formData,
      profession: value,
      university: "",
      period: "",
      specialization: "",
      institution: "",
    });
    // Limpa todos os erros ao mudar a profissão
    setErrors({});
  };

  // Função de validação do formulário
  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Validação sempre obrigatória
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Email inválido.";
    }

    // Validação condicional para Estudante
    if (formData.profession === "Estudante") {
      if (!formData.university.trim()) {
        newErrors.university = "Universidade é obrigatória.";
      }
      if (!formData.period.trim()) {
        newErrors.period = "Período é obrigatório.";
      }
    }

    // Validação condicional para Médico e Outros
    if (formData.profession === "Médico" || formData.profession === "Outros") {
      if (!formData.specialization.trim()) {
        newErrors.specialization = "Especialização ou cargo é obrigatório.";
      }
      if (!formData.institution.trim()) {
        newErrors.institution = "Instituição é obrigatória.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null); // Resetar erros de submissão

    if (validate()) {
      setIsSubmitting(true);

      try {
        // Enviar dados para o back-end
        const response = await fetch("http://localhost:5000/api/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Resetar o formulário
          setFormData({
            name: "",
            email: "",
            profession: "Estudante",
            university: "",
            period: "",
            specialization: "",
            institution: "",
          });
          onOpenChange(false); // Fecha o modal do formulário
          setIsAlertOpen(true); // Abre o alerta de confirmação
        } else {
          const errorData = await response.json();
          setSubmitError(
            errorData.error || "Ocorreu um erro ao enviar o formulário."
          );
        }
      } catch (error) {
        setSubmitError(
          "Ocorreu um erro ao enviar o formulário. Tente novamente."
        );
        console.error("Erro ao enviar formulário:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Função para confirmar o alerta de sucesso
  const handleConfirm = () => {
    setIsAlertOpen(false); // Fecha o alerta
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          aria-describedby="dialog-description"
          className="sm:max-w-[425px] bg-[#1C1917] text-white p-6"
        >
          <DialogHeader className="flex justify-center">
            <DialogTitle id="dialog-title" className="text-center">
              Entre em Contato
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            {/* Input de Nome */}
            <div className="grid grid-cols-1">
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-gray-300 bg-transparent text-white placeholder-gray-300 rounded-md p-2 focus:border-white focus:border-2 focus:outline-none transition-colors duration-200"
                placeholder="Digite seu nome"
                required
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>

            {/* Input de Email */}
            <div className="grid grid-cols-1">
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-gray-300 bg-transparent text-white placeholder-gray-300 rounded-md p-2 focus:border-white focus:border-2 focus:outline-none transition-colors duration-200"
                placeholder="Digite seu email"
                required
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            {/* Radio Group de Profissão */}
            <div className="grid grid-cols-1">
              <RadioGroup
                className="flex space-x-4"
                value={formData.profession}
                onValueChange={handleProfessionChange}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Estudante" id="student" />
                  <Label htmlFor="student" className="text-white">
                    Estudante
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Médico" id="doctor" />
                  <Label htmlFor="doctor" className="text-white">
                    Médico
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Outros" id="other" />
                  <Label htmlFor="other" className="text-white">
                    Outros
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Inputs Condicionais para Estudante */}
            {formData.profession === "Estudante" && (
              <>
                <div className="grid grid-cols-1">
                  <Input
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 bg-transparent text-white placeholder-gray-300 rounded-md p-2 focus:border-white focus:border-2 focus:outline-none transition-colors duration-200"
                    placeholder="Digite sua universidade"
                    required
                  />
                  {errors.university && (
                    <span className="text-red-500 text-sm">
                      {errors.university}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1">
                  <Input
                    id="period"
                    name="period"
                    value={formData.period}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 bg-transparent text-white placeholder-gray-300 rounded-md p-2 focus:border-white focus:border-2 focus:outline-none transition-colors duration-200"
                    placeholder="Digite seu período"
                    required
                  />
                  {errors.period && (
                    <span className="text-red-500 text-sm">
                      {errors.period}
                    </span>
                  )}
                </div>
              </>
            )}

            {/* Inputs Condicionais para Médico e Outros */}
            {(formData.profession === "Médico" ||
              formData.profession === "Outros") && (
              <>
                <div className="grid grid-cols-1">
                  <Input
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 bg-transparent text-white placeholder-gray-300 rounded-md p-2 focus:border-white focus:border-2 focus:outline-none transition-colors duration-200"
                    placeholder="Digite sua especialização ou cargo"
                    required
                  />
                  {errors.specialization && (
                    <span className="text-red-500 text-sm">
                      {errors.specialization}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1">
                  <Input
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 bg-transparent text-white placeholder-gray-300 rounded-md p-2 focus:border-white focus:border-2 focus:outline-none transition-colors duration-200"
                    placeholder="Digite sua Instituição/Empresa"
                    required
                  />
                  {errors.institution && (
                    <span className="text-red-500 text-sm">
                      {errors.institution}
                    </span>
                  )}
                </div>
              </>
            )}

            {/* Mensagem de Erro de Submissão */}
            {submitError && (
              <div className="text-red-500 text-sm">{submitError}</div>
            )}

            <DialogFooter className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#524FB6] text-white px-4 py-2 rounded-md focus:outline-none hover:bg-[#7F7BFF] active:bg-[#7F7BFF] disabled:bg-gray-400 transition-colors duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Inclui o Alerta de Confirmação */}
      <ConfirmationAlert isOpen={isAlertOpen} onClose={handleConfirm} />
    </>
  );
};

export default ScheduleTestModal;
