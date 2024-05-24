import Post from "../components/ui/Post";

type PostProps = {
  title: string;
  date: string;
  categories: string;
  description: string;
};
const postDetails: PostProps[] = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    categories: "Design, Pattern",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    categories: "Design, Pattern",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    categories: "Design, Pattern",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    categories: "Design, Pattern",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  },
];

const Blog = () => {
  return (
    <section className=" py-4 lg:px-[120px] sm:px-[45px]">
      <div className="grid grid-cols-1 gap-y-4 mx-4 md:mx-0">
        {postDetails.map((post, index) => (
          <>
            <Post
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
