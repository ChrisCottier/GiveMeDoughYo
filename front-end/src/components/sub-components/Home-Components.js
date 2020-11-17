import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { appName } from "../../config";
import { getHomePics } from "../../actions/home";
import home from "../../reducers/home";

export const Banner = () => {
  const { homePics } = useSelector((state) => state.home);
  //   const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  //   let currentIndex = 0;
  useEffect(() => {
    if (!homePics) {
      dispatch(getHomePics());
      return;
    }
  }, [homePics]);

  if (!homePics) {
    return null;
  }

  return (
    <>
      <Carousel className="banner-carousel" showArrows={true}>
        {homePics.map((pic) => (
          <div key={pic}>
            <img className="sample-img" src={pic}></img>
          </div>
        ))}
      </Carousel>
    </>
  );
};
