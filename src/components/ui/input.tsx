// Input.tsx
"use client";

import * as React from "react";
import { cn } from "../../lib/utils"; // ajuste conforme o caminho do seu projeto

const Input = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      // Classes que não devem ser sobrescritas (tamanho, posição, etc.)
      "block w-full rounded-md bg-transparent text-white focus:outline-none transition-all",
      // Classes passadas via `className` podem sobrescrever apenas estilos permitidos
      className,
      // Classes que definem as cores específicas e devem ter prioridade
      "border border-novaCor placeholder-novoPlaceholder focus:border-white"
    )}
    {...props}
  />
));

Input.displayName = "Input";

export { Input };
