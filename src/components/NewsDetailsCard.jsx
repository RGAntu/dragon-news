
import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)
    return (
        <div className='w-11/12 mx-auto'>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h2 className='font-medium text-2xl text-left py-5'>{news.title}</h2>

            <p className='text-left'>{news.details}</p>
           <div className='text-left my-5'>
             <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>All News in this category</Link>
           </div>
        </div>
    );
};

export default NewsDetailsCard;