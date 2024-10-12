import medical from "../assets/growth.png";
import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container pt-24 sm:pt-32">
      <div className="bg-muted/50 rounded-lg py-12 relative overflow-visible">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={medical}
            alt="Professores discutindo sobre simulação médica"
            className="w-[300px] md:w-[300px] object-contain rounded-lg absolute top-[-200px] left-1/2 transform -translate-x-1/2 z-10 md:relative md:top-0 md:translate-x-0 md:left-0"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mt-[50px] md:mt-0">
                <span className="inline bg-gradient-to-r from-[#FF0F68] to-[#FF79A8] text-transparent bg-clip-text">
                  Inove
                </span>{" "}
                no Ensino Médico
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Nossa plataforma de simulação médica oferece teleconsultas
                realistas que enriquecem o currículo e aprimoram o aprendizado
                dos estudantes. Proporcione uma experiência prática e segura,
                com feedback personalizado e suporte contínuo, elevando a
                qualidade do ensino em sua instituição.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
