import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const Slider = () => {
  const { banner } = useSelector((state) => {
    console.log(state);
    return state.app;
  });
  useEffect(() => {
    const slideEls = document.querySelectorAll(".slider-item");
    let intervalId;
    if (slideEls.length > 0) {
      let min = 0;
      let mid = 1;
      let max = 2;
      let lastMax;
      let lastMin;
      let lastMid;
      intervalId = setInterval(() => {
        slideEls[lastMax]?.classList.remove(
          "order-last",
          "animate-slide-right",
          "z-10"
        );
        slideEls[lastMid]?.classList.remove(
          "order-2",
          "animate-slide-left2",
          "z-20"
        );
        slideEls[lastMin]?.classList.remove(
          "order-first",
          "animate-slide-left",
          "z-20"
        );
        for (let i = 0; i < slideEls.length; i++) {
          if (i <= max && i >= min) {
            slideEls[i].style.cssText = "display: block";
            slideEls[max].classList.add(
              "order-last",
              "animate-slide-right",
              "z-10"
            );
            slideEls[mid].classList.add(
              "order-2",
              "animate-slide-left2",
              "z-20"
            );
            slideEls[min].classList.add(
              "order-first",
              "animate-slide-left",
              "z-20"
            );
          } else {
            slideEls[i].style.cssText = "display: none";
          }
        }
        lastMax = max;
        lastMin = min;
        lastMid = mid;
        max++;
        if (max === slideEls.length) {
          max = 2;
        }
        min++;
        if (min === slideEls.length - 2) {
          min = 0;
        }
        mid++;
        if (max === 2 && min === 0) {
          mid = 1;
        }
        console.log({ min, mid, max });
      }, 3000);
    }
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [banner]);
  return (
    <div className="px-[50px] pt-[30px]">
      <div className="flex overflow-hidden justify-between w-full gap-[20px] h-full">
        {banner?.map((item, index) => (
          <img
            src={item.banner}
            style={{
              transition: "all 0.3s",
              display: "none",
            }}
            className={`slider-item flex-1 object-contain w-[calc(100%/3-20px)] rounded-[8px] ${
              index <= 2 ? "block" : "hidden"
            }`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
