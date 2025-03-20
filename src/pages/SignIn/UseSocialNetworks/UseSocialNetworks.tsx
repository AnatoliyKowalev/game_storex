import { FC } from "react";
import { useTranslation } from "react-i18next";

import { SOCIAL_NETWORKS } from "./constants";

const UseSocialNetworks: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-[12px] mt-[16px]">
      <p className="text-xs">{t("useSocialNetworks")}</p>
      <div className="flex gap-[8px]">
        {SOCIAL_NETWORKS.map(({ link, Icon }) => (
          <a href={link} target="_blank" key={link}>
            {<Icon />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default UseSocialNetworks;
