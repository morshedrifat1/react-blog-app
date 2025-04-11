import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/blogs";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount,setReadingCount] = useState(0);

  const handleBookmark = (blog) => {
    bookmarked.includes(blog) ? bookmarked : setBookmarked([...bookmarked, blog]);
  };

  const handleMarkAsRead = (time,blogId) =>{
    setReadingCount(readingCount + time);
    handleRemoveFromBookmark(blogId)
  }

  const handleRemoveFromBookmark = (blogId) =>{
    const remainingBookmark = bookmarked.filter(bookmark => bookmark.id !== blogId);
    setBookmarked(remainingBookmark)
  }

  return (
    <>
      <div className="nav max-w-[1360px] mx-auto p-5">
        <Navbar></Navbar>
      </div>

      <div className="main-container grid lg:grid-cols-3 max-w-[1360px] mx-auto gap-5 p-5">
        <div className="lg:col-span-2 rounded-lg bg-gray-200 p-5">
          <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <div className="flex justify-center items-start gap-5">
            <button className="bg-gray-300 p-3 rounded-lg">
              Reading Time : {readingCount}
            </button>
            <button className="bg-gray-300 p-3 rounded-lg">
              Bookmarks : {bookmarked.length}
            </button>
          </div>

          <div className="bookmark-list mt-5 grid gap-4">
            {bookmarked.length > 0 ? 
            (bookmarked.map((bookmark) => (
                <div key={bookmark.reading_time} className="bg-gray-200 p-5 rounded-lg">
                  ✅{bookmark.title}🚀
                </div>
              ))) : 
              (<div className="p-10 border-2 border-dashed border-gray-300 rounded">
                <h3 className="text-center text-lg font-semibold text-gray-500">
                  Add Blog Bookmark
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
