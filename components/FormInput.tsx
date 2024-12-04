import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormInputProps<TSchema extends FieldValues> {
  control: Control<TSchema>;
  name: Path<TSchema>;
  placeholder: string;
  type?: string;
}

const FormInput = <TSchema extends FieldValues>({
  control,
  name,
  placeholder,
  type = "text",
}: FormInputProps<TSchema>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <Input type={type} placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormInput;
