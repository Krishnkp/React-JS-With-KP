import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="my-3">
        <Profile
          pic="photos/kano.jpg"
          title="Krishn Pethani"
          place="Ahmedabad,Gujarat"
          content="I have 1.5 years of experience as a Magento backend developer at The
        Look Agency. In this role."
        />
      </div>

      <div className="my-3">
        <Profile
          pic="photos/bhavin.jpg"
          title="Bhavin Pethani"
          place="Ahmedabad,Gujarat"
          content="I have 5 years of experience as a Magento backend developer at The
  Look Agency. In this role."
        />
      </div>
    </>
  );
}

export default App;
