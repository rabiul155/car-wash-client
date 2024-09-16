import { useUpdateBookingMutation } from '@/redux/features/booking/bookingApi';
import InputField from '../shared/InputField/InputField';
import { Button } from '../ui/button';
import { useFormik } from 'formik';
import { toast } from 'sonner';
import { useState } from 'react';

type PropsType = {
  bookingId: string;
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
        await confirmBooking({ id: props.bookingId });
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
        <h2 className="text-gray-800 font-semibold">Payment Method </h2>
        <div className="flex gap-2 py-4">
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
      <div className="grid w-full items-center gap-4">
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
