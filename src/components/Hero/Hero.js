import "./Hero.css";
import Button from "../Button/Button";
import Image from "../../images/restaurant chef B.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">New York</h2>
          <p>
            Located in the vibrant core of New York, Little Lemon blends
            contemporary style with comforting tradition. Our varied,
            handcrafted menu, which includes delicious bruschettas, juicy
            burgers, and crisp Greek salads, reflects our conviction that
            cuisine is a form of art.
          </p>
          <Button
            label={"Reserve a table"}
            onClick={() => {
              navigate("/reservations");
            }}
          />
        </div>

        <img
          className="image"
          src={Image}
          alt="Restarurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;
