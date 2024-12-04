"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const Home = () => {
  const router = useRouter();

  return (
    <div className="motion-preset-pop motion-duration-300 flex flex-col items-center justify-center gap-8">
      <Image className="mt-6" src={Logo} alt="Eli Logo" width={170} />
      <Button onClick={() => router.push("/screener")}>
        Context Wizard Demo
      </Button>
    </div>
  );
};

export default Home;
