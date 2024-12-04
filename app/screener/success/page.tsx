"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();

  return (
    <Card className="motion-preset-confetti w-96">
      <CardHeader>
        <CardTitle>Success</CardTitle>
      </CardHeader>
      <CardContent>
        Your information has been submitted successfully!
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={() => router.push("/")}>Return Home</Button>
      </CardFooter>
    </Card>
  );
};

export default SuccessPage;
