import { FC, PropsWithChildren } from "react";

import { LabelColProps } from "./interfaces";

const LabelCol: FC<PropsWithChildren<LabelColProps>> = ({
  label,
  children,
}) => {
  return (
    <div className="flex flex-col gap-[4px] w-full">
      <div className="text-[10px] text-muted-foreground leading-[12px]">
        {label}
      </div>
      <div className="text-xs leading-[12px]">{children}</div>
    </div>
  );
};

export default LabelCol;
