import Post from "../components/ui/PostCard";
import config from "../config/posts.json";

const Blog = () => {
  const { post } = config;

  return (
    <section className=" py-4 lg:px-[120px] sm:px-[45px]">
      <div className="grid grid-cols-1 gap-y-4 mx-4 md:mx-0">
        {post.map((post, index) => (
          <>
            <Post
              link={post.link}
              key={index}
              title={post.title}
              date={post.date}
              categories={post.categories}
              description={post.description}
            />
            <div className="bg-[#E0E0E0] mt-4 h-[1px]"></div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Blog;
