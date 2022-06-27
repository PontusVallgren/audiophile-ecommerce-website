import React, { SyntheticEvent, useState } from "react";
import { FaStar } from "react-icons/fa";

type ReviewFormProps = {
  handleModal: () => void;
};

const ReviewForm: React.FC<ReviewFormProps> = ({ handleModal }) => {
  const [input, setInput] = useState({
    username: "",
    comment: "",
  });
  const [rating, setRating] = useState<number>(0);
  const stars = Array(5).fill(0);
  const handleChange = (e: SyntheticEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setInput({ ...input, [name]: value });
  };
  return (
    <div className='bg-black bg-opacity-50 fixed z-10 inset-0'>
      <div className='max-w-[365px] mx-auto p-8 rounded-md bg-white shadow-2xl absolute top-[15vh] left-[5vw] right-[5vw]'>
        <form className='mt-4'>
          <label
            className='block text-base font-bold tracking-wide mb-1'
            htmlFor='username'
          >
            Username
          </label>
          <input
            className='w-full border p-2 border-lightGray rounded-md mb-4'
            value={input.username}
            onChange={handleChange}
            type='text'
            name='username'
            placeholder='Enter username'
          />
          <span className='text-base font-bold tracking-wide mb-1'>Rating</span>
          <div className='flex mb-4'>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  title='star icon'
                  size={22}
                  onClick={() => setRating(index + 1)}
                  color={rating > index ? "#FFA500" : "lightgray"}
                  style={{ marginRight: 2, cursor: "pointer" }}
                />
              );
            })}
          </div>
          <label
            className='block text-base font-bold tracking-wide mb-1'
            htmlFor='comment'
          >
            Comment
          </label>
          <textarea
            className='w-full p-2 border border-lightGray rounded-md'
            value={input.comment}
            onChange={handleChange}
            name='comment'
            placeholder='Write a review'
            rows={5}
          />
        </form>
        <div className='flex justify-between'>
          <button onClick={handleModal} className='btn-secondary'>
            Cancel
          </button>
          <button onClick={() => console.log(rating)} className='btn-primary'>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
