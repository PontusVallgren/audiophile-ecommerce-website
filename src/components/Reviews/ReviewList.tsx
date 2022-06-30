import React from "react";
import { Review } from "../../types";
import ReviewListItem from "./ReviewListItem";

type ReviewListProps = {
  reviews: Review[];
};

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => {
        return <ReviewListItem key={index} review={review} />;
      })}
    </div>
  );
};

export default ReviewList;
