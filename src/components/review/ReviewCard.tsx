import { ReviewDataType } from '@/types/common';
import { Card, CardContent } from '../ui/card';
import { FaStar } from 'react-icons/fa';
import { createArray } from '@/utils/helper';

type ReviewCardProps = {
  review: ReviewDataType;
};

function ReviewCard(props: ReviewCardProps) {
  return (
    <Card>
      <CardContent className="p-4 rounded-md bg-slate-100 ">
        <h4 className="text-xl font-semibold ">
          Reviewer name : {props.review.name}
        </h4>
        <div className="flex gap-1">
          <span>Ratings : </span>
          <span className="flex gap-1 ">
            {createArray(props.review.rating).map((el) => (
              <FaStar className="size-5 text-yellow-400" key={el} />
            ))}
          </span>
        </div>
        <p className="text-sm  my-2">Review : {props.review.message}</p>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
