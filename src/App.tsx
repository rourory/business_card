import SceneViewer from "./components/organisms/SceneViewer";
import { useShuffle } from "./hooks/useShuffle";

function App() {
  const {connectors, click}= useShuffle()
  
  return (
    <div className="h-[100vh] w-[100vw]" onClick={click}>
      <div className="relative ">
        <header className="absolute z-50 w-full top-0 left-0 h-[20vh] backdrop-blur">
          Here will be header 
        </header>
        <main className="absolute top-0 left-0 w-[100vw] h-[100vh]">
          <SceneViewer connectors={connectors} />
        </main>
        <footer>
          <div className="absolute w-full h-[15vh] top-[85vh] left-0 z-50 backdrop-blur    ">
            Here will be footer
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

