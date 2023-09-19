//compoents
import Car from "../components/Car";
import Buttons from "../components/Buttons";

const Home = () => {

  return (
    <>
      <Buttons />
      <div className="home">
        <div className="car_page">
          <Car/>
        </div>
      </div>
    </>
  );
};

export default Home;
