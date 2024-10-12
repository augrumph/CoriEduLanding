import { motion } from "framer-motion";
import { Stethoscope, ThumbsUp, ClipboardList } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const Statistics = () => {
  const stats = [
    {
      quantity: "50+",
      description: "Consultas Realizadas",
      icon: (
        <Stethoscope
          size={32}
          className="text-black dark:text-white sm:size-[24px]"
          aria-label="Consultas Realizadas"
        />
      ),
    },
    {
      quantity: "95%",
      description: "Feedback Positivo",
      icon: (
        <ThumbsUp
          size={32}
          className="text-black dark:text-white sm:size-[24px]"
          aria-label="Feedback Positivo"
        />
      ),
    },
    {
      quantity: "20+",
      description: "Casos Clínicos",
      icon: (
        <ClipboardList
          size={32}
          className="text-black dark:text-white sm:size-[24px]"
          aria-label="Casos Clínicos"
        />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {stats.map(({ quantity, description, icon }, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            className="flex flex-col items-center justify-between p-6 w-full h-full"
            style={{
              borderWidth: "0.5px",
              borderColor: "#D1D5DB", // Cor cinza claro
              borderStyle: "solid",
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
              {icon}
            </div>

            <h3 className="text-3xl font-bold text-black dark:text-white sm:text-2xl">
              {quantity}
            </h3>

            <Badge
              variant="secondary"
              className="mt-2 text-base sm:text-sm text-[#9ACB3F] bg-secondary border-secondary border"
            >
              {description}
            </Badge>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
