import './Mobile.css'

import yardsale_logo from './images/yardsale_logo.png'

import top_image from './images/top_image.png'
import bottom_image from './images/bottom_image.png'

import battenwear_logo from './images/brands/battenwear.png'
import girlfriend_logo from './images/brands/girlfriend-collective.png'
import johnston_logo from './images/brands/johnston-of-elgin.png'
import organic_logo from './images/brands/organic-basics.png'
import pangia_logo from './images/brands/pangia.png'
import richer_poorer_logo from './images/brands/richer-poorer.png'
import satta_logo from './images/brands/satta.png'
import stellamccartney_logo from './images/brands/stellamccartney.svg'
import story_logo from './images/brands/story.png'
import veja_logo from './images/brands/veja.png'

import { useState } from 'react';

import EmailForm from './EmailForm';
import Carousel from "react-simply-carousel";

function Mobile() {

  const [activeSlideIndex, setActiveSlideIndex ] = useState(0);

  const brand_logos = [
    battenwear_logo,
    girlfriend_logo,
    johnston_logo,
    organic_logo,
    pangia_logo,
    richer_poorer_logo,
    satta_logo,
    stellamccartney_logo,
    story_logo,
    veja_logo
  ];

  const brand_links = [
    "https://battenwear.com/",
    "https://girlfriend.com/",
    "https://www.johnstonsofelgin.com/",
    "https://organicbasics.com/",
    "https://thepangaia.com/",
    "https://richer-poorer.com/",
    "https://www.sattalivity.com/",
    "https://www.stellamccartney.com/",
    "https://www.storymfg.com/",
    "https://www.veja-store.com/en_us/"
  ]

  return (
    <>

      <div className="mobile-yardsale-icon">
        <img className='mobile-yardsale-icon' src={yardsale_logo}/>
      </div>

      <div className='mobile-form-div'>
        <h1 className='mobile-form-div'>
          Sustainable fashion, handpicked, and curated for you.
        </h1>

        <p className='mobile-form-div'>
          The future of fashion is concious, ethical, and here. Yard Sale provides a boutique, curated selection of designer goods, carefully sourced for you and our planet.
        </p>

        <EmailForm mobile={true}/>
      </div>

      <div className='mobile-image-rop-right'>
        <img className='mobile-image-rop-right' src={top_image}/>
      </div>

      <div className='mobile-a-few-brands-message'>
        <p className='mobile-a-few-brands-message'>
          A few brands we think you’d love to meet...
        </p>

        {brand_logos.map((image, i) => (
            <div className="mobile-carousel-div">
              <a target="_blank" href={brand_links[i]}>
                <img className="mobile-carousel-img" src={image}/>
              </a>
            </div>
        ))}
      </div>

      <div className='mobile-image-bottom-left'>
        <img className='mobile-image-bottom-left' src={bottom_image}/>
      </div>

      <div className="mobile-bottom-text">
        <div className='mobile-how-works-message'>
          <p className='mobile-how-works-message'>
            How Yard Sale works
          </p>
        </div>

        <div className='mobile-how-works-text'>
          <p className='mobile-how-works-text'>
          Our mission is not to change how people shop for clothing, but rather give them the ability to do so sustainably.
          </p>

          <p className='mobile-how-works-text'>
          We are partnering with a wide range of sustainable, boutique fashion brands to accomplish this goal. Each one is carefully selected based on their actions towards reducing the environmental footprint of the fashion industry, as well as the quality of their clothing.
          </p>

          <p className='mobile-how-works-text'>
          This way, when you shop with us, you won’t have to worry about anything except finding those one-of-a-kind pieces.
          </p>
        </div>
      </div>

      {/*<div className="mobile-center-top-section">
        <div className="mobile-top-section">
          <div className="mobile-top-left-quad">



            <div className='mobile-form-div'>

            <h1 className='mobile-form-div'>
              Sustainable fashion, handpicked, and curated for you.
            </h1>

            <p className='mobile-form-div'>
              The future of fashion is concious, ethical, and here. Yard Sale provides a boutique, curated selection of designer goods, carefully sourced for you and our planet.
            </p>

            <EmailForm/>
            </div>
          </div>

          <div className="mobile-top-right-quad">
            <img className='mobile-image-rop-right' src={top_image}/>
          </div>
        </div>


      </div>
      {/*

      <div className='mobile-horizontal-line-top'></div>


      <div className='mobile-a-few-brands-message'>
        <p className='mobile-a-few-brands-message'>
          A few brands we think you’d love to meet...
        </p>

        <Carousel
          containerProps={{
            style: {
              width: "100%",
              justifyContent: "space-between",
              height: "250px"
            }
          }}
          forwardBtnProps={{
            children: ">",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center",
              margin: "40px",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "60px"
            }
          }}
          backwardBtnProps={{
            children: "<",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center",
              margin: "40px",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "60px"
            }
          }}
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={0}
          itemsToScroll={1}
          speed={1000}
          autoplay={false}
          centerMode={true}
          infinite={true}
          hideNavIfAllVisible={true}
          disableNavIfAllVisible={false}
          disableNavIfEdgeActive={false}
          disableNavIfEdgeVisible={false}
        >

        {brand_logos.map((image, i) => (
            <div className="mobile-carousel-div">
              <a target="_blank" href={brand_links[i]}>
                <img className="mobile-carousel-img" src={image}/>
              </a>
            </div>
        ))}


        </Carousel>

      </div>

      <div className='mobile-horizontal-line-middle'></div>

      <div className="mobile-center-top-section">
        <div className="mobile-bottom-section">
          <img className='mobile-image-bottom-left' src={bottom_image}/>

          <div className="mobile-bottom-text">
          <div className='mobile-how-works-message'>
            <p className='mobile-how-works-message'>
              How Yard Sale works
            </p>
          </div>

          <div className='mobile-how-works-text'>
            <p className='mobile-how-works-text'>
            Our mission is not to change how people shop for clothing, but rather give them the ability to do so sustainably.
            </p>

            <p className='mobile-how-works-text'>
            We are partnering with a wide range of sustainable, boutique fashion brands to accomplish this goal. Each one is carefully selected based on their actions towards reducing the environmental footprint of the fashion industry, as well as the quality of their clothing.
            </p>

            <p className='mobile-how-works-text'>
            This way, when you shop with us, you won’t have to worry about anything except finding those one-of-a-kind pieces.
            </p>
            </div>
          </div>
        </div>
      </div>


      <div className='mobile-horizontal-line-bottom'></div>

      {/*
      <div className='mobile-box-bottom-wrapper'>
      <div className='mobile-box-bottom'>

        <div className='mobile-terms-of-service'>
          <p className='mobile-bottom-bar-text'><a href='#'>TERMS OF SERVICE</a></p>
        </div>


        <div className='mobile-privacy-policy'>
          <p className='mobile-bottom-bar-text'><a href='#'>PRIVACY POLICY</a></p>
        </div>

      </div>

      <div className='mobile-box-bottom-padding'></div>
      </div>
      */}

    </>
  );
}


export default Mobile;
