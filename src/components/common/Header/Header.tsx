import { FC } from "react";

import ModeSelect from "./ModeSelect";
import LangSelect from "./LangSelect";
import CurrencySelect from "./CurrencySelect";

import LogoIcon from "@/assets/svg/logo.svg?react";

const Header: FC = () => {
  return (
    <div className="flex flex-row gap-[4px] bg-primary-foreground px-[12px] py-[8px] text-white sticky top-[0px] z-2">
      <LogoIcon className="mr-auto text-contrast" />
      <CurrencySelect />
      <LangSelect />
      <ModeSelect />
    </div>
  );
};
export default Header;
