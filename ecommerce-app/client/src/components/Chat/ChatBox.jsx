import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../redux/chatSlice";

function ChatBox() {
  const dispatch = useDispatch();
  const { messages } = useSelector(
    (state) => state.chat
  );

  const [text, setText] = useState("");

  const submit = () => {
    if (!text) return;

    dispatch(
      sendMessage({
        sender: "user",
        text,
      })
    );

    setText("");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <div className="h-80 overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="mb-3"
          >
            <b>{msg.sender}</b>: {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          className="flex-1 border p-3 rounded-xl"
        />

        <button
          onClick={submit}
          className="bg-violet-600 text-white px-5 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;