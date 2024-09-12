import { useState } from 'react';

import { ServiceType } from '@/types/service';
import Loading from '@/components/shared/Loading/Loading';
import ServiceCard from '@/components/service/ServiceCard';
import { useGetServicesQuery } from '@/redux/features/services/servicesApi';
import FilterService from '@/components/service/FilterService';

interface QueryType {
  [key: string]: string;
}

function Services() {
  const [query, setQuery] = useState<QueryType>({});

  const { data, isLoading, isError } = useGetServicesQuery(query);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const handleSearchParams = (field: string, value: string) => {
    const payload = { ...query };
    payload[field] = value;
    setQuery(payload);
  };

  return (
    <div className="my-6 flex flex-col gap-6">
      {/* filtering */}
      <FilterService handleSearchParams={handleSearchParams} />
      {/* card section */}
      {data.data.length > 0 ? (
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.data.map((service: ServiceType) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      ) : (
        <div className="text-center text-xl m-8 font-bold text-yellow-400 ">
          No Data found
        </div>
      )}
    </div>
  );
}

export default Services;
