import ImgHtml from "../assets/html.png";
import ImgCss from "../assets/css.jpg";
import ImgJs from "../assets/js.png";
import ImgReact from "../assets/react.png";
import "./Frontend.css";
const Frontend = () => {
  return (
    <div className="main-div">
      <div className="main">
        <div className="image">
          <img src={ImgHtml} alt="html" />
        </div>
        <div className="image">
          <img src={ImgCss} alt="html" />
        </div>
        <div className="image">
          <img src={ImgJs} alt="html" />
        </div>
        <div className="image">
          <img src={ImgReact} alt="html" />
        </div>
      </div>
    </div>
  );
};
export default Frontend;
