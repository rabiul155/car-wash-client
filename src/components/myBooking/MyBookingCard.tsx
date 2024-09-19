import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type PropsType = {
  data: any;
};

function MyBookingCard(props: PropsType) {
  if (props.data?.length === 0) return null;
  return (
    <div>
      <h2 className="text-gray-800 text-xl font-bold p-4">Service upcoming</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {props.data.map((booking: any) => (
          <Card key={booking._id} className="w-[300px]">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <div>{booking.service.name}</div>
                <div className="text-green-700 text-sm ">Upcoming</div>
              </CardTitle>
              <CardDescription>
                Category : {booking.service.category}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-gray-800">
              <div className="flex justify-between">
                <div>Price : {booking.service.price}tk</div>
                <div>Duration : {booking.service.duration}min</div>
              </div>
              <div className="font-semibold text-red-500">
                Date : {booking.slot.date}{' '}
                <span className="text-sm font-medium">
                  ({booking.slot.startTime}-{booking.slot.endTime})
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MyBookingCard;
