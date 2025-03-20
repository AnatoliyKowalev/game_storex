import { FunctionComponent, SVGProps } from "react";

export type TypeLanguage = "ua" | "en";

export type LangOption = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  text: TypeLanguage;
};
