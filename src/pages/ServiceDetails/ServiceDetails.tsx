import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import Loading from '@/components/shared/Loading/Loading';
import { useGetSingleServiceQuery } from '@/redux/features/services/servicesApi';
import { useGetTimeSlotsQuery } from '@/redux/features/slots/slotsApi';
import SelectField from '@/components/shared/SelectField/SelectField';
import { dateHelper, slotOptionHelper } from '@/utils/helper';
import CalenderDateField from '@/components/shared/CalenderDateField/CalenderDateField';
import Modal from '@/components/shared/Modal/Modal';
import BookServiceForm from '@/components/service/BookServiceForm';

function ServiceDetails() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [slotId, setSlotId] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const { data, isLoading, isError } = useGetSingleServiceQuery(id);
  const { data: slotsData } = useGetTimeSlotsQuery({
    serviceId: id,
    date: dateHelper(date),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) return <div>Something went wrong</div>;

  const dateChange = (date: Date) => {
    setDate(date);
    setSlotId('');
  };

  return (
    <>
      <Modal title="Book Service" show={showModal} onClose={setShowModal}>
        <BookServiceForm
          serviceId={id as string}
          slotId={slotId as string}
          showModal={setShowModal}
        />
      </Modal>
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
              {[1, 2, 3, 4].map((i) => (
                <FaStar key={i} className="text-yellow-500 size-4" />
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
              <CalenderDateField
                label="Booking Date"
                className={'w-56'}
                date={date}
                setDate={dateChange}
              />
            </div>
            <div>
              <SelectField
                label="Time Slots"
                placeholder="Select One"
                className="w-56"
                items={slotOptionHelper(slotsData?.data)}
                handleValueChange={(val) => setSlotId(val)}
              />
            </div>

            <div className=" flex items-center gap-3">
              <button
                disabled={!slotId}
                onClick={() => setShowModal(true)}
                type="button"
                className={`duration-300 px-3 py-2 text-white rounded-md text-sm ${slotId ? 'cursor-pointer bg-slate-700 hover:bg-sky-600 ' : 'cursor-not-allowed bg-gray-500'}`}
              >
                Booking Now
              </button>
              <button className="hover:bg-sky-600 duration-300 bg-slate-700 p-2.5 pb-2 text-white rounded-full">
                <FaRegHeart />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ServiceDetails;
