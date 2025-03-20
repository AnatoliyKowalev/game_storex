import UaLangIcon from "@/assets/svg/ua-lang.svg?react";
import EngLangIcon from "@/assets/svg/eng-lang.svg?react";

import { LangOption } from "./interfaces";

export const LANGUAGES: {
  en: LangOption;
  ua: LangOption;
} = {
  en: { Icon: EngLangIcon, text: "en" },
  ua: { Icon: UaLangIcon, text: "ua" },
};
