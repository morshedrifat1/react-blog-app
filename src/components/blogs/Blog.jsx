import React, { useState } from "react";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { IoBookmarkSharp } from "react-icons/io5";



const Blog = ({blog,handleBookmark,handleMarkAsRead}) => {

    const [markIcon,setMarkicon] = useState(false)


  return (

      <div className="card bg-base-100 shadow-sm">
        <div>
          <img className="relative rounded-tl-sm rounded-tr-sm"
            src={blog.cover}
            alt="Shoes"
          />
          <button className="absolute right-0 top-0 bg-gray-100 p-2 rounded-tr-sm rounded-bl-sm">{blog.posted_date}</button>
        </div>
        <div className="card-body">
            <div className="author flex items-center gap-2">
                <img className="w-[30px]" src={blog.author_img} alt="" />
                <h3 className="text-base font-semibold">{blog.author}</h3>
            </div>
          <h2 className="card-title">{blog.title}</h2>
          <div className="hash-tag">
            {
                blog.hashtags.map(hashtag=><button key={hashtag} className="bg-gray-200 p-1 mr-2 rounded">{hashtag}</button>)
            }
          </div>
          <div className="card-actions flex justify-between mt-3">
            <button onClick={()=>{handleMarkAsRead(blog.reading_time,blog.id);setMarkicon(false)}} className="btn btn-primary">Mark As Read</button>
            <button onClick={()=>{handleBookmark(blog);setMarkicon(true)}} className="btn bg-gray-300">
                {markIcon ? <IoBookmarkSharp size={25}/> :<PiBookmarkSimpleLight size={25}/>}
            </button>
          </div>
        </div>
      </div>
  );
};

export default Blog;
