import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectOptionType } from '@/types/common';

type PropsType = {
  label: string;
  items: SelectOptionType[];
  placeholder?: string;
  classNames?: string;
  handleValueChange: (val: string) => void;
};

function SelectField(props: PropsType) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className=" text-gray-700">{props.label} </h4>
      <Select onValueChange={props.handleValueChange}>
        <SelectTrigger
          className={`w-32 max-w-48 h-8 border-1 border-gray-300 ${props.classNames}
          `}
        >
          <SelectValue
            className="py-0"
            placeholder={props.placeholder || 'Select One'}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {props.items.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                disabled={item.isDisabled}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectField;
