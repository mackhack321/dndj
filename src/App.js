import "./App.css";
import Track from "./components/Track";
import { useState } from "react";
import { useEffect } from "react";
import NewTrack from "./components/NewTrack";

function App() {
  const [tracks, setTracks] = useState([]);
  const [showNewTrack, setShowNewTrack] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("default");

  function updateTracks() {
    let tracks = JSON.parse(localStorage.getItem("tracks"));
    if (tracks !== null) {
      setTracks(tracks);
    } else {
      localStorage.setItem("tracks", "[]");
      setTracks([]);
    }
  }

  function addTrack(title, link, category) {
    if (title === "" || link === "" || category === "") {
      setShowNewTrack(false);
    } else {
      tracks.push({
        title: title,
        link: link,
        category: category,
      });
      localStorage.setItem("tracks", JSON.stringify(tracks));
      updateTracks();
      setShowNewTrack(false);
    }
  }

  function deleteTrack(title, link, category) {
    tracks.forEach((track, index) => {
      if (
        track.title === title &&
        track.link === link &&
        track.category === category
      ) {
        tracks.splice(index, 1);
      }
    });
    localStorage.setItem("tracks", JSON.stringify(tracks));
    updateTracks();
  }

  function getCategories() {
    let categories = [];
    tracks.forEach((track) => {
      if (!categories.includes(track.category)) {
        categories.push(track.category);
      }
    });
    return categories;
  }

  useEffect(() => {
    updateTracks();
  }, []);

  return (
    <div className="bg-slate-800 h-screen">
      <h1 className="text-center text-4xl font-bold pt-3 text-gray-300">
        DNDJ
      </h1>
      <div className="flex space-x-5 justify-center pt-5">
        <button
          className="bg-green-700 p-1 rounded-md"
          onClick={() => setShowNewTrack(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <select
          name="category"
          id="category"
          className="rounded-md p-1 bg-gray-200"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="default">Choose a category</option>
          {getCategories().map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      {showNewTrack && (
        <div className="flex mt-5 justify-center">
          <NewTrack handler={addTrack} />
        </div>
      )}
      <div className="mt-10 grid grid-cols-4 auto-cols-auto justify-items-center">
        {tracks.map((track, index) => {
          return (
            (track.category === selectedCategory ||
              selectedCategory === "default") && (
              <div key={index}>
                <Track
                  title={track.title}
                  link={track.link}
                  category={track.category}
                  handler={deleteTrack}
                />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default App;
