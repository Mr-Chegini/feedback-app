import FeedbackItem from "./FeedbackItem";

function FeedBackList({ feedback }) {
  if (!feedback?.length) return <p>No Feedback yet.</p>;

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedBackList;
