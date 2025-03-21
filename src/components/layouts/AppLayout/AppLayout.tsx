import { FC, PropsWithChildren } from "react";

import Header from "@/components/common/Header";
import { ThemeProvider } from "@/components/context/ThemeProvider";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="app-layout bg-primary relative h-full w-full">
        <div className="md:max-w-[600px] mx-auto h-full w-full flex flex-col p-[12px] overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
