import Post from "./Post";
// Define a type for the Post props
type PostProps = {
    title: string;
    date: string;
    categories: string;
    description: string;
  };
  

  
  const Posts = () => {
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
    ];
  
    return (
      <section className="bg-[#EDF7FA] py-4 lg:px-[120px] sm:px-[45px]">
        <div className="md:flex md:justify-between">
          <h1 className="text-center md:text-left text-dark text-[18px] md:text-[22px]">
            Recent Posts
          </h1>
          <h1 className="text-center md:text-right text-[16px] sm:hidden hidden md:block text-secondary pt-1">
            view all
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px]">
          {postDetails.map((post, index) => (
                    <div className="my-4 mx-[11px] md:mx-0 p-4 lg:p-6 bg-[#ffffff] rounded-[4px] shadow">

            <Post
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
  