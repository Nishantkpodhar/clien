import { FaStar, FaRegStar } from "react-icons/fa";

function Rating({ value = 0 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) =>
        star <= Math.round(value) ? (
          <FaStar key={star} className="text-yellow-400" />
        ) : (
          <FaRegStar key={star} className="text-gray-300" />
        )
      )}
      <span className="ml-2 text-sm text-gray-500">
        ({value})
      </span>
    </div>
  );
}

export default Rating;