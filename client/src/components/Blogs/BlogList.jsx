"use client";
import { blog_data, blogCategories } from "@/assets/assets";
import { motion } from "motion/react";
import { useState } from "react";
import BlogItem from "./BlogItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <Carousel className={" w-full max-w-6xl mx-auto"}>
        <CarouselContent className="text-xl text-center px-8 py-4">
          {blogCategories.map((item, indx) => (
            <CarouselItem
              key={indx}
              className="relative md:basis-1/3 lg:basis-1/5"
            >
              <button
                onClick={() => setMenu(item)}
                className={`cursor-pointer text-gray-700 ${
                  menu === item && `text-white px-3`
                }`}
              >
                {item}
                {menu === item && (
                  <motion.div
                    layoutId="underline"
                    transition={{
                      type: "spring",
                      bounce: 0.5,
                      stiffness: 500,
                      damping: 30,
                    }}
                    className="absolute left-0 right-0 top-0 h-7 -z-1 bg-lime-400 rounded-full"
                  ></motion.div>
                )}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <div className="flex justify-center gap-4 sm:gap-8 relative">
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
                <motion.div
                  layoutId="underline"
                  transition={{
                    type: "spring",
                    bounce: 0.5,
                    stiffness: 500,
                    damping: 30,
                  }}
                  className="absolute left-0 right-0 top-0 h-7 -z-1 bg-lime-400 rounded-full"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div> */}
      {/* -- blog card -- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
        {blog_data
          .filter((item) => (menu === "All" ? true : menu === item.category))
          .map((item, index) => (
            <BlogItem item={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
