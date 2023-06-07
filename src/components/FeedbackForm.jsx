import { useState } from "react";

import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const handleText = (e) => setText(e.target.value);
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            onChange={handleText}
            type="text"
            className="form-control"
            placeholder="Write a review"
            value={text}
          ></input>
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
