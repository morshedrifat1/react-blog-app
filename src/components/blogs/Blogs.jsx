import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = ({handleBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json').then(res=>res.json()).then(data => setBlogs(data))
    },[])
    return (
        <div> 
            <h1 className='text-xl font-bold bg-white p-3 text-center rounded-lg'>Total Blogs : {blogs.length}</h1>
            <div className='grid lg:grid-cols-2 gap-5 mt-5'>
            {
                blogs.map(blog=><Blog handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark} key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;