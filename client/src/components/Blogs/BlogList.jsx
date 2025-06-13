"use client";
import { blogCategories } from "@/assets/assets";
import { useState } from "react";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 relative">
        {blogCategories.map((item, indx) => (
          <div key={indx} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-700 ${
                menu === item && `text-white px-3`
              }`}
            >
              {item}
              {menu === item && (
                <div className="absolute left-0 right-0 top-0 h-7 -z-1 bg-lime-400 rounded-full"></div>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
