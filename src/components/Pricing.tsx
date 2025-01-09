import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Clock } from "lucide-react"; // Importa o ícone Clock
import { Badge } from "@/components/ui/badge"; // Importando o Badge
import ScheduleTestModal from "./ScheduleTestModal"; // Importa o componente modal

interface PricingProps {
  title: string;
  price?: number; // Tornado opcional para o plano Enterprise
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Enterprise",
    description:
      "Para universidades e Instituições que desejam oferecer uma experiência humanizada de simulação.",
    buttonText: "Fale Conosco", // Atualizado para "Lista de Espera"
    benefitList: [
      "Acesso personalizado para grandes equipes",
      "Casos clínicos personalizados conforme necessidade",
      "Treinamento e workshops exclusivos para professores",
    ],
  },
];

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="pricing" className="container pt-24 sm:pt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Desbloqueie{" "}
        <span className="bg-gradient-to-r from-[#9ACB3F] to-[#c8e29b] text-transparent bg-clip-text">
          Acesso Completo
        </span>{" "}
        às Simulações Médicas
      </h2>

      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Escolha o plano ideal para você ou sua instituição e comece a treinar em
        situações reais.
      </h3>

      {/* Container Flex para centralizar o card */}
      <div className="flex justify-center">
        <Card
          key={pricingList[0].title}
          className="w-full max-w-sm mx-auto drop-shadow-xl shadow-black/10 dark:shadow-white/10"
        >
          <CardHeader className="text-center flex flex-col items-center">
            <CardTitle className="text-2xl font-bold">
              {pricingList[0].title}
            </CardTitle>
            <Badge
              variant="secondary"
              className="mt-2 mb-2 text-base text-[#9ACB3F] bg-secondary border-secondary border px-3"
            >
              Sob Consulta
            </Badge>
            <CardDescription className="text-base">
              {pricingList[0].description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button
              className="w-full text-white flex items-center justify-center"
              style={{ backgroundColor: "#524FB6" }}
              onClick={handleOpenModal} // Abre o modal ao clicar no botão
            >
              <Clock className="w-4 h-4 mr-2" />
              {pricingList[0].buttonText}
            </Button>
          </CardContent>

          <hr className="w-4/5 m-auto mb-4" />

          <CardFooter className="flex">
            <div className="space-y-4">
              {pricingList[0].benefitList.map((benefit: string) => (
                <span key={benefit} className="flex items-center">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* ScheduleTestModal - componente modal */}
      <ScheduleTestModal open={isModalOpen} onOpenChange={handleCloseModal} />
    </section>
  );
};
