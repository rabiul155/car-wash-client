import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useGetReviewQuery } from '@/redux/features/review/reviewApi';
import { FaStar } from 'react-icons/fa6';
import Loading from '../shared/Loading/Loading';
import { ReviewDataType } from '@/types/common';
import { createArray } from '@/utils/helper';

function CustomerReview() {
  const { data: reviewData, isLoading } = useGetReviewQuery({ limit: 3 });

  if (isLoading) {
    <Loading />;
  }

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full px-16"
    >
      <CarouselContent className="flex">
        {reviewData?.data?.map((review: ReviewDataType) => (
          <CarouselItem
            key={review._id}
            className="md:basis-1/2 lg:basis-1/3 lg:p-8"
          >
            <Card>
              <CardContent className="flex min-h-52 pb-0 items-center justify-center rounded-md bg-slate-100 ">
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-center">
                    {review.name}
                  </h4>
                  <div className="flex justify-center gap-1 p-4">
                    {createArray(review.rating).map((el) => (
                      <FaStar className="size-5 text-yellow-400" key={el} />
                    ))}
                  </div>
                  <p className="text-sm text-center my-2">{review.message}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
        &#9664;
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
        &#9654;
      </CarouselNext>
    </Carousel>
  );
}

export default CustomerReview;
