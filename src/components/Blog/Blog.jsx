import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div>
      <img src={cover} alt={"cover picture of the title ${title}"} />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <div>
            <img className="w-12" src={author_img} alt="" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl"> {title}</h2>
      {hashtags.map((hash, index) => {
        return (
          <span key={index}>
            {" "}
            <a href="">#{hash}</a>{" "}
          </span>
        );
      })}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
