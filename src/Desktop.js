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

import instagram_logo from './images/instagram_logo.svg'

import text from './text.js'

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

  const brands = [
    [girlfriend_logo, "https://girlfriend.com/"],
    [johnston_logo, "https://www.johnstonsofelgin.com/"],
    [organic_logo, "https://organicbasics.com/"],
    [pangia_logo, "https://thepangaia.com/"],
    [satta_logo, "https://www.sattalivity.com/"],
    [stellamccartney_logo, "https://www.stellamccartney.com/"],
    [story_logo, "https://www.storymfg.com/"],
    [veja_logo, "https://www.veja-store.com/en_us/"],
  ];

  window.addEventListener('resize', () => {setImageResizeFactor(getResizeFactor())});

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
              {text['top_left_text_1']}
            </h1>

            <p className='form-div'>
              {text['top_left_text_2']}
            </p>

            <p className='form-div'>
              {text['top_left_text_3']}
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

        <div className="our-mission-1">
          <div className="our-mission">
            <h1 className="our-mission">
              {text['mission_text_1']}
            </h1>

            <p className="our-mission">
              {text['mission_text_2']}
            </p>
          </div>
        </div>

      <div className='horizontal-line-top'></div>


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
                {text['how_works_text_1']}
              </p>
            </div>

            <div className='how-works-text'>
              <p className='how-works-text'>
                {text['how_works_text_2']}
              </p>

              <p className='how-works-text'>
                {text['how_works_text_3']}
              </p>

              <p className='how-works-text'>
                {text['how_works_text_4']}
              </p>
              </div>
            </div>
          </div>
      </div>

      <div className='horizontal-line-top'></div>


      <div className='a-few-brands-message'>
        <p className='a-few-brands-message'>
          {text['a_few_brands_text']}
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

        {brands.map((tuple) => (
            <div className="carousel-div">
              <a target="_blank" href={tuple[1]}>
                <img className="carousel-img" src={tuple[0]}/>
              </a>
            </div>
        ))}


        </Carousel>

      </div>

      <div className='horizontal-line-top'></div>

      <div className='social-media'>
        <p className='social-media'>
          {text['bottom_text_1']}
        </p>

        <a className='social-media' href={text['instagram_link']} target="_blank">
          <img className='social-media'
               src={instagram_logo}
           />
         </a>
      </div>

    </>
  );
}


export default Desktop;
