import "./App.css";
import Abouts from "./componets/Abouts";
import Navbar from "./componets/Navbar";
import TextFrom from "./componets/TextFrom";

function App() {
  return (
    <>
      <Navbar title="Home" dropdown="Dropdown" />
      <div className="container my-3">
        <TextFrom textarea="Enter the text Below" />
      </div>
      <div className="container my-5">
        <Abouts/>
      </div>
    </>
  );
}

export default App;
