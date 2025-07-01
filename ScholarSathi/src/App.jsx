
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Pages/landingpage';
import RegisterForm from './Pages/RegisterForm';
import ContactUs from './Pages/ContactUs'; 
import PatnerUni from './Pages/PatnerUni'; 
import AboutUs from './Pages/AboutUs'; // <-- Add this line



function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/register" element={<RegisterForm />} />
          <Route path="/contact-us" element={<ContactUs />} /> 
           <Route path="/partner-universities" element={<PatnerUni />} />
           <Route path="/about-us" element={<AboutUs />} />
           
          
        
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;