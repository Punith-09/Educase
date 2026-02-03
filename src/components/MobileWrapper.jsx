import "./MobileWrapper.css";

const MobileWrapper = ({ children }) => {
  return (
    <div className="page">
      <div className="mobile">{children}</div>
    </div>
  );
};

export default MobileWrapper;
