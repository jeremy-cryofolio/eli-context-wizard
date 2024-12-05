"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="motion-preset-pop flex flex-col items-center justify-center gap-8 motion-duration-300">
      <Logo />
      <Button onClick={() => router.push("/screener")}>
        Context Wizard Demo
      </Button>
    </div>
  );
};

export default Home;
