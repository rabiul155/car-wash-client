import AddCustomerReview from '@/components/home/AddCustomerReview';
import Banner from '@/components/home/Banner';
import BookNow from '@/components/home/BookNow';
import CustomerReview from '@/components/home/CustomerReview';
import Featured from '@/components/home/Featured';

function Home() {
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <Banner />
        <BookNow />
      </div>
      <Featured />
      <CustomerReview />
      <AddCustomerReview />
    </div>
  );
}

export default Home;
