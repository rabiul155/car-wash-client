import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type PropsType = {
  data: any;
};

function MyBookingTable(props: PropsType) {
  if (props.data?.length === 0) return null;

  return (
    <div>
      <h2 className="text-gray-800 text-xl font-bold p-4">Service taken</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Service name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Slot</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.data.map((booking: any, index: number) => (
            <TableRow key={booking._id}>
              <TableCell className="w-[100px]">{index + 1}</TableCell>
              <TableCell>{booking.service.name}</TableCell>
              <TableCell>{booking.service.price}tk</TableCell>
              <TableCell>{booking.slot.date}</TableCell>
              <TableCell>
                {booking.slot.startTime}-{booking.slot.endTime}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MyBookingTable;
