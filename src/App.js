
import './App.css';

import { Outlet,Link } from 'react-router-dom';
function App() {
  return (
    <div >
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Contactus">Contact us</Link></li>
        <li><Link to="/Listemployee">List of employee</Link></li>
      </ul>
      <Outlet/>
    </div>
  );
}

export default App;
