import { useState } from 'react';

import { ServiceType } from '@/types/service';
import Loading from '@/components/shared/Loading/Loading';
import ServiceCard from '@/components/shared/ServiceCard/ServiceCard';
import { useGetServicesQuery } from '@/redux/features/services/servicesApi';

interface QueryType {
  [key: string]: string;
}

function Services() {
  const [query, setQuery] = useState<QueryType>({});

  const { data, isLoading, isError } = useGetServicesQuery(query);

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="my-6 flex flex-col gap-6">
      {/* filtering */}

      {/* card section */}
      {data.data.length > 0 ? (
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.data.map((service: ServiceType) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl m-8 font-bold text-yellow-400 ">
          No product found
        </div>
      )}
      {/* paginate */}
    </div>
  );
}

export default Services;
