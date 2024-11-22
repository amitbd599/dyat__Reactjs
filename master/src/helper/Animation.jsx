import Aos from "aos";
import { useEffect } from "react";

const Animation = () => {
  useEffect(() => {
    Aos.init({
      offset: 120,
      easing: "ease-in-sine",
      once: true,
      duration: 1000,
    });
    Aos.refresh();
  }, []);
  return <></>;
};

export default Animation;
