import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Importando o Badge

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=47",
    name: "Ana Maria",
    userName: "Estudante de Medicina",
    comment: "A plataforma me ajudou a ganhar confiança nas consultas reais.",
  },
  {
    image: "https://i.pravatar.cc/150?img=32",
    name: "Sabrina Bianchi",
    userName: "Estudante de Medicina",
    comment:
      "Participar das simulações me permitiu entender melhor o processo clínico e aprimorar minhas habilidades de diagnóstico. Recomendo a todos os colegas!",
  },
  {
    image: "https://i.pravatar.cc/150?img=10",
    name: "Maria Fernandes",
    userName: "Estudante de Medicina",
    comment:
      "A plataforma de simulações médicas me ajudou a visualizar casos clínicos reais antes mesmo de entrar no hospital. Sinto que estou muito mais preparada para os desafios do dia a dia na medicina.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container pt-24 sm:pt-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Veja porque
        <span className="bg-gradient-to-r from-[#FF0F68] to-[#FF79A8] text-transparent bg-clip-text">
          {" "}
          nossos usuários adoram{" "}
        </span>
        nossa plataforma
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Conheça as experiências de quem já usou nossa plataforma para melhorar
        suas habilidades clínicas.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt={name} src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start">
                  <Badge
                    variant="secondary"
                    className="text-white pl-1 pr-1 text-sm rounded-lg bg-secondary"
                    style={{ borderRadius: "8px" }}
                  >
                    {name}
                  </Badge>
                  <CardDescription className="text-[#9ACB3F] ml-1">
                    {userName}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="text-left">{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
