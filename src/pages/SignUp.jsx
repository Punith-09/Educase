import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    if (form.name && form.email && form.password) {
      navigate("/profile");
    }
  };

  return (
    <div className="signup">
      <h2>Create your<br />PopX account</h2>

      <div className="field">
        <input type="text" name="name" required onChange={handleChange} />
        <label>Full Name</label>
      </div>

      <div className="field">
        <input type="tel" name="phone" required onChange={handleChange} />
        <label>Phone number</label>
      </div>

      <div className="field">
        <input type="email" name="email" required onChange={handleChange} />
        <label>Email address</label>
      </div>

      <div className="field">
        <input type="password" name="password" required onChange={handleChange} />
        <label>Password</label>
      </div>

      <div className="field">
        <input type="text" name="company" onChange={handleChange} />
        <label>Company name</label>
      </div>

      <div className="radio">
        <p>
          Are you an Agency? <span style={{ color: "red" }}>*</span>
        </p>
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            onChange={handleChange}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            onChange={handleChange}
          />{" "}
          No
        </label>
      </div>

      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
};

export default SignUp;
