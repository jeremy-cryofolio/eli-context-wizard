"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import EliLogo from "@/public/logo.svg";

const Home = () => {
  const router = useRouter();

  return (
    <div className="motion-preset-pop motion-duration-300 flex flex-col items-center justify-center gap-8">
      <Image className="mt-6" width={170} src={EliLogo} alt="Eli Logo" />
      <Button onClick={() => router.push("/screener")}>
        Context Wizard Demo
      </Button>
    </div>
  );
};

export default Home;
