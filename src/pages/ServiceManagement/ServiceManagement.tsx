import Button from '@/components/shared/Button/Button';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { HiOutlineDotsVertical } from 'react-icons/hi';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  useDeleteServiceMutation,
  useGetServicesQuery,
} from '@/redux/features/services/servicesApi';
import Loading from '@/components/shared/Loading/Loading';
import { ServiceType } from '@/types/service';
import Modal from '@/components/shared/Modal/Modal';
import ServiceForm from '@/components/serviceManagement/ServiceForm';
import { toast } from 'sonner';

function ServiceManagement() {
  const [service, setService] = useState<ServiceType | undefined>();
  const [addServiceModal, setAddServiceModal] = useState(false);
  const [editServiceModal, setEditServiceModal] = useState(false);
  const { data, isLoading } = useGetServicesQuery({});
  const [deleteService] = useDeleteServiceMutation();
  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteService = async (_id: string) => {
    try {
      await deleteService(_id);
      toast.success('Service deleted');
    } catch (err) {
      toast.error('Something went wrong');
    }
  };
  return (
    <>
      {/* add service modal */}
      <Modal
        title="Add Service"
        show={addServiceModal}
        onClose={setAddServiceModal}
      >
        <ServiceForm showModal={setAddServiceModal} />
      </Modal>

      {/* add service modal */}
      <Modal
        title="Edit Service"
        show={editServiceModal}
        onClose={setEditServiceModal}
      >
        <ServiceForm service={service} showModal={setEditServiceModal} />
      </Modal>
      <div>
        {/* page Heder  */}
        <div className="flex justify-between items-center py-4 md:px-4">
          <h2 className="text-xl font-bold text-gray-800">
            Available Services
          </h2>
          <div>
            <Button onClick={() => setAddServiceModal(true)}>
              Add Service
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.map((service: ServiceType, index: number) => (
              <TableRow key={service._id}>
                <TableCell className="w-[100px]">{index + 1}</TableCell>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.category}</TableCell>
                <TableCell>{service.duration}min</TableCell>
                <TableCell>{service.price}tk</TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <HiOutlineDotsVertical
                        className="hover:bg-gray-200 p-1 rounded-full cursor-pointer"
                        size={24}
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-24">
                      <DropdownMenuItem
                        onClick={() => {
                          setEditServiceModal(true);
                          setService(service);
                        }}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteService(service._id)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default ServiceManagement;
