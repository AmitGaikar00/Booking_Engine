import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FieldProps{
  formControl: any;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}

const InputField : React.FC<FieldProps> = ({
  formControl,
  name,
  label,
  placeholder,
  className,
}) => (
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
