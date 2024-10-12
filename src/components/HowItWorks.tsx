import { useState } from "react";
import {
  Calendar,
  FileText,
  User,
  CheckCircle,
  RotateCcw,
  Mail,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import agendamento from "../assets/agendamento.png";
import ficha from "../assets/ficha.png";
import atendimento from "../assets/atendimento.jpg";
import exames from "../assets/exames.png";
import retornoConsulta from "../assets/retorno_agendamento.png";
import retornoAtendimento from "../assets/retorno.jpg";
import feedback from "../assets/feedback.png";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  image?: string;
}

const features: FeatureProps[] = [
  {
    icon: <Calendar className="w-8 h-8 text-white" />,
    title: "1. Agendamento do Atendimento",
    description:
      "O estudante escolhe o horário disponível para realizar o atendimento.",
    image: agendamento,
  },
  {
    icon: <FileText className="w-8 h-8 text-white" />,
    title: "2. Recebimento da Ficha do Paciente",
    description:
      "O estudante recebe a ficha do paciente com as informações relevantes sobre o caso.",
    image: ficha,
  },
  {
    icon: <User className="w-8 h-8 text-white" />,
    title: "3. Consulta simulada com Ator",
    description:
      "O estudante realiza a consulta simulada com o paciente ator, preenchendo a ficha durante o atendimento.",
    image: atendimento,
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    title: "4. Recebimento de Exames",
    description:
      "O estudante recebe os resultados dos exames solicitados antes da próxima consulta.",
    image: exames,
  },
  {
    icon: <RotateCcw className="w-8 h-8 text-white" />,
    title: "5. Agendamento de Retorno",
    description:
      "O estudante agenda uma consulta de retorno para avaliar os exames.",
    image: retornoConsulta,
  },
  {
    icon: <Mail className="w-8 h-8 text-white" />,
    title: "6. Consulta de Retorno",
    description: "O estudante analisa os resultados dos exames com o paciente.",
    image: retornoAtendimento,
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-white" />,
    title: "7. Recebimento de Feedback",
    description:
      "O estudante recebe feedback sobre seu desempenho na consulta.",
    image: feedback,
  },
];

export const HowItWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === features.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return features.length - 1;
      return prevIndex === 0 ? features.length - 1 : prevIndex - 1;
    });
  };

  return (
    <section id="howItWorks" className="container pt-16 sm:pt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Fluxo{" "}
          <span className="bg-gradient-to-r from-[#9ACB3F] to-[#c8e29b] text-transparent bg-clip-text">
            Intuitivo e Descomplicado
          </span>
        </h2>

        <h3 className="text-xl text-center text-muted-foreground pt-4">
          Acompanhe como ocorre cada etapa do processo
        </h3>
      </div>

      {/* Versão Desktop */}
      <div className="hidden md:flex items-start">
        {/* Lado Esquerdo: Badges */}
        <div className="w-1/2 p-6">
          <div className="flex flex-col space-y-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex items-center space-x-4 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                  currentIndex === index
                    ? "bg-[#9ACB3F] text-white"
                    : "bg-[#27272A] text-white hover:bg-[#3C3C3C]"
                }`}
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <span className="text-lg font-medium">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Lado Direito: Imagem */}
        <div className="w-1/2 p-6">
          <img
            src={features[currentIndex].image}
            alt={features[currentIndex].title}
            className="w-full h-full max-h-[500px] rounded-lg object-cover object-top cursor-pointer"
            onClick={() => handleImageClick(currentIndex)}
          />
        </div>
      </div>

      {/* Modal para visualização da imagem ampliada */}
      {isModalOpen && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Botão de fechar */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Botão anterior */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              onClick={handlePrevImage}
            >
              <ChevronLeft />
            </button>

            {/* Imagem ampliada */}
            <img
              src={features[selectedImageIndex].image}
              alt={features[selectedImageIndex].title}
              className="max-w-full max-h-full rounded-lg"
            />

            {/* Botão próximo */}
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              onClick={handleNextImage}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}

      {/* Versão Mobile */}
      <div className="md:hidden mt-2">
        {/* Breadcrumb com barras de progresso */}
        <div className="flex justify-center items-center mb-6 space-x-2">
          {features.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded ${
                index === currentIndex
                  ? "bg-[#9ACB3F]"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>

        {/* Card Atual com Flechas */}
        <div className="relative flex justify-center mt-2">
          <div className={`w-full max-w-md`} key={currentIndex}>
            <div
              className="mx-auto relative overflow-visible mt-2 p-4"
              style={{ marginTop: "10px" }}
            >
              {/* Badge no topo */}
              <Badge
                variant="secondary"
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-base sm:text-sm text-[#9ACB3F] whitespace-nowrap"
              >
                {features[currentIndex].title}
              </Badge>

              {/* Botões de navegação */}
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === 0 ? features.length - 1 : currentIndex - 1
                  )
                }
                className="absolute -left-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                style={{ top: "150px" }}
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === features.length - 1 ? 0 : currentIndex + 1
                  )
                }
                className="absolute -right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                style={{ top: "150px" }}
              >
                <ChevronRight />
              </button>

              {features[currentIndex].image && (
                <div className="mt-5">
                  <img
                    src={features[currentIndex].image}
                    alt={features[currentIndex].title}
                    className="w-full h-auto max-h-96 rounded-lg object-cover object-top cursor-pointer"
                    onClick={() => handleImageClick(currentIndex)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
