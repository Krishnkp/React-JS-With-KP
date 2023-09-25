import './App.css';
import Navbar from './componets/Navbar';
import TextFrom from './componets/TextFrom';

function App() {
  return (
      <>
        <Navbar title="Home" dropdown="Dropdown" />
        <div className='container'>
          <TextFrom textarea="Enter the text Below"/>
        </div>
      </>
  );
}

export default App;
