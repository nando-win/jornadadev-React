import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={6542}
          messages={351}
          shares={892}
          name="Osmar"
          description="Melhor goleiro pra seleção"
          music="Cruel song"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
        />
        <Video
          likes={234}
          messages={23}
          shares={23}
          name="Jubileudo, o gato"
          description="Jubileudo o que está acontecendo?"
          music="WTF"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
