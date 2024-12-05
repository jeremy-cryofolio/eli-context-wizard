import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PropsWithChildren } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormSelectProps<TSchema extends FieldValues> {
  control: Control<TSchema>;
  name: Path<TSchema>;
  placeholder: string;
  content: React.ReactNode;
}

const FormSelect = <TSchema extends FieldValues>({
  control,
  name,
  placeholder,
  content,
}: FormSelectProps<TSchema> & PropsWithChildren) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          {content}
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormSelect;
