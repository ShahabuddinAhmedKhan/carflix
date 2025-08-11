'use client';
import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating';
const Rate = ( {rating}) => (
  <Rating defaultValue={rating}>
    {Array.from({ length: 5 }).map((_, index) => (
      <RatingButton className="text-yellow-500" key={index} />
    ))}
  </Rating>
);
export default Rate;