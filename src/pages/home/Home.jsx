import { City } from "../../components/pages/home-components/city/City";
import { Easy } from "../../components/pages/home-components/easy/Easy";
import { Hero } from "../../components/pages/home-components/hero/Hero";
import { LPE } from "../../components/pages/home-components/lpe/LPE";
import { Zero } from "../../components/pages/home-components/zero/Zero";

export const Home = () => {
  return (
    <div className="max-tablet:text-center">
      <Hero />
      <LPE />
      <Easy />
      <City />
      <Zero />
    </div>
  );
};
