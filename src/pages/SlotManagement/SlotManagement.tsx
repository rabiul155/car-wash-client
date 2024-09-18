import SlotForm from '@/components/slotManagement/SlotForm';
import SlotTable from '@/components/slotManagement/SlotTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function SlotManagement() {
  return (
    <Tabs defaultValue="slot_list" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="slot_list">Slot List</TabsTrigger>
        <TabsTrigger value="slot_form">Add Slot</TabsTrigger>
      </TabsList>
      <TabsContent value="slot_list">
        <SlotTable />
      </TabsContent>
      <TabsContent value="slot_form">
        <SlotForm />
      </TabsContent>
    </Tabs>
  );
}

export default SlotManagement;
