import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/profile");
  }
  return (
    <div className="login">
      <h2>
        Signin to your <br /> PopX account
      </h2>

      <p>
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit.
      </p>

      <div className="field">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>

      <div className="field">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <button onClick={handleSubmit} >Login</button>
    </div>
  );
};

export default Login;
