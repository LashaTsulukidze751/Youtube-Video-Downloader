import Body from "./assets/components/Body";
import Header from "./assets/components/Header";
import "./index.css";

function App() {
  return (
    <div className={`w-full min-h-screen font-sans flex items-center flex-col bg-[url('/src/assets/components/cornered-stairs.png')] text-white bg-center bg-no-repeat bg-cover`}>
      <Header/>
      <Body />
    </div>
  );
}

export default App;
