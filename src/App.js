import './App.css';
import About from './Components/About';
import { Navbar } from './Components/Navbar';
import {Textfile} from './Components/Textfile';
function App() {
  return (
  <>
 <Navbar title="TextUtils" about="About us"/> 
{/* <Textfile heading="Enter the text below"/> */}
<About/>
  </>
  );
}

export default App;
