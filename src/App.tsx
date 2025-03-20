import { FC } from "react";

import AppRoutes from "./AppRoutes";
import AppLayout from "@/components/layouts/AppLayout";

const App: FC = () => {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
};

export default App;
