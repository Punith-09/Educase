import { useEffect, useRef, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const fileRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleImageClick = () => {
    fileRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedUser = { ...user, avatar: reader.result };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    };
    reader.readAsDataURL(file);
  };

  if (!user) return null;

  return (
    <div className="profile">
      <h3>Account Settings</h3>

      <div className="profile-card">
        <div className="avatar-wrapper" onClick={handleImageClick}>
          <img
            src={user.avatar || "https://i.pravatar.cc/100"}
            alt="avatar"
            className="avatar"
          />
          <div className="camera-icon">
            <i className="bi bi-camera-fill"></i>
          </div>
        </div>

        <div className="info">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        hidden
        onChange={handleImageUpload}
      />

      <p className="desc">
        Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Profile;
