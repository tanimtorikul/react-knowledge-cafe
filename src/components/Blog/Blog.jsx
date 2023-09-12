import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    hashtags,
    cover,
    posted_date,
    reading_time,
    author,
    author_img,
  } = blog;
  console.log(blog);
  return (
    <div className="mb-20">
      <img
        className="md:w-full mb-8 rounded-xl"
        src={cover}
        alt={"cover picture of the title ${title}"}
      />
      <div className="flex justify-between">
        <div className="flex gap-6 mb-4">
          <div>
            <img className="w-12" src={author_img} alt="" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="mr-2">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-red-600 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>

        </div>
      </div>
      <h2 className="text-5xl font-bold mb-4"> {title}</h2>
     <p>
     {hashtags.map((hash, index) => {
        return (
          <span key={index}>
            {" "}
            <a href="">#{hash}</a>{" "}
          </span>
      
        );
        
      })}
     </p>
     <button onClick={()=> handleMarkAsRead(reading_time)} className="text-purple-600 font-bold underline mt-2">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.function,
  handleMarkAsRead: PropTypes.function
};

export default Blog;
