import { FC, PropsWithChildren } from "react";

const SubHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center font-bold text-lg gap-2 mb-[12px]">
      {children}
    </div>
  );
};

export default SubHeader;
