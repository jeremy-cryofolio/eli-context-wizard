"use client";

import FormInput from "@/components/FormInput";
import NavButtons from "@/components/NavButtons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import FormSelect from "@/components/FormSelect";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useScreenerContext } from "@/providers/ScreenerProvider";
import Redirect from "@/components/Redirect";
import { cn } from "@/lib/utils";

export const Step2Schema = z.object({
  propertyType: z.enum(["singleFamily", "multiFamily"]),
  additionalInfo: z.string().optional(),
});

export type TStep2Data = z.infer<typeof Step2Schema>;

const Step2Page = () => {
  const { step1Data, step2Data, setStep2Data } = useScreenerContext();

  const form = useForm<TStep2Data>({
    resolver: zodResolver(Step2Schema),
    defaultValues: {
      propertyType: step2Data?.propertyType ?? "singleFamily",
      additionalInfo: step2Data?.additionalInfo ?? "",
    },
  });

  const classes = cn(
    "w-96 motion-preset-blur-down motion-duration-300",
    !form.formState.isValid &&
      form.formState.isSubmitted &&
      "motion-preset-shake motion-duration-200",
  );

  const onNext = (data: TStep2Data) => setStep2Data(data);

  if (!step1Data) {
    return <Redirect to="/screener/step1" />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} noValidate>
        <Card className={classes}>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
            <CardDescription>Step 2 of 3</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <FormSelect
              control={form.control}
              name="propertyType"
              placeholder="Property Type"
              content={
                <SelectContent>
                  <SelectItem value="singleFamily">Single Family</SelectItem>
                  <SelectItem value="multiFamily">Multi Family</SelectItem>
                </SelectContent>
              }
            />
            <FormInput
              control={form.control}
              name="additionalInfo"
              placeholder="Additional Information"
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <NavButtons
              backPath="/screener/step1"
              nextPath="/screener/step3"
              isFormValid={form.formState.isValid}
            />
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default Step2Page;
