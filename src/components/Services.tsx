import { Card, CardHeader, CardContent } from "./ui/card";
import { ClipboardCheck, UserCheck, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Badge da shadcn UI
import cubeLeg from "../assets/cube-leg.png";

interface BenefitProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const benefitsList: BenefitProps[] = [
  {
    title: "Experiência Realista",
    description:
      "Simule consultas médicas com atores, aprimorando suas habilidades clínicas em um ambiente seguro e controlado.",
    icon: <UserCheck className="w-8 h-8 text-white" />, // Ícone branco
  },
  {
    title: "Feedback Imediato",
    description:
      "Receba feedback personalizado sobre suas decisões clínicas, ajudando a corrigir erros e melhorar seu desempenho.",
    icon: <ClipboardCheck className="w-8 h-8 text-white" />, // Ícone branco
  },
  {
    title: "Aprendizado Contínuo",
    description:
      "Acompanhe seu progresso ao longo de múltiplas consultas e aprenda com cada interação simulada.",
    icon: <TrendingUp className="w-8 h-8 text-white" />, // Ícone branco
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-[#7F7BFF]/60 to-[#7F7BFF] text-transparent bg-clip-text">
              Benefícios da Nossa Solução
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Descubra como nossa plataforma de simulações médicas pode
            transformar sua formação, proporcionando experiências práticas e
            feedbacks valiosos.
          </p>

          <div className="flex flex-col gap-8">
            {benefitsList.map(({ icon, title, description }: BenefitProps) => (
              <Card
                key={title}
                className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#7F7BFF] rounded-full">
                      {icon}
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="mb-2 text-sm text-[#7F7BFF]"
                  >
                    {title}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Benefícios da nossa solução"
        />
      </div>
    </section>
  );
};
