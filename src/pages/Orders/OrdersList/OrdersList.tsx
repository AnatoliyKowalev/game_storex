import { FC } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Skeleton } from "@/components/ui/skeleton";
import OrderPreview from "@/components/common/OrderPreview";

import { useGetOrdersQuery } from "@/redux";

const OrdersList: FC = () => {
  const navigate = useNavigate();

  const goOrder = (id: string) => navigate(`/order/${id}`);

  const { data = [], isLoading } = useGetOrdersQuery(undefined);

  return (
    <div className="flex flex-col gap-[12px]">
      {isLoading ? (
        <>
          <Skeleton className="h-[100px] w-full bg-card" />
          <Skeleton className="h-[100px] w-full bg-card" />
        </>
      ) : (
        data.map((order) => (
          <motion.div
            initial={{ x: 50, opacity: 0 }} // Start off-screen to the right
            whileInView={{ x: 0, opacity: 1 }} // Animate when it enters viewport
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.2 }} // Trigger when 20% of the card is visible
            key={order.transactionId}
          >
            <OrderPreview onClick={goOrder} {...order} />
          </motion.div>
        ))
      )}
    </div>
  );
};

export default OrdersList;
