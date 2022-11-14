/* eslint-disable jsx-a11y/alt-text */
import React from "react";
//Owl Carousel Libraries and Module
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Atlassian, Dropbox, Google, Shopify, Slack } from "./Import";
import Logo from "./Logo";
const arry = [
  Google,
  Slack,
  Shopify,
  Dropbox,
  Atlassian,
  Google,
  Slack,
  Shopify,
  Dropbox,
  Atlassian,
];

//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};
export default function BrandSlider() {
  return (
    <div className="container">
      <OwlCarousel className="slider-items owl-carousel" {...options}>
        {arry.map((item) => (
          <Logo imgUrl={item} key={Math.random()} />
        ))}
      </OwlCarousel>
    </div>
  );
}
