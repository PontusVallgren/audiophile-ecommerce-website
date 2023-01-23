import React from "react";
import tbEarphones from "../../public/thumbnail-earphones.png";
import tbHeadphones from "../../public/thumbnail-headphones.png";
import tbSpeakers from "../../public/thumbnail-speakers.png";
import CategoryListItem from "./CategoryListItem";

type CategoryListProps = {
  toggle: () => void;
};

const CategoryList: React.FC<CategoryListProps> = ({ toggle }) => {
  const Categories = [
    {
      category: "headphones",
      path: "/category/headphones",
      thumbnail: tbHeadphones,
    },
    {
      category: "speakers",
      path: "/category/speakers",
      thumbnail: tbSpeakers,
    },
    {
      category: "earphones",
      path: "/category/earphones",
      thumbnail: tbEarphones,
    },
  ];
  return (
    <div className='max-w-5xl mx-auto flex flex-col justify-evenly items-center my-28 md:flex-row'>
      {Categories.map((item, index) => {
        return (
          <CategoryListItem
            key={index}
            category={item.category}
            path={item.path}
            thumbnail={item.thumbnail}
            toggle={toggle}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
