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

interface SelectFieldProps {
  formControl: any;
  name: string;
  label: string;
  placeholder: string;
  className?: string;
  options: string[];
  setValue?: any;
}

const SelectField: React.FC<SelectFieldProps> = ({
  formControl,
  name,
  label,
  placeholder,
  options,
  className,
  setValue,
}) => (
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
