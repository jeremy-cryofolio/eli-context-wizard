import { PropsWithChildren } from "react";
import { ScreenerProvider } from "@/providers/ScreenerProvider";

const ScreenerLayout = ({ children }: PropsWithChildren) => (
  <div className="flex items-center justify-center">
    <ScreenerProvider>{children}</ScreenerProvider>
  </div>
);

export default ScreenerLayout;
