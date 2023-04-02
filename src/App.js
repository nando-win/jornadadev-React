import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videoList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.nammme}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
        {/* <Video
          likes={234}
          messages={23}
          shares={23}
          name="Jubileudo, o gato"
          description="Jubileudo o que está acontecendo?"
          music="WTF"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        /> */}
      </div>
    </div>
  );
}

export default App;
