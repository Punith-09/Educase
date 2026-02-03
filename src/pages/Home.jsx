import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.</p>

        <button className="primary" onClick={() => navigate("/signup")}>
          Create Account
        </button>

        <button className="secondary" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
