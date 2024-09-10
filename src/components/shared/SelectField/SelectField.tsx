import { twMerge } from 'tailwind-merge';
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
  className?: string;
  handleValueChange: (val: string) => void;
};

function SelectField(props: PropsType) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className=" text-gray-700">{props.label} </h4>
      <Select onValueChange={props.handleValueChange}>
        <SelectTrigger className={twMerge(`w-32 h-8 z-0`, props.className)}>
          <SelectValue placeholder={props.placeholder || 'Select One'} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {props?.items && props.items.length > 0 ? (
              props.items.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  disabled={item.isDisabled}
                >
                  {item.label}
                </SelectItem>
              ))
            ) : (
              <SelectItem value={'No data found'} disabled={true}>
                No data found
              </SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectField;
