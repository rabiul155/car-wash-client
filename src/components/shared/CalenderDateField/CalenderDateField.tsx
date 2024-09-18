import { twMerge } from 'tailwind-merge';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

type PropsType = {
  label: string;
  date: Date;
  className?: string;
  setDate: (date: Date) => void;
};

function CalenderDateField(props: PropsType) {
  return (
    <div className="w-full">
      <h4 className="my-1 text-gray-800 text-sm">{props.label} </h4>
      <DatePicker
        showIcon
        className={twMerge(
          `w-full h-8 border rounded-md border-gray-300 px-2`,
          props.className,
        )}
        selected={props.date}
        onChange={(date) => props.setDate(date as Date)}
      />
    </div>
  );
}

export default CalenderDateField;
