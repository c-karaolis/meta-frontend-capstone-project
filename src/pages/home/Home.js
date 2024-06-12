import Hero from "../../components/Hero/Hero";
import Lore from "../../components/Lore/Lore";
import Specials from "../../components/Specials/Specials";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <Lore />
    </>
  );
};

export default Home;
