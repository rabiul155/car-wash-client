import MyBookingCard from '@/components/myBooking/MyBookingCard';
import MyBookingTable from '@/components/myBooking/MyBookingTable';
import Loading from '@/components/shared/Loading/Loading';
import { useGetMyBookingQuery } from '@/redux/features/booking/bookingApi';

function MyBooking() {
  const { data: bookings, isLoading, isError } = useGetMyBookingQuery({});

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const bookingCardData = bookings?.data.filter(
    (booking: any) =>
      booking.isConfirmed === true &&
      new Date(booking.slot.date) >= new Date(Date.now() - 24 * 60 * 60 * 1000),
  );

  const bookingTableData = bookings?.data.filter(
    (booking: any) =>
      booking.isConfirmed === true &&
      new Date(booking.slot.date) < new Date(Date.now()),
  );

  return (
    <div>
      <MyBookingCard data={bookingCardData} />
      <MyBookingTable data={bookingTableData} />
    </div>
  );
}

export default MyBooking;
