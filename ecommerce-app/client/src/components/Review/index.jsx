import Rating from "../Rating/Rating";

function Review({ review }) {
  return (
    <div className="border-b py-4">
      <h4 className="font-semibold">{review.name}</h4>
      <Rating value={review.rating} />
      <p className="text-gray-600 mt-2">{review.comment}</p>
    </div>
  );
}

export default Review;