import { TableCell, TableRow } from '../ui/table';

import { SlotType } from '@/types/slot';

type ServiceTableRowProps = {
  index: number;
  slot: SlotType;
};

function ServiceTableRow(props: ServiceTableRowProps) {
  console.log(props.slot.date);
  return (
    <TableRow>
      <TableCell className="w-[100px]">{props.index + 1}</TableCell>
      <TableCell>{props.slot.service.name}</TableCell>
      <TableCell>{props.slot.date}</TableCell>

      <TableCell>
        {props.slot.startTime} - {props.slot.endTime}
      </TableCell>
      <TableCell className="uppercase">{props.slot.isBooked}</TableCell>
    </TableRow>
  );
}

export default ServiceTableRow;
