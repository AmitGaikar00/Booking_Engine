import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control, FieldValues, Path, UseFormSetValue } from "react-hook-form";

interface SelectFieldProps<T extends FieldValues> {
  formControl: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  className?: string;
  options: string[];
  setValue?: UseFormSetValue<T>;
}

const SelectField = <T extends FieldValues>({
  formControl,
  name,
  label,
  placeholder,
  options,
  className,
  setValue,
}: SelectFieldProps<T>) => (
  <FormField
    control={formControl}
    name={name}
    render={({ field }) => (
      <FormItem className={className}>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Select
            onValueChange={
              setValue ? (value) => setValue(name, value) : field.onChange
            }
            value={field.value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="w-full">
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
export default SelectField;
