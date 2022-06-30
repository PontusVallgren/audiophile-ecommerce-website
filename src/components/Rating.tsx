import React from "react";
import { FaStar } from "react-icons/fa";
import { Review } from "../types";
import { avgRating } from "../utils/avgRating";

type RatingProps = {
  reviews: Review[];
};

const Rating: React.FC<RatingProps> = ({ reviews }) => {
  const stars = Array(5).fill(0);
  const rating = avgRating(reviews);
  return (
    <div>
      <span className='flex'>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              title='star icon'
              size={22}
              color={rating > index ? "#FFA500" : "lightgray"}
              style={{ marginRight: 2, cursor: "pointer" }}
            />
          );
        })}
        <p className='font-medium opacity-50 ml-2'>
          Based on {reviews.length} reviews
        </p>
      </span>
    </div>
  );
};

export default Rating;
