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
import { Check, Clock, Rocket } from "lucide-react"; // Importa o Rocket
import { Badge } from "@/components/ui/badge";
import ScheduleTestModal from "./ScheduleTestModal";

interface PricingProps {
  title: string;
  price?: number; // Valor definido para planos individuais
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Individual",
    price: 39,
    description:
      "Para estudantes e médicos que buscam aprimorar suas habilidades com simulações online realistas.",
    buttonText: "Acesse o Beta",
    benefitList: [
      "Consulta simulada única com abordagem prática e interativa",
      "Feedback personalizado via inteligência",
      "Acesse e revise sua consulta para aprimorar seus conhecimentos",
      "Flexibilidade total para escolher o melhor horário",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Para universidades e instituições que desejam oferecer uma experiência humanizada de simulação.",
    buttonText: "Fale Conosco",
    benefitList: [
      "Acesso personalizado para grandes equipes",
      "Casos clínicos personalizados conforme necessidade",
      "Treinamento e workshops exclusivos para professores",
      "Simulações clínicas para os alunos",
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
        Escolha o plano ideal para você ou sua instituição
      </h3>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {pricingList.map((plan: PricingProps) => (
          <Card
            key={plan.title}
            className="w-full max-w-sm mx-auto drop-shadow-xl shadow-black/10 dark:shadow-white/10"
          >
            <CardHeader className="text-center flex flex-col items-center">
              <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
              <Badge
                variant="secondary"
                className="mt-2 mb-2 text-base text-[#9ACB3F] bg-secondary border-secondary border px-3"
              >
                {plan.price ? `R$ ${plan.price}` : "Sob Consulta"}
              </Badge>
              <CardDescription className="text-base">
                {plan.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Button
                className="w-full text-white flex items-center justify-center"
                style={{ backgroundColor: "#524FB6" }}
                onClick={handleOpenModal} // Ambos os botões abrem o modal
              >
                {plan.title === "Individual" ? (
                  <>
                    <Rocket className="w-4 h-4 mr-2" />
                    {plan.buttonText}
                  </>
                ) : (
                  <>
                    <Clock className="w-4 h-4 mr-2" />
                    {plan.buttonText}
                  </>
                )}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex flex-col items-start space-y-4 px-4">
              {plan.benefitList.map((benefit: string) => (
                <div key={benefit} className="flex items-start">
                  <Check className="text-green-500 mt-1" />
                  <span className="ml-2">{benefit}</span>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>

      <ScheduleTestModal open={isModalOpen} onOpenChange={handleCloseModal} />
    </section>
  );
};
