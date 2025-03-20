import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { LANGUAGES } from "./constants";

import { TypeLanguage } from "./interfaces";

const LangSelect: FC = () => {
  const { i18n } = useTranslation();

  const langStorage = (localStorage.getItem("lang") ?? "en") as TypeLanguage;

  const [currentLang, setCurrentLang] = useState<TypeLanguage>(langStorage);

  const LangIcon = LANGUAGES[currentLang].Icon;

  useEffect(() => {
    i18n.changeLanguage(currentLang);
    localStorage.setItem("lang", currentLang);
  }, [currentLang]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-[4px] px-[8px]">
        <LangIcon />
        <div className="text-white">
          {LANGUAGES[currentLang].text.toUpperCase()}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(LANGUAGES).map((option) => {
          const key = option[0];
          const { Icon, text } = option[1];

          return (
            <DropdownMenuItem
              onClick={() => setCurrentLang(text)}
              className={cn("w-[65px]", {
                "bg-select-item-active": text === currentLang,
              })}
              key={key}
            >
              <Icon /> {text.toUpperCase()}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSelect;
