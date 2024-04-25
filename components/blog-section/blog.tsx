"use client";

import React, { Suspense, useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlogItem from "./blog-item";
import "./blog.scss";

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

const Blog = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className="blog-section flex column items-center">
        <h2 className="title text-display-2">
          From our <span className="gradient-secondary">Blog</span>
        </h2>
        <p className="blog-subtext text-heading-2 text-center">
          Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights,
          Tips, and Innovations in Gaming SDKs!
        </p>
        <div className="blog-container flex column">
          <Slider {...settings}>
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogItem key={index} />
            ))}
          </Slider>
        </div>
      </section>
    </Suspense>
  );
};
export default Blog;
