import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
// import { format } from "date-fns";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    author,
    image_url,
    total_view,
    rating,
  } = news;

  const formattedDate = new Date( 
    news.author. published_date
  ).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md p-4">
      {/* Author Info */}
      <div className="flex bg-base-200 items-center justify-between p-5 mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">{author?.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <button>
            <FaRegBookmark />
          </button>
          <button>
            <IoShareSocialOutline />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-2">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt="News Thumbnail"
        className="w-full h-56 object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...{" "}
            <Link to={`/news-details/${id}`} className="text-primary font-medium cursor-pointer hover:underline">
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </p>

      {/* Footer: Rating + Views */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} className={i < rating.number ? "text-orange-400" : "text-gray-300"} />
          ))}
          <span className="text-gray-700 font-medium ml-2">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
