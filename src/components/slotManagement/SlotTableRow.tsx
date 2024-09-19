import { TableCell, TableRow } from '../ui/table';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SlotType } from '@/types/slot';
import { useUpdateSlotsMutation } from '@/redux/features/slots/slotsApi';
import { toast } from 'sonner';

type ServiceTableRowProps = {
  index: number;
  slot: SlotType;
};

function SlotTableRow(props: ServiceTableRowProps) {
  const [updateSlot] = useUpdateSlotsMutation();
  const handleUpdateStatus = async (data: {
    _id: string;
    isBooked: string;
  }) => {
    try {
      await updateSlot(data);
      toast.success('Status updated');
    } catch (err) {
      toast.error('Something went wrong');
    }
  };
  return (
    <TableRow>
      <TableCell className="w-[100px]">{props.index + 1}</TableCell>
      <TableCell>{props.slot?.service?.name}</TableCell>
      <TableCell>{props.slot.date}</TableCell>

      <TableCell>
        {props.slot.startTime} - {props.slot.endTime}
      </TableCell>
      <TableCell className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger
            disabled={props.slot.isBooked === 'booked'}
            asChild
          >
            <div
              className={`px-2 py-1 uppercase w-24 text-center rounded cursor-pointer
              ${props.slot.isBooked === 'booked' && 'bg-red-100'}
              ${props.slot.isBooked === 'canceled' && 'bg-yellow-100'}
              ${props.slot.isBooked === 'available' && 'bg-green-100'}
              `}
            >
              {props.slot.isBooked}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                handleUpdateStatus({
                  _id: props.slot._id,
                  isBooked: 'available',
                })
              }
            >
              Available
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                handleUpdateStatus({
                  _id: props.slot._id,
                  isBooked: 'canceled',
                })
              }
            >
              Canceled
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

export default SlotTableRow;
