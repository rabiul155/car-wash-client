import { Input } from '@/components/ui/input';
import { ChangeEvent } from 'react';

type PropsType = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'number' | 'password';
  value: string | number;
  className?: string;
  onChange: (e: ChangeEvent<any>) => void;
};
function InputField(props: PropsType) {
  return (
    <div className="flex flex-col gap-1">
      <label className="mx-1 text-sm" htmlFor={props.name}>
        {props.label}
      </label>
      <Input
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={`h-9 focus:border-0 focus:outline-none ${props.className}`}
        type={props.type || 'text'}
        required
        placeholder="Type here"
      />
    </div>
  );
}

export default InputField;
