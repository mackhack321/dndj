// props: title, link, category
export default function Track(props) {
  function copyCommand() {
    navigator.clipboard.writeText(`/play ${props.link}`);
  }

  return (
    <div className="relative bg-gray-400 w-fit p-5 rounded-md">
      <p>Title: {props.title}</p>
      <p>Category: {props.category}</p>
      <button
        className="absolute right-5 top-5"
        onClick={() => props.handler(props.title, props.link, props.category)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-red-900 hover:stroke-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
      <div className="flex space-x-2">
        <button
          className="bg-slate-500 hover:bg-slate-300 p-1 rounded-md"
          onClick={() => copyCommand()}
        >
          Copy command
        </button>
        <a href={props.link} target="_blank" rel="noreferrer">
          <button className="bg-slate-500 hover:bg-slate-300 px-3 py-1 rounded-md">
            Go to link
          </button>
        </a>
      </div>
    </div>
  );
}
