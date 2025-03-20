import { IOrder } from "@/types/orders";

export interface OrderPreviewProps extends IOrder {
  onClick?: (id: string) => void;
}
