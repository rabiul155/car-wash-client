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
  label?: string;
  items: SelectOptionType[];
  placeholder?: string;
  className?: string;
  handleValueChange: (val: string) => void;
  error?: string;
};

function SelectField(props: PropsType) {
  return (
    <div className="flex flex-col gap-1">
      {props.label && <label className="mx-1 text-sm">{props.label} </label>}
      <Select onValueChange={props.handleValueChange}>
        <SelectTrigger className={twMerge(` h-8 z-0`, props.className)}>
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
      {props?.error && (
        <div className="px-1 text-red-500 text-xs italic">{props.error}</div>
      )}
    </div>
  );
}

export default SelectField;
