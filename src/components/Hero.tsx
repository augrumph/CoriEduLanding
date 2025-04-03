import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { ArrowDownCircle, Rocket } from "lucide-react";
import GoogleTag from "./GoogleTag";

export const Hero = () => {
  const location = useLocation();

  return (
    <section className="container flex flex-col justify-center items-center h-[calc(100vh-175px)] py-20 text-center space-y-8">
      <div className="space-y-6 max-w-[800px] mx-auto">
        {/* Título */}
        <main
          className="
            text-6xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
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
          Aprimore sua prática clínica com consultas simuladas online,
          impulsionando sua confiança no dia a dia.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-[500px] mx-auto">
          {/* Botão que navega para /modal mantendo a estilização original */}
          <Button
            asChild
            className="flex-1 bg-[#524FB6] text-white text-[1rem] py-3 hover:bg-primary-dark font-normal flex items-center justify-center gap-2 min-w-[200px]"
          >
            <Link to="/modal" state={{ backgroundLocation: location }}>
              <Rocket className="h-5 w-5" /> Acesse o Beta
            </Link>
          </Button>

          <a
            href="#howItWorks"
            className={`flex-1 ${buttonVariants({
              variant: "outline",
            })} flex items-center justify-center space-x-2 text-[1rem] py-3 min-w-[200px]`}
          >
            <ArrowDownCircle className="w-5 h-5" />
            <span>Saiba mais</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
