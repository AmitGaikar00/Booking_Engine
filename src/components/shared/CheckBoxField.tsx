import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

interface FieldProps<T extends FieldValues> {
  formControl: Control<T>;
  name: Path<T>;
  label: string;
  setShowTerms?: React.Dispatch<React.SetStateAction<boolean>>;
  flag?: boolean;
}

const CheckBoxField = <T extends FieldValues>({
  formControl,
  name,
  label,
  setShowTerms,
  flag
}: FieldProps<T>) => (
  <FormField
    control={formControl}
    name={name}
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 space-y-0">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>
          {label}
          {flag && (
            <span
              className="pl-3 text-xs text-orange-400 hover:text-orange-500 underline cursor-pointer"
              onClick={setShowTerms && (() => setShowTerms((prev) => !prev))}
            >
              click here
            </span>
          )}
        </FormLabel>
      </FormItem>
    )}
  />
);
export default CheckBoxField;
