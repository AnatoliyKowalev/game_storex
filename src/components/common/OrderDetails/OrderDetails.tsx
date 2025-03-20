import { FC } from "react";

import { Card } from "@/components/ui/card";

import { IOrder } from "@/types/orders";

const OrderDetails: FC<Pick<IOrder, "details">> = ({ details }) => {
  return (
    <div className="flex flex-col my-[12px] gap-[8px]">
      <div className="flex items-center justify-between">
        <span className="text-[15px]">Your Goods:</span>
        <div className="text-[17px] font-bold">{`${details.goods} - ${details.price}`}</div>
      </div>
      <Card className="bg-card font-bold flex flex-col items-center justify-center gap-[8px] py-[20px]">
        <div className="flex items-center gap-[8px] min-w-[120px]">
          <span className="text-[16px]">{details.count}</span>
          <span className="text-[12px] py-[8px] px-[10px] bg-secondary rounded-[24px]">
            {details.income}
          </span>
        </div>
        <div className="flex items-center gap-[4px] min-w-[120px]">
          <span className="text-[14px]">{details.price}</span>
          {details.oldPrice ? (
            <span className="text-[12px] text-border line-through">
              {details.oldPrice}
            </span>
          ) : null}
        </div>
      </Card>
    </div>
  );
};

export default OrderDetails;
