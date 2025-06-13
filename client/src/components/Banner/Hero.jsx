import BlogList from "../Blogs/BlogList";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="my-10 space-y-4">
      <h1 className="text-4xl md:text-6xl text-center font-bold">
        Your own <span className="text-lime-400">blogging </span> <br />{" "}
        platform.
      </h1>
      <p className="max-w-[45rem] mx-auto text-center text-base text-gray-800">
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it's one word or a thousand, your story
        starts right here.
      </p>
    </div>
  );
};

export default Hero;
