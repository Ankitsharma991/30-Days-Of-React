import "./Design.css";
const Design = () => {
  return (
    <div className="mainDesign">
      <h2 className="subscribe">Subscribe</h2>
      <p className="paragraph">
        Sign up with your email address to receive news and updates
      </p>
      <div className="inputBoxes">
        <div className="inputBox">
          <input type="text" placeholder="First name" />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Last name" />
        </div>
        <div className="inputBox">
          <input type="email" placeholder="Email" />
        </div>
      </div>
      <button className="btn">Subscribe</button>
    </div>
  );
};
export default Design;
