import { FC } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

const NotFound: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <div className="flex flex-col items-center justify-center my-auto">
      <h1 className="text-[100px] font-bold mb-2 flex items-center">
        {["4", "0", "4"].map((char, index) => (
          <motion.span
            key={index}
            className="inline-block mx-1"
            initial={{ y: 0, x: 0, rotate: 0 }}
            animate={{
              y: [0, -21, 0],
              x: [0, 10, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <Button onClick={goHome}>{t("goHome")}</Button>
    </div>
  );
};

export default NotFound;
