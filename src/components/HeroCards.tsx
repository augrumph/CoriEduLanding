import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Clock } from "lucide-react"; // Importa o ícone Clock
import { LightBulbIcon } from "./Icons";
import ScheduleTestModal from "./ScheduleTestModal"; // Importa o componente modal

export const HeroCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px] transform translate-y-[25px]">
      {/* Depoimento de Ana Maria */}
      <Card className="absolute w-[340px] -top-[30px] mb-[5px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="Foto de Ana Maria"
              src="https://i.pravatar.cc/150?img=47"
            />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Ana Maria</CardTitle>
            <p className="text-[#90c42f]">Estudante de Medicina</p>
          </div>
        </CardHeader>

        <CardContent className="text-left">
          "A plataforma me ajudou a ganhar confiança nas consultas reais."
        </CardContent>
      </Card>

      {/* Depoimento de Sabrina Bianchi */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Foto de Sabrina Bianchi"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Sabrina Bianchi</CardTitle>
          <p className="font-normal text-[#9ACB3F]">Estudante de Medicina</p>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            "Participar das simulações me permitiu entender melhor o processo
            clínico e aprimorar minhas habilidades de diagnóstico. Recomendo a
            todos os colegas!"
          </p>
        </CardContent>
      </Card>

      {/* Card de Pricing Atualizado */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="text-center flex flex-col items-center">
          <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
          <Badge
            variant="secondary"
            className="mt-2 mb-2 text-base text-[#9ACB3F] bg-secondary border-secondary border px[3px]"
          >
            Sob Consulta
          </Badge>
        </CardHeader>

        <CardContent className="flex flex-col items-center">
          <p className="text-sm text-center mb-4">
            Amplie o aprendizado com simulações médicas para sua instituição.
          </p>
          <Button
            className="w-full text-white flex items-center justify-center"
            style={{ backgroundColor: "#524FB6" }}
            onClick={handleOpenModal} // Abre o modal ao clicar no botão
          >
            <Clock className="w-4 h-4 mr-2" />
            Lista de Espera
          </Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Simulações Personalizadas",
              "Suporte dedicado",
              "Integração personalizada",
            ].map((benefit: string) => (
              <span key={benefit} className="flex items-center">
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Serviço */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-[#524FB6]/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Simulações de Casos Realistas</CardTitle>
            <p className="text-md mt-2">
              Pratique com cenários do mundo real para aprimorar suas
              habilidades clínicas.
            </p>
          </div>
        </CardHeader>
      </Card>

      {/* ScheduleTestModal - componente modal */}
      <ScheduleTestModal open={isModalOpen} onOpenChange={handleCloseModal} />
    </div>
  );
};
