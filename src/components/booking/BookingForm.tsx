import { useUpdateBookingMutation } from '@/redux/features/booking/bookingApi';
import InputField from '../shared/InputField/InputField';
import { Button } from '../ui/button';
import { useFormik } from 'formik';
import { toast } from 'sonner';
import { useState } from 'react';
import { BookingType } from './BookingCard';

type PropsType = {
  booking: BookingType;
  showModal: (val: boolean) => void;
};

function BookingForm(props: PropsType) {
  const [method, setMethod] = useState('');
  const [confirmBooking] = useUpdateBookingMutation({});

  const formik = useFormik({
    initialValues: {
      phone: '',
      pin: '',
    },

    onSubmit: async (values) => {
      if (!method) {
        return toast.error('Please select a method');
      }
      try {
        await confirmBooking({ id: props.booking.id });
        toast.success('Booking Confirmed');
        props.showModal(false);
      } catch (err: any) {
        toast.error(err.data.message);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-4 flex flex-col gap-4">
      <div>
        <div className="flex flex-col gap-2 bg-slate-50 rounded-md p-2">
          <div className="font-bold"> Total price : {props.booking.price}</div>
          <div className="text-xs text-gray-800">
            Date : {props.booking.date} ({props.booking.slot})
          </div>
        </div>
        <h2 className="text-gray-800 font-semibold p-2">Payment Method </h2>
        <div className="flex gap-2 px-2 py-4">
          <Button
            type="button"
            className={`w-full h-8 text-gray-800 ${method === 'bkash' && 'bg-green-500  hover:bg-green-500 text-white hover:text-white'}`}
            onClick={() => setMethod('bkash')}
            variant={'outline'}
          >
            Bkash
          </Button>
          <Button
            type="button"
            className={`w-full h-8 text-gray-800 ${method === 'nogod' && 'bg-green-500 hover:bg-green-500 text-white hover:text-white'}`}
            onClick={() => setMethod('nogod')}
            variant={'outline'}
          >
            Nogod
          </Button>
          <Button
            type="button"
            className={`w-full h-8 text-gray-800 ${method === 'rocket' && 'bg-green-500 hover:bg-green-500 text-white hover:text-white'}`}
            onClick={() => setMethod('rocket')}
            variant={'outline'}
          >
            Rocket
          </Button>
        </div>
      </div>
      <div className="grid w-full items-center gap-4 px-2">
        <InputField
          label="Phone"
          name="phone"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <InputField
          label="Pin"
          name="pin"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.pin}
        />
      </div>
      <footer className="mt-4 flex justify-end">
        <Button type="submit">Confirm</Button>
      </footer>
    </form>
  );
}

export default BookingForm;
