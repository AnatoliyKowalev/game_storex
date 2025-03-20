import { FC } from "react";

import { Button } from "@/components/ui/button";

import CloseIcon from "@/assets/svg/close.svg?react";
import CaretLeftIcon from "@/assets/svg/caret-left.svg?react";

import { CloseButtonProps } from "./interfaces";

const icons = {
  close: <CloseIcon className="size-[24px]" />,
  caret: <CaretLeftIcon className="size-[24px]" />,
};

const CloseButton: FC<CloseButtonProps> = ({
  onClick,
  iconType = "close",
  ...rest
}) => {
  return (
    <Button
      onClick={onClick}
      variant="link"
      className="py-0 px-0 !important text-contrast"
      size="icon"
      {...rest}
    >
      {icons[iconType]}
    </Button>
  );
};

export default CloseButton;
