import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import OrdersList from "./OrdersList";
import SubHeader from "@/components/common/SubHeader";
import CloseButton from "@/components/common/CloseButton";

const Orders: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <div className="flex flex-col">
      <SubHeader>
        <CloseButton onClick={goHome} iconType="caret" />
        {t("orders")}
      </SubHeader>
      <OrdersList />
    </div>
  );
};

export default Orders;
