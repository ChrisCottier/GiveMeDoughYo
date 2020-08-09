import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { getHomePics, CURRENT_INDEX } from "../../actions/home";
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

export const MostBacked = () => {};
// export const Banner = () => {
//   const { homePics, currentIndex } = useSelector((state) => state.home);
//   //   const [currentIndex, setCurrentIndex] = useState(0);
//   const dispatch = useDispatch();

//   //   let currentIndex = 0;
//   useEffect(() => {
//     console.log("start of call", currentIndex);
//     if (!homePics) {
//       dispatch(getHomePics());
//       return;
//     }
//     const interval = setInterval((currentIndex) => {
//       console.log(homePics.length, currentIndex);
//       if (currentIndex < homePics.length - 1) {
//         // currentIndex += 1;
//         dispatch({ type: CURRENT_INDEX, currentIndex: currentIndex + 1 });
//       } else {
//         console.log("hi");
//         // currentIndex = 0;
//         dispatch({ type: CURRENT_INDEX, currentIndex: 0 });
//       }
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [homePics]);

//   console.log(currentIndex);
//   if (!homePics) {
//     return null;
//   }

//   return (
//     <>
//       <div>test</div>
//       <div
//         className="home-banner"
//         style={{ backgroundImage: `url(${homePics[currentIndex]})` }}
//       ></div>
//     </>
//   );
// };
