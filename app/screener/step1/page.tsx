"use client";

import NavButtons from "@/components/NavButtons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from "@/components/FormInput";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useScreenerContext } from "@/providers/ScreenerProvider";
import { z } from "zod";
import { cn } from "@/lib/utils";

const Step1Schema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  addressLine1: z.string().min(1, { message: "Address line 1 is required" }),
  addressLine2: z.string().optional(),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zip: z.coerce.number().min(1, { message: "Zip is required" }),
});

export type TStep1Data = z.infer<typeof Step1Schema>;

const Step1Page = () => {
  const { step1Data, setStep1Data } = useScreenerContext();

  const form = useForm<TStep1Data>({
    resolver: zodResolver(Step1Schema),
    defaultValues: {
      firstName: step1Data?.firstName ?? "",
      lastName: step1Data?.lastName ?? "",
      addressLine1: step1Data?.addressLine1 ?? "",
      addressLine2: step1Data?.addressLine2 ?? "",
      city: step1Data?.city ?? "",
      state: step1Data?.state ?? "",
      zip: step1Data?.zip ?? 0,
    },
  });

  const classes = cn(
    "motion-preset-blur-down motion-duration-300 w-96",
    !form.formState.isValid &&
      form.formState.isSubmitted &&
      "motion-preset-shake motion-duration-200",
  );

  const onNext = (data: TStep1Data) => setStep1Data(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} noValidate>
        <Card className={classes}>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Step 1 of 3</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex gap-4">
              <FormInput
                control={form.control}
                name="firstName"
                placeholder="First Name"
              />
              <FormInput
                control={form.control}
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <FormInput
              control={form.control}
              name="addressLine1"
              placeholder="Address Line 1"
            />
            <FormInput
              control={form.control}
              name="addressLine2"
              placeholder="Address Line 2"
            />
            <FormInput control={form.control} name="city" placeholder="City" />
            <div className="flex gap-4">
              <FormInput
                control={form.control}
                name="state"
                placeholder="State"
              />
              <FormInput control={form.control} name="zip" placeholder="Zip" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <NavButtons
              nextPath="/screener/step2"
              isFormValid={form.formState.isValid}
            />
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default Step1Page;
