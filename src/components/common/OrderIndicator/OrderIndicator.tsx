import { FC } from "react";
import { cn } from "@/lib/utils";

import { IOrder } from "@/types/orders";

const OrderIndicator: FC<Pick<IOrder, "status">> = ({ status }) => (
  <div className="flex items-center gap-[4px]">
    <div className="flex items-center gap-2">
      <span
        className={cn("w-3 h-3 rounded-full  border-2", {
          "bg-success border-success/2": status === "Success",
          "bg-warning border-warning/2": status === "Pending",
          "bg-error border-error/2": status === "Canceled",
        })}
      />
    </div>
    {status}
  </div>
);

export default OrderIndicator;
