// Define a type for the Post props
type PostProps = {
    title: string;
    date: string;
    categories: string;
    description: string;
  };
  
  const Post = ({ title, date, categories, description }: PostProps) => {
    return (
        <div>
        <h1 className="text-dark text-[22px] md:text-[26px] font-bold">{title}</h1>
        <div>
          <h2 className="font-normal text-dark text-[16px] md:text-[18px] py-4 lg:py-6">
            {date} &nbsp; &nbsp; | &nbsp; &nbsp; {categories}
          </h2>
          <p className="text-dark text-[16px] font-normal">{description}</p>
        </div>
      </div>
    );
  };

  export default Post