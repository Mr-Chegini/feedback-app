import { PropTypes } from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedBackList({ feedback, handleDelete }) {
  if (!feedback?.length) return <p>No Feedback yet.</p>;

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedBackList.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
export default FeedBackList;
