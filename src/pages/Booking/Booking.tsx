import BookingCard, { BookingType } from '@/components/booking/BookingCard';
import BookingForm from '@/components/booking/BookingForm';
import Loading from '@/components/shared/Loading/Loading';
import Modal from '@/components/shared/Modal/Modal';
import { useGetMyBookingQuery } from '@/redux/features/booking/bookingApi';
import { ReviewDataType } from '@/types/common';
import { useState } from 'react';

function Booking() {
  const [booking, setBooking] = useState<BookingType | undefined>();
  const [show, setShow] = useState(false);
  const { data: bookings, isLoading } = useGetMyBookingQuery({});

  if (isLoading) {
    <Loading />;
  }

  const handleConfirmBooking = async (val: BookingType) => {
    setBooking(val);
    setShow(true);
  };

  return (
    <>
      {booking && (
        <Modal title="Amar_Pay" show={show} onClose={setShow}>
          <BookingForm booking={booking} showModal={setShow} />
        </Modal>
      )}
      <div className="flex flex-col gap-4 p-4">
        {bookings?.data.length !== 0 ? (
          bookings?.data.map((booking: ReviewDataType) => (
            <BookingCard
              key={booking._id}
              booking={booking}
              confirmBooking={handleConfirmBooking}
            />
          ))
        ) : (
          <div className="text-xl text-center font-bold  py-12">
            You don't have book any service yet
          </div>
        )}
      </div>
    </>
  );
}

export default Booking;
