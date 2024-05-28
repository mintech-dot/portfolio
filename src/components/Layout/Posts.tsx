import Post from "../ui/PostCard";
import config from "../../config/posts.json";
import  { NavLink } from "react-router-dom";

const Posts = () => {
  const { post } = config;

  return (
    <section className="bg-[#EDF7FA] py-4 lg:px-[120px] sm:px-[45px]">
      <div className="md:flex md:justify-between">
        <h1 className="text-center md:text-left text-dark text-[18px] md:text-[22px]">
          Recent Posts
        </h1>
        <h1 className="text-center md:text-right text-[16px] sm:hidden hidden md:block text-secondary pt-1">
         <NavLink to="/blog">view all</NavLink> 
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px]">
        {post.map((post, index) => (
          <div className="my-4 mx-[11px] md:mx-0 p-4 lg:p-6 bg-[#ffffff] rounded-[4px] shadow">
            <Post
              link={post.link}
              key={index}
              title={post.title}
              date={post.date}
              categories={post.categories}
              description={post.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
