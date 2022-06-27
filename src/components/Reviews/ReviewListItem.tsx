import React, { useState } from "react";
import { Review } from "../../types";
import { FaStar } from "react-icons/fa";

type ReviewListProps = {
  review: Review;
};

const ReviewListItem: React.FC<ReviewListProps> = ({ review }) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  const stars = Array(5).fill(0);
  return (
    <div className='my-6 border-b-2 border-b-lightGray md:my-0 md:mb-6'>
      <h1 className='font-bold uppercase tracking-wide'>{review.name}</h1>
      <span className='flex mt-2'>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              title='star icon'
              size={22}
              color={review.rating > index ? "#FFA500" : "lightgray"}
              style={{ marginRight: 2, cursor: "pointer" }}
            />
          );
        })}
      </span>
      <p className='text-sm py-2 opacity-50 leading-6'>
        {readMore
          ? review.comment
          : review.comment.split(" ").slice(0, 30).join(" ")}
        <button
          onClick={() => setReadMore(!readMore)}
          className='text-blue opacity-75 hover:opacity-100'
        >
          {readMore ? "...show less" : "...read more"}
        </button>
      </p>
    </div>
  );
};

export default ReviewListItem;
