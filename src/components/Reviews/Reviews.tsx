import React, { useEffect, useState } from "react";
import { Review } from "../../types";
import Paginate from "../Paginate";
import Rating from "../Rating";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

type ReviewsProps = {
  id: string;
  reviews: Review[];
};

const Reviews: React.FC<ReviewsProps> = ({ id, reviews }) => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(3);

  const endIndex = currentPage * reviewsPerPage;
  const startIndex = endIndex - reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  const handleModal = () => {
    setOpenForm(!openForm);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='max-w-[365px] mx-auto md:max-w-[685px] lg:max-w-[1110px] md:flex md:justify-between'>
      <div>
        <h1 className='text-3xl uppercase font-bold mb-2'>customer reviews</h1>
        <Rating reviews={reviews} />
        <h2 className='text-lg uppercase font-bold mt-4 '>
          share your thoughts
        </h2>
        <button onClick={handleModal} className='btn-transparent px-3'>
          write a review
        </button>
        {openForm && <ReviewForm handleModal={handleModal} productId={id} />}
      </div>
      <div className='md:w-1/2'>
        <ReviewList reviews={currentReviews} />
        {reviews.length > reviewsPerPage && (
          <Paginate
            totalReviews={reviews.length}
            reviewsPerPage={reviewsPerPage}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default Reviews;
