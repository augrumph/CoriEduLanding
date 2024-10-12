import { useState } from "react";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { ArrowDownCircle } from "lucide-react"; // Importando o ícone de demonstração ao vivo
import ScheduleTestModal from "./ScheduleTestModal"; // Importação corrigida do modal
import { Clock } from "lucide-react"; // Importa o ícone Clock
export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6 max-w-[640px] mx-auto lg:mx-0 transform md:translate-y-[0px] translate-y-[-20px]">
        <main className="text-6xl md:text-7xl font-bold">
          <h1 className="inline">
            <span
              className="
                inline 
                text-[#FF0F68] 
                dark:bg-gradient-to-r dark:from-[#fdfdfd] dark:to-[#f7f7f7] 
                dark:text-transparent dark:bg-clip-text
              "
            >
              Simulações <br />
            </span>{" "}
            Clínicas <br />
          </h1>{" "}
          <h2 className="inline">
            <span
              className="
                inline 
                text-[#524FB6] 
                dark:bg-gradient-to-r dark:from-[#FF0F68] dark:to-[#FF79A8] 
                dark:text-transparent dark:bg-clip-text
              "
            >
              Online
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Ofereça aos seus alunos simulações clínicas online com atores para
          desenvolver o raciocínio clínico
        </p>

        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 w-full max-w-[400px]">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-[#524FB6] text-white text-[1rem] py-3 hover:bg-primary-dark font-normal flex items-center justify-center gap-2 min-w-[200px]" /* Define o min-width */
          >
            <Clock className="h-5 w-5" /> {/* Ícone do relógio */}
            Lista de Espera
          </Button>

          <a
            href="#howItWorks" /* Referência ao ID do componente */
            className={`flex-1 ${buttonVariants({
              variant: "outline",
            })} flex items-center justify-center space-x-2 text-[1rem] py-3 min-w-[200px]`} /* Define o min-width */
            style={{ display: "flex", alignItems: "center" }}
          >
            <ArrowDownCircle className="w-5 h-5" /> {/* Adiciona o ícone */}
            <span>Saiba mais</span>
          </a>
        </div>
      </div>

      {/* Seção das Hero Cards */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Efeito de sombra */}
      <div className="shadow"></div>

      {/* Modal para Agendar Teste */}
      <ScheduleTestModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default Hero;
