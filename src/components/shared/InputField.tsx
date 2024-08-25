import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues , Path} from "react-hook-form";

interface FieldProps<T extends FieldValues> {
  formControl: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  className?: string;
}

const InputField = <T extends FieldValues>({
  formControl,
  name,
  label,
  placeholder,
  className,
}: FieldProps<T>) => (
  <FormField
    control={formControl}
    name={name}
    render={({ field }) => (
      <FormItem className={className}>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
export default InputField;
