import React from "react";
import tbEarphones from "../../public/thumbnail-earphones.png";
import tbHeadphones from "../../public/thumbnail-headphones.png";
import tbSpeakers from "../../public/thumbnail-speakers.png";
import CategoryListItem from "./CategoryListItem";

const CategoryList: React.FC = () => {
  const Categories = [
    {
      category: "headphones",
      path: "/headphones",
      thumbnail: tbHeadphones,
    },
    {
      category: "speakers",
      path: "/speakers",
      thumbnail: tbSpeakers,
    },
    {
      category: "earphones",
      path: "/earphones",
      thumbnail: tbEarphones,
    },
  ];
  return (
    <div className='max-w-5xl mx-auto flex flex-col justify-evenly items-center md:flex-row'>
      {Categories.map((item, index) => {
        return (
          <CategoryListItem
            key={index}
            category={item.category}
            path={item.path}
            thumbnail={item.thumbnail}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
