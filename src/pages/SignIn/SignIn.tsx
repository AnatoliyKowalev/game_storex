import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";

import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import BluredBg from "@/components/common/BluredBg";
import CloseButton from "@/components/common/CloseButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

import { RootState } from "@/redux";
import { EnumSignInTabs } from "./interfaces";

const SignIn: FC = () => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState(EnumSignInTabs.login);

  const [searchParams] = useSearchParams();
  const tParam = searchParams.get("t");

  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  const goHome = () => navigate("/");

  const defaultTab =
    !!tParam && Object.values(EnumSignInTabs).some((el) => el === tParam)
      ? tParam
      : EnumSignInTabs.login;

  useEffect(() => {
    isAuthenticated && goHome();
  }, [isAuthenticated]);

  useEffect(() => setActiveTab(defaultTab as EnumSignInTabs), []);

  return (
    <div className="flex flex-col items-center justify-center m-auto w-full">
      <Tabs
        defaultValue={defaultTab}
        onValueChange={(e) => setActiveTab(e as EnumSignInTabs)}
        className="w-full z-1 bg-form rounded-md p-[16px]"
      >
        <div className="flex items-center gap-[16px] mb-[24px]">
          <TabsList className="grid w-full grid-cols-2 relative">
            {Object.values(EnumSignInTabs).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="relative z-10 bg-transparent !important"
              >
                {t(tab.toLocaleLowerCase())}
              </TabsTrigger>
            ))}
            {/* Animated Active Tab Indicator */}
            <motion.div
              className={cn(
                `absolute h-[31px] w-[49%] bg-white rounded-lg ${
                  activeTab === EnumSignInTabs.login
                    ? "left-[4px]"
                    : "left-[2px]"
                }`,
                {
                  "left-[4px]": activeTab === EnumSignInTabs.login,
                }
              )}
              animate={{
                x: activeTab === EnumSignInTabs.registration ? "100%" : "0%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </TabsList>
          <CloseButton onClick={goHome} />
        </div>
        <TabsContent value={EnumSignInTabs.login}>
          <LoginForm />
        </TabsContent>
        <TabsContent value={EnumSignInTabs.registration}>
          <RegistrationForm />
        </TabsContent>
      </Tabs>
      <BluredBg />
    </div>
  );
};

export default SignIn;
