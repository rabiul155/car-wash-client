import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ServiceTableRow from '@/components/slotManagement/ServiceTableRow';
import Loading from '@/components/shared/Loading/Loading';
import { SlotType } from '@/types/slot';
import { useGetTimeSlotsQuery } from '@/redux/features/slots/slotsApi';

function SlotManagement() {
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
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.data.map((slot: SlotType, index: number) => (
          <ServiceTableRow slot={slot} index={index} />
        ))}
      </TableBody>
    </Table>
  );
}

export default SlotManagement;
