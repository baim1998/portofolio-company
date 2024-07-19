import * as React from "react";
import Banner from "./banner";
import WarningPage from "./warning";
import RealesPage from "./reales";
import ContentPage from "./content";
import CarouselPage from "./carousel";

interface IWelcomePageProps {}

const WelcomePage: React.FunctionComponent<IWelcomePageProps> = (props) => {
  return (
    <div>
      <Banner />
      <WarningPage />
      <RealesPage />
      <ContentPage />
      <CarouselPage />
    </div>
  );
};

export default WelcomePage;
