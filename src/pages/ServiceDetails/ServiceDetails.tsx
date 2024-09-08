import { useParams } from 'react-router-dom';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import Loading from '@/components/shared/Loading/Loading';
import { useGetSingleServiceQuery } from '@/redux/features/services/servicesApi';
import { useGetTimeSlotsQuery } from '@/redux/features/slots/slotsApi';
import SelectField from '@/components/shared/SelectField/SelectField';
import { slotOptionHelper } from '@/utils/helper';

function ServiceDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleServiceQuery(id);
  const {
    data: slots,
    isLoading: slotLoading,
    isError: slotError,
  } = useGetTimeSlotsQuery({ serviceId: id });

  if (isLoading || slotLoading) {
    return <Loading />;
  }

  if (isError || slotError) return <div>Something went wrong</div>;

  const handleSlotChange = (slot: string) => {
    console.log(slot);
  };

  return (
    <div className="text-gray-700 grid grid-cols-1 lg:grid-cols-8 gap-6 m-6">
      <div className=" hidden lg:block">
        <div className=" mb-3 p-3 border ">
          <img src={data.data.image} alt="none" />
        </div>
        <div className=" mb-3 p-3 border ">
          <img src={data.data.image} alt="none" />
        </div>
        <div className=" mb-3 p-3 border ">
          <img src={data.data.image} alt="none" />
        </div>
      </div>
      <div className=" lg:col-span-3">
        <div className=" mb-3 p-4 border">
          <img src={data.data.image} alt="none" />
        </div>
      </div>
      <div className=" lg:col-span-4">
        <div className="flex flex-col gap-2">
          <h3 className=" font-bold text-3xl">{data.data.name}</h3>
          <h3 className=" font-semibold text-lg">
            <span> Duration : {data.data.duration} </span>
            <small>min</small>
          </h3>
          <div className="mt-2 mb-4 flex items-center gap-[2px] ">
            {[1, 2, 3, 4].map((i, index) => (
              <FaStar key={index} className="text-yellow-500 size-4" />
            ))}
            <small className=" text-gray-500 mt-[2px] mx-2">
              Ratings : 4324
            </small>
          </div>
        </div>
        <hr />
        <small className="my-4 inline-block">{data.data.description}</small>
        <hr />

        <h6 className="my-4 font-semibold text-lg">
          Price : <span>{data.data.price}</span> <small>BDT</small>
        </h6>

        <form className="flex flex-col gap-4">
          <div>
            <SelectField
              label="Time Slots"
              placeholder="Select One"
              items={slotOptionHelper(slots.data)}
              handleValueChange={handleSlotChange}
            />
          </div>
          <div className=" flex justify-start items-center gap-3">
            <button
              type="button"
              className="hover:bg-sky-600 duration-300 px-3 py-2 bg-slate-700 text-white rounded-md text-xs"
            >
              Booking Now
            </button>
            <button className="hover:bg-sky-600 duration-300 bg-slate-700 p-2.5 pb-2  text-white rounded-full">
              <FaRegHeart />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ServiceDetails;
