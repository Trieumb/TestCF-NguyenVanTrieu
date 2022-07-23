import './App.css';
import Index from './Components/Index';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {
  return (
    <div className="App">
      <Index toast={toast} />
      <ToastContainer />
    </div>
  );
}

export default App;
