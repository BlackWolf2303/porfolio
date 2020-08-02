import React from "react";
import Slider from "react-slick";

import Layout from "./layout/layout";
import PhotoSlide from "../components/PhotoSlide";

import {dataPhotoSlide} from "../data/DataTimeLine";

const settings = {
  dots: true,
  arrows:true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Photos = () => (
  <Layout id="photos">
    <section className="container inner">
      <h1 className="page-title">Photos</h1>
      <p className="subtitle">"The moments of IT life,<br/> to make myself better 1% each day."</p>
      <div className="row">
        <div className="col">
          <Slider {...settings}>
          {
            dataPhotoSlide.length>0 && dataPhotoSlide.map((item,idx) => {
              return <PhotoSlide caption={item.caption} img={item.img} detail={item.detail} key={idx}/>
            })
          }
        </Slider>
        </div>
      </div>
    </section>
  </Layout>
);

export default Photos;
