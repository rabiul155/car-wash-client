import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useCancelBookingMutation } from '@/redux/features/booking/bookingApi';
import { toast } from 'sonner';

type BookingCardProps = {
  booking: any;

  confirmBooking: (id: string) => void;
};

function BookingCard(props: BookingCardProps) {
  const { customer, slot, service } = props.booking;
  const [cancelBooking] = useCancelBookingMutation({});

  const handleCancelBooking = async () => {
    try {
      await cancelBooking({ id: props.booking._id });
      toast.success('Booking Canceled');
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-4 bg-slate-100 p-4 rounded-md">
      <div className="flex-1 flex-grow p-4 rounded-md bg-slate-50 ">
        <div className="flex gap-2">
          <img
            className="object-cover object-center hidden lg:block rounded-md  h-28"
            src={service.image}
            alt="service"
          />

          <div className="text-gray-800">
            <h4 className="text-lg font-bold">Service Name : {service.name}</h4>
            <h6 className="text-sm">Category : {service.category}</h6>
            <div className="text-sm">Price : {service.price} tk</div>
            <div className="text-sm">Duration : {service.duration} min</div>
            <div className="font-semibold">Booking Date : {slot.date}</div>
            <div className="font-semibold">
              Status :{' '}
              <span className="text-green-500">
                {props.booking.isConfirmed ? 'Confirmed' : 'Pending'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Card className="w-full lg:w-96 bg-slate-50">
        <CardContent className="flex flex-col gap-2 p-4">
          <Input className="h-7 text-gray-800" value={customer.name} />
          <Input className="h-7 text-gray-800" value={customer.email} />
          <Input
            className="h-7 text-gray-800"
            value={`slot - ${slot.startTime} - ${slot.endTime}`}
          />

          <div className="flex gap-4 mt-2">
            <Button
              onClick={handleCancelBooking}
              variant="outline"
              disabled={props.booking.isConfirmed}
              className="w-full h-8 text-gray-800"
            >
              Cancel
            </Button>
            <Button
              onClick={() => props.confirmBooking(props.booking._id)}
              variant="outline"
              disabled={props.booking.isConfirmed}
              className="w-full h-8 text-gray-800"
            >
              Confirm
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BookingCard;
