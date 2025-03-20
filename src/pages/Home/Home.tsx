import { FC } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

import { clearUser } from "@/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

const Home: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { isAuthenticated } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col justify-center gap-[10px] m-auto w-full px-[16px]"
    >
      {isAuthenticated ? (
        <>
          <Button
            onClick={() => navigate("/orders")}
            className="font-bold"
            size="lg"
          >
            {t("orders")}
          </Button>
          <Button
            onClick={() => dispatch(clearUser())}
            variant="destructive"
            size="lg"
          >
            {t("logout")}
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => navigate("/sign-in?t=registration")} size="lg">
            {t("registration")}
          </Button>
          <Button onClick={() => navigate("/sign-in?t=login")} size="lg">
            {t("login")}
          </Button>
        </>
      )}
    </motion.div>
  );
};

export default Home;
