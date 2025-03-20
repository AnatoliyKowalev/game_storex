export interface CloseButtonProps extends React.ComponentProps<"button"> {
  iconType?: TypeCloseIcon;
}

export type TypeCloseIcon = "close" | "caret";
