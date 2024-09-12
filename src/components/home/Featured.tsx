import { useEffect } from 'react';
import { useGetServicesQuery } from '@/redux/features/services/servicesApi';
import Loading from '../shared/Loading/Loading';
import { ServiceType } from '@/types/service';
import ServiceCard from '../service/ServiceCard';

function Featured() {
  const { data, isLoading, isError, refetch } = useGetServicesQuery({});
  useEffect(() => {
    refetch();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return null;
  }

  return (
    <div className="flex flex-col px-4 md:px-8 gap-4">
      <h2 className="text-center font-bold text-3xl text-gray-800">
        Our Popular Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {data?.data.length &&
          data?.data
            .slice(0, 6)
            .map((product: ServiceType) => (
              <ServiceCard key={product._id} service={product}></ServiceCard>
            ))}
      </div>
    </div>
  );
}

export default Featured;
