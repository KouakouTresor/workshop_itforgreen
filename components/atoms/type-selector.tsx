import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TypeSelector = ({
  name,
  state,
  setState,
  values,
}: {
  name: string;
  state: string | undefined;
  setState: (value: string) => void;
  values: string[];
}) => (
  <Select value={state} onValueChange={setState}>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder={name} />
    </SelectTrigger>
    <SelectContent>
      {values.map((v) => (
        <SelectItem key={v} value={v}>
          {v}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default TypeSelector;
