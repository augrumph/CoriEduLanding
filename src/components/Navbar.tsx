import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Instagram, Linkedin } from "lucide-react"; // Importando os ícones do Instagram e LinkedIn
import { buttonVariants } from "./ui/button";
import whiteLogo from "@/assets/white-logo.png"; // Importando a imagem
import { MouseEvent } from "react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#howItWorks", // Deve corresponder ao ID no componente HowItWorks
    label: "Produto",
  },
  {
    href: "#testimonials",
    label: "Depoimentos",
  },
  {
    href: "#pricing",
    label: "Preços",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  // Função para rolar até a seção correta
  const handleScroll = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img
                src={whiteLogo}
                alt="Logo"
                className="h-6 w-auto" // Ajuste de tamanho para ficar menor
              />
            </a>
          </NavigationMenuItem>

          {/* mobile - sem o toggle de modo */}
          <span className="flex md:hidden"></span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                onClick={(event) => handleScroll(event, route.href)} // Scroll manual suave
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            <a
              rel="noreferrer noopener"
              href="" // Link do Instagram
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              rel="noreferrer noopener"
              href="" // Link do LinkedIn
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
