import { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import SubHeader from "@/components/common/SubHeader";
import CloseButton from "@/components/common/CloseButton";
import OrderPreview from "@/components/common/OrderPreview";
import OrderDetails from "@/components/common/OrderDetails";
import { Button } from "@/components/ui/button";

import { useGetOrderQuery } from "@/redux";

const Order: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const goOrders = () => navigate("/orders");

  const { data = [], isLoading } = useGetOrderQuery(id as string, {
    skip: !id,
  });

  const order = data?.[0];
  console.log(order);
  return (
    <div className="flex flex-col">
      <SubHeader>
        <CloseButton onClick={goOrders} />
        {t("order")}
      </SubHeader>
      {!isLoading && !!order ? (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <OrderPreview {...order} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <OrderDetails details={order.details} />
          </motion.div>
          <Button size="lg">{t("ask")}</Button>
        </>
      ) : null}
    </div>
  );
};

export default Order;
