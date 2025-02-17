import SignUpPage from "./SignupPage.jsx";
import AIPage from "./AIPage.jsx"
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserPage from './UserPage1.jsx'
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<SignUpPage/>} />
        <Route path="/AI" element={<AIPage/>} />
		<Route path="/UserPage" element={<UserPage/>} />
      </Routes>
    </Router>
  );
}

export default App
