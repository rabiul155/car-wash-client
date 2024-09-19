import { Input } from '@/components/ui/input';
import { ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';

type PropsType = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'number' | 'password';
  value: string | number | undefined;
  className?: string;
  disabled?: boolean;
  error?: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<any>) => void;
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
        disabled={props.disabled}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={twMerge(
          `h-9 focus:border-0 focus:outline-none`,
          props.className,
        )}
        type={props.type || 'text'}
        required
        placeholder="Type here"
      />
      {props?.error && (
        <div className="px-1 text-red-500 text-xs italic">{props.error}</div>
      )}
    </div>
  );
}

export default InputField;
