import ReviewCard from '@/components/review/ReviewCard';
import Loading from '@/components/shared/Loading/Loading';
import { useGetReviewQuery } from '@/redux/features/review/reviewApi';
import { ReviewDataType } from '@/types/common';

function Review() {
  const { data: reviews, isLoading } = useGetReviewQuery({});

  if (isLoading) {
    <Loading />;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      {reviews?.data.map((review: ReviewDataType) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
}

export default Review;
