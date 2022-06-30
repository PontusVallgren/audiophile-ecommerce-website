import React from "react";

type PaginateProps = {
  totalReviews: number;
  reviewsPerPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};

const Paginate: React.FC<PaginateProps> = ({
  totalReviews,
  reviewsPerPage,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='flex justify-between'>
      {currentPage > 1 ? (
        <button
          onClick={() => paginate(currentPage - 1)}
          className='hover:text-primary-hover'
        >
          Previous
        </button>
      ) : (
        <button className='text-gray cursor-default'>Previous</button>
      )}

      <ul className='flex'>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              className={`cursor-pointer mx-1 hover:text-primary-hover ${
                currentPage == number ? "text-primary" : "text-black"
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => paginate(currentPage + 1)}
        className='hover:text-primary-hover'
      >
        Next
      </button>
    </div>
  );
};

export default Paginate;
