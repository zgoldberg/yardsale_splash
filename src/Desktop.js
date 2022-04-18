import './Desktop.css'

import yardsale_logo from './images/yardsale_logo.png'

import top_image from './images/top_image.png'
import bottom_image from './images/bottom_image.png'

import girlfriend_logo from './images/brands/girlfriend-collective.png'
import johnston_logo from './images/brands/johnston-of-elgin.png'
import organic_logo from './images/brands/organic-basics.png'
import pangia_logo from './images/brands/pangia.png'
import satta_logo from './images/brands/satta.png'
import stellamccartney_logo from './images/brands/stellamccartney.svg'
import story_logo from './images/brands/story.png'
import veja_logo from './images/brands/veja.png'

import { useState } from 'react';

import EmailForm from './EmailForm';
import Carousel from "react-simply-carousel";

function Desktop() {

  function getResizeFactor() {
    if (window.innerWidth > 1600) {
      return 1;
    } else if (window.innerWidth > 1400) {
      return 0.75;
    } else {
      return 0.6;
    }
  }

  const image_top_right_width = 530;
  const image_top_right_height = 530;
  const image_bottom_left_width = 879;
  const image_bottom_left_height = 450;

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [imageResizeFactor, setImageResizeFactor] = useState(getResizeFactor());

  const brand_logos = [
    girlfriend_logo,
    johnston_logo,
    organic_logo,
    pangia_logo,
    satta_logo,
    stellamccartney_logo,
    story_logo,
    veja_logo
  ];

  const brand_links = [
    "https://girlfriend.com/",
    "https://www.johnstonsofelgin.com/",
    "https://organicbasics.com/",
    "https://thepangaia.com/",
    "https://www.sattalivity.com/",
    "https://www.stellamccartney.com/",
    "https://www.storymfg.com/",
    "https://www.veja-store.com/en_us/"
  ]

  window.addEventListener('resize', () => {setImageResizeFactor(getResizeFactor())});
  // handleResize();

  return (
    <>
      <div className='top-line'></div>

      <div className="center-top-section">
        <div className="top-section">
          <div className="top-left-quad">

            <div className="yardsale-icon">
              <img className='yardsale-icon' src={yardsale_logo}/>
            </div>

            <div className='form-div'>

            <h1 className='form-div'>
              Sustainable fashion, handpicked, and curated for you.
            </h1>

            <p className='form-div'>
              The future of fashion is concious, ethical, and here. Yard Sale provides a boutique, curated selection of designer goods, carefully sourced for you and our planet.
            </p>

            <EmailForm/>
            </div>
          </div>

          <div className="top-right-quad">
            <img className='image-top-right'
                 src={top_image}
                 style={{
                   width: imageResizeFactor * image_top_right_width + 'px',
                   height: 1 *  image_top_right_height + 'px',
                 }}
            />
          </div>
        </div>


      </div>

      <div className='horizontal-line-top'></div>


      <div className='a-few-brands-message'>
        <p className='a-few-brands-message'>
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
            <div className="carousel-div">
              <a target="_blank" href={brand_links[i]}>
                <img className="carousel-img" src={image}/>
              </a>
            </div>
        ))}


        </Carousel>

      </div>

      <div className='horizontal-line-middle'></div>

      <div className="center-top-section">
        <div className="bottom-section">
          <img className='image-bottom-left'
               src={bottom_image}
               style={{
                 width: imageResizeFactor * image_bottom_left_width + 'px',
                 height: 1 *  image_bottom_left_height + 'px',
               }}
          />

          <div className="bottom-text">
          <div className='how-works-message'>
            <p className='how-works-message'>
              How Yard Sale works
            </p>
          </div>

          <div className='how-works-text'>
            <p className='how-works-text'>
            Our mission is not to change how people shop for clothing, but rather give them the ability to do so sustainably.
            </p>

            <p className='how-works-text'>
            We are partnering with a wide range of sustainable, boutique fashion brands to accomplish this goal. Each one is carefully selected based on their actions towards reducing the environmental footprint of the fashion industry, as well as the quality of their clothing.
            </p>

            <p className='how-works-text'>
            This way, when you shop with us, you won’t have to worry about anything except finding those one-of-a-kind pieces.
            </p>
            </div>
          </div>
        </div>
      </div>


      <div className='horizontal-line-bottom'></div>

      {/*
      <div className='box-bottom-wrapper'>
      <div className='box-bottom'>

        <div className='terms-of-service'>
          <p className='bottom-bar-text'><a href='#'>TERMS OF SERVICE</a></p>
        </div>


        <div className='privacy-policy'>
          <p className='bottom-bar-text'><a href='#'>PRIVACY POLICY</a></p>
        </div>

      </div>

      <div className='box-bottom-padding'></div>
      </div>
      */}

    </>
  );
}


export default Desktop;
