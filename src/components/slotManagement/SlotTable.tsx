import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import Loading from '@/components/shared/Loading/Loading';
import { SlotType } from '@/types/slot';
import { useGetTimeSlotsQuery } from '@/redux/features/slots/slotsApi';
import SlotTableRow from '@/components/slotManagement/SlotTableRow';

function SlotTable() {
  const { data, isLoading } = useGetTimeSlotsQuery({});

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Service Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Slot</TableHead>
          <TableHead className="flex items-center justify-end">
            <div className=" w-24">Status(edit)</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.data.map((slot: SlotType, index: number) => (
          <SlotTableRow key={index} slot={slot} index={index} />
        ))}
      </TableBody>
    </Table>
  );
}

export default SlotTable;
