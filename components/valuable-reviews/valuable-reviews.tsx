"use client";

import React, { Suspense, useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ValuableReviewsItem from "./valuable-reviews-item";
import "./valuable-reviews.scss";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ValueableReviews = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className="valueable-reviews flex column items-center">
        <h2 className="title text-display-2">
          Valueable <span className="gradient-tertiary">Reviews</span>
        </h2>
        <div className="reviews-cards-container flex column">
          <Slider {...settings}>
            {Array.from({ length: 6 }).map((_, index) => (
              <ValuableReviewsItem key={index} />
            ))}
          </Slider>
        </div>
      </section>
    </Suspense>
  );
};
export default ValueableReviews;
