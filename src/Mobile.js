import './Mobile.css'

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

function Mobile() {

  const [activeSlideIndex, setActiveSlideIndex ] = useState(0);

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

  return (
    <>

      <div className="mobile-yardsale-icon">
        <img className='mobile-yardsale-icon' src={yardsale_logo}/>
      </div>

      <div className='mobile-form-div'>
        <h1 className='form-div'>
          {text['top_left_text_1']}
        </h1>

        <p className='form-div'>
          {text['top_left_text_2']}
        </p>

        <p className='form-div'>
          {text['top_left_text_3']}
        </p>

        <EmailForm mobile={true}/>
      </div>


      <div className='mobile-image-rop-right'>
        <img className='mobile-image-rop-right' src={top_image}/>
      </div>

      <div className='horizontal-line-top'></div>

      <div className="mobile-our-mission-1">
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





      <div className='mobile-image-bottom-left'>
        <img className='mobile-image-bottom-left' src={bottom_image}/>
      </div>

      <div className="mobile-bottom-text">
        <div className='mobile-how-works-message'>
          <p className='mobile-how-works-message'>
            {text['how_works_text_1']}
          </p>
        </div>

        <div className='mobile-how-works-text'>
          <p className='mobile-how-works-text'>
            {text['how_works_text_2']}
          </p>

          <p className='mobile-how-works-text'>
            {text['how_works_text_3']}
          </p>

          <p className='mobile-how-works-text'>
            {text['how_works_text_4']}
          </p>
        </div>
      </div>

      <div className='horizontal-line-bottom'></div>



      <div className='mobile-a-few-brands-message'>
        <p className='mobile-a-few-brands-message'>
          {text['a_few_brands_text']}
        </p>

        {brand_logos.map((image, i) => (
            <div className="mobile-carousel-div">
              <a target="_blank" href={brand_links[i]}>
                <img className="mobile-carousel-img" src={image}/>
              </a>
            </div>
        ))}
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

      <div className='horizontal-line-bottom'></div>


    </>
  );
}


export default Mobile;
