import { useState } from "react";

export default function NewTrack(props) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="bg-gray-400 w-fit p-5 rounded-md flex flex-col space-y-3">
      <div className="flex space-x-2">
        <p>Title:</p>
        <input
          type="text"
          name="title"
          id="title"
          className="rounded-md bg-gray-300"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        <p>Link:</p>
        <input
          type="text"
          name="link"
          id="link"
          className="rounded-md bg-gray-300"
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        <p>Category:</p>
        <input
          type="text"
          name="category"
          id="category"
          className="rounded-md bg-gray-300"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button
        className="bg-slate-500 hover:bg-slate-300 px-3 py-1 rounded-md w-fit"
        onClick={() => props.handler(title, link, category)}
      >
        Add track
      </button>
    </div>
  );
}
