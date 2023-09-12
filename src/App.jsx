import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  };
  

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  }
  return (
    <>
      <div className="mx-auto max-w-7xl	">
        <Header />
        <div className="md:flex gap-4">
          <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} ></Blogs>
          <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
