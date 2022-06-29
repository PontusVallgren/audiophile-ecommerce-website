import React, { useEffect, useState } from "react";
import { Review } from "../../types";
import Rating from "../Rating";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

type ReviewsProps = {
  id: string;
};

const Reviews: React.FC<ReviewsProps> = ({ id }) => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [reviewsData, setReviewsData] = useState({
    _id: "",
    reviews: [],
  });
  const handleModal = () => {
    setOpenForm(!openForm);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(`/api/products/${id}/reviews`);
      const data = await res.json();
      setReviewsData(data);
    };

    fetchReviews();
  }, [id]);

  return (
    <div className='max-w-[365px] mx-auto md:max-w-[685px] lg:max-w-[1110px] md:flex md:justify-between'>
      <div>
        <h1 className='text-3xl uppercase font-bold mb-2'>customer reviews</h1>
        <Rating reviews={reviewsData.reviews} />
        <h2 className='text-lg uppercase font-bold mt-4 '>
          share your thoughts
        </h2>
        <button onClick={handleModal} className='btn-transparent px-3'>
          write a review
        </button>
        {openForm && <ReviewForm handleModal={handleModal} productId={id} />}
      </div>
      <div className='md:w-1/2'>
        <ReviewList reviews={reviewsData.reviews} />
      </div>
    </div>
  );
};

export default Reviews;
