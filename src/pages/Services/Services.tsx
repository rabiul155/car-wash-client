import { useState } from 'react';

import { ServiceType } from '@/types/service';
import Loading from '@/components/shared/Loading/Loading';
import ServiceCard from '@/components/service/ServiceCard';
import { useGetServicesQuery } from '@/redux/features/services/servicesApi';
import Modal from '@/components/shared/Modal/Modal';
import BookServiceForm from '@/components/service/BookServiceForm';

interface QueryType {
  [key: string]: string;
}

function Services() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [service, setService] = useState<ServiceType | null>(null);
  const [query, setQuery] = useState<QueryType>({});

  const { data, isLoading, isError } = useGetServicesQuery(query);

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const handleBooking = (service: ServiceType) => {
    setService(service);
    setShowModal(true);
  };

  return (
    <>
      <Modal title="Book Service" show={showModal} onClose={setShowModal}>
        <BookServiceForm service={service} />
      </Modal>

      <div className="my-6 flex flex-col gap-6">
        {/* filtering */}

        {/* card section */}
        {data.data.length > 0 ? (
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {data.data.map((service: ServiceType) => (
              <ServiceCard
                key={service._id}
                service={service}
                handleBooking={handleBooking}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl m-8 font-bold text-yellow-400 ">
            No product found
          </div>
        )}
        {/* paginate */}
      </div>
    </>
  );
}

export default Services;
