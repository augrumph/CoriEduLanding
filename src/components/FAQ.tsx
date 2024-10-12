import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Como funciona o processo de simulação com atores?",
    answer:
      "Nosso processo de simulação permite que usuários interajam com atores que interpretam pacientes em videoconferências. O usuário conduz a consulta em tempo real, seguindo o fluxo de atendimento, desde o agendamento até o retorno com análise de exames.",
    value: "item-1",
  },
  {
    question: "Quais habilidades posso desenvolver nas simulações?",
    answer:
      "As simulações ajudam a desenvolver habilidades essenciais como comunicação com pacientes, diagnóstico clínico, interpretação de exames e tomada de decisão em cenários médicos realistas.",
    value: "item-2",
  },
  {
    question: "Como recebo feedback após as simulações?",
    answer:
      "Após cada simulação, você recebe feedback detalhado sobre sua performance, incluindo a análise de suas decisões durante a consulta, interpretação de exames e interação com o paciente.",
    value: "item-3",
  },
  {
    question: "É possível revisar os casos clínicos depois da simulação?",
    answer:
      "Sim, você pode revisar os casos clínicos, suas respostas e o feedback recebido a qualquer momento, permitindo uma análise contínua de seu desempenho e aprendizado.",
    value: "item-4",
  },
  {
    question: "Como é feito o agendamento das simulações?",
    answer:
      "O agendamento é feito via Calendly diretamente na plataforma. Você escolhe o horário disponível que melhor se adequa à sua agenda e segue com o processo de simulação com o paciente ator.",
    value: "item-5",
  },
  {
    question: "Quais são os tipos de exames disponíveis durante as simulações?",
    answer:
      "Dependendo do caso clínico, você pode solicitar diferentes tipos de exames, como exames de imagem ou laboratoriais, que são entregues antes da consulta de retorno para análise e discussão com o paciente.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Dúvidas{" "}
        <span className="inline bg-gradient-to-r from-[#FF0F68] to-[#FF79A8] text-transparent bg-clip-text">
          Frequentes
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Ainda tem dúvidas?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="
            gradient-underline
            dark:text-transparent 
            dark:bg-gradient-to-r 
            dark:from-[#FF0F68] 
            dark:to-[#FF79A8] 
            transition-all
          "
        >
          Entre em contato
        </a>
      </h3>
    </section>
  );
};
