import { FC } from "react";

import LabelCol from "@/components/common/LabelCol";
import OrderIndicator from "@/components/common/OrderIndicator";
import { Card, CardContent } from "@/components/ui/card";

import { OrderPreviewProps } from "./interfaces";

const OrderPreview: FC<OrderPreviewProps> = ({
  transactionId,
  date,
  status,
  gameName,
  gameId,
  amount,
  onClick,
}) => {
  return (
    <Card
      className="bg-card flex flex-col gap-[12px] py-[12px] px-[16px]"
      onClick={() => onClick?.(transactionId)}
    >
      <CardContent className="flex items-center h-full gap-[12px] px-0">
        <LabelCol label="Transaction ID">#{transactionId}</LabelCol>
        <LabelCol label="Date">{date}</LabelCol>
        <LabelCol label="Status">
          <OrderIndicator status={status} />
        </LabelCol>
      </CardContent>
      <hr />
      <CardContent className="flex items-center h-full gap-[12px] px-0">
        <LabelCol label="Game Name">{gameName}</LabelCol>
        <LabelCol label="Game ID">{gameId}</LabelCol>
        <LabelCol label="Ammount">{amount}</LabelCol>
      </CardContent>
    </Card>
  );
};

export default OrderPreview;
