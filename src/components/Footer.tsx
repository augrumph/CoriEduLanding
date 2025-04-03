import { LogoIcon } from "./Icons";
import GoogleTag from "./GoogleTag";
import whiteLogo from "@/assets/white-logo.png"; // Certifique-se que o caminho do logo está correto

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <img
              src={whiteLogo}
              alt="Logo"
              className="h-6 w-auto" // Ajuste de tamanho para ficar menor
            />
          </a>
        </div>

        {/* Aqui você pode adicionar mais colunas ou conteúdo para o footer */}
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
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
            Cori Educational
          </a>
        </h3>
      </section>
    </footer>
  );
};

export default Footer;
