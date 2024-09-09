import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type PropsType = {
  label: string;
  date: Date;
  setDate: (date: Date) => void;
};

function CalenderDateField(props: PropsType) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className=" text-gray-700">{props.label} : </h4>
      <DatePicker
        className="min-w-32 h-7 border rounded-md border-gray-300 px-2"
        selected={props.date}
        onChange={(date) => props.setDate(date as Date)}
      />
    </div>
  );
}

export default CalenderDateField;
