import { useState } from "react";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { ArrowDownCircle, Clock } from "lucide-react"; // Importando os ícones
import ScheduleTestModal from "./ScheduleTestModal"; // Importação do modal

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="container flex flex-col justify-center items-center h-[calc(100vh-175px)] py-20 text-center space-y-8"
      /* h-[calc(100vh-25px)]: Altura total da tela menos 25px */
    >
      <div className="space-y-6 max-w-[800px] mx-auto">
        {/* Título */}
        <main
          className="
            text-6xl      /* Tamanho maior para telas menores */
            sm:text-6xl   /* Tamanho para >= 640px */
            md:text-7xl   /* Tamanho para >= 768px */
            lg:text-8xl   /* Tamanho para >= 1024px */
            font-bold
          "
        >
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
            Médicas <br />
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
              Humanizadas
            </span>
          </h2>
        </main>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-muted-foreground mx-auto">
          Ofereça uma experiência de ensino mais completa e envolvente com
          simulações online realizadas por atores
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-[500px] mx-auto">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-[#524FB6] text-white text-[1rem] py-3 hover:bg-primary-dark font-normal flex items-center justify-center gap-2 min-w-[200px]" /* Define o min-width */
          >
            <Clock className="h-5 w-5" /> {/* Ícone do relógio */}
            Fale Conosco
          </Button>

          <a
            href="#howItWorks" /* Referência ao ID do componente */
            className={`flex-1 ${buttonVariants({
              variant: "outline",
            })} flex items-center justify-center space-x-2 text-[1rem] py-3 min-w-[200px]`} /* Define o min-width */
          >
            <ArrowDownCircle className="w-5 h-5" /> {/* Adiciona o ícone */}
            <span>Saiba mais</span>
          </a>
        </div>
      </div>

      {/* Modal para Agendar Teste */}
      <ScheduleTestModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default Hero;
