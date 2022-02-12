import "./styles.css";
import images from "./image/lizards.jpg";

function Lizard() {
    return (
      <div className="container">
        <br />
        <div className="items">
          <img src={images} width="400px" height="200px" />
          <div className="mydiv">
            <h1>Lizard</h1>
            <p>
              Lizards are widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antartica
            </p>
            <a href="">Share</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">Learn More</a>
            <br />
          </div>
        </div>
      </div>
    );
  }
  export default Lizard;