import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import CurrencyIcon from "@/assets/svg/currency.svg?react";

import { CURRENCIES } from "./constants";

import { TypeCurrency } from "./interfaces";
import { cn } from "@/lib/utils";

const CurrencySelect: FC = () => {
  const [currentCurrency, setCurrentCurrency] = useState<TypeCurrency>("USD");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-[4px] px-[8px]">
        <CurrencyIcon />
        <div className="text-white">{currentCurrency}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {CURRENCIES.map((currency) => (
          <DropdownMenuItem
            onClick={() => setCurrentCurrency(currency)}
            className={cn("w-[72px]", {
              "bg-select-item-active": currency === currentCurrency,
            })}
            key={currency}
          >
            <CurrencyIcon /> {currency}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencySelect;
