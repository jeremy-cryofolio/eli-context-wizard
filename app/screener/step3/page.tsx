"use client";

import NavButtons from "@/components/NavButtons";
import Redirect from "@/components/Redirect";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatText } from "@/lib/utils";
import { useScreenerContext } from "@/providers/ScreenerProvider";
import { useRouter } from "next/navigation";

const Step3Page = () => {
  const router = useRouter();
  const { allData, step1Data, step2Data } = useScreenerContext();

  const onFinish = async () => {
    await fetch("/api/screener", {
      method: "POST",
      body: JSON.stringify(allData),
    });

    router.push("/screener/success");
  };

  if (!step1Data || !step2Data) {
    return <Redirect to="/screener/step1" />;
  }

  return (
    <Card className="motion-preset-blur-down w-96 motion-duration-300">
      <CardHeader>
        <CardTitle>Summary</CardTitle>
        <CardDescription>Step 3 of 3</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{`Address Line 1: ${formatText(allData.addressLine1)}`}</p>
        <p>{`Address Line 2: ${formatText(allData.addressLine2)}`}</p>
        <p>{`City: ${formatText(allData.city)}`}</p>
        <p>{`State: ${formatText(allData.state)}`}</p>
        <p>{`Zip: ${formatText(allData.zip)}`}</p>
        <p>{`Property Type: ${formatText(allData.propertyType)}`}</p>
        <p>{`Additional Info: ${formatText(allData.additionalInfo)}`}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <NavButtons backPath="/screener/step2" onFinish={onFinish} />
      </CardFooter>
    </Card>
  );
};

export default Step3Page;
