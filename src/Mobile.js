import './Mobile.css'

import yardsale_logo from './images/yardsale_logo.png'

import top_image from './images/top_image.png'
import bottom_image from './images/bottom_image.png'

import girlfriend_logo from './images/brands/girlfriend_collective.png'
import johnston_logo from './images/brands/johnstons_of_elgin.png'
import nudie_logo from './images/brands/nudie_jeans.png'
import organic_logo from './images/brands/organic_basics.png'
import older_logo from './images/brands/older_brother.png'
import pangia_logo from './images/brands/pangaia.png'
import richer_poorer_logo from './images/brands/richer_poorer.png'
import satta_logo from './images/brands/satta.png'
import stellamccartney_logo from './images/brands/stella_mccartney.png'
import story_logo from './images/brands/story_mfg.png'
import veja_logo from './images/brands/veja.png'
import wawwa_logo from './images/brands/wawwa.png'

import instagram_logo from './images/instagram_logo.svg'

import text from './text.js'

import { useState } from 'react';

import EmailForm from './EmailForm';

function Mobile() {

  const [activeSlideIndex, setActiveSlideIndex ] = useState(0);

  const brands = [
    [girlfriend_logo, "https://girlfriend.com/"],
    [johnston_logo, "https://www.johnstonsofelgin.com/"],
    [nudie_logo, "https://www.nudiejeans.com/"],
    [organic_logo, "https://organicbasics.com/"],
    [older_logo, "https://olderbrother.us/"],
    [pangia_logo, "https://thepangaia.com/"],
    [richer_poorer_logo, "https://richer-poorer.com/"],
    [satta_logo, "https://www.sattalivity.com/"],
    [stellamccartney_logo, "https://www.stellamccartney.com/"],
    [story_logo, "https://www.storymfg.com/"],
    [veja_logo, "https://www.veja-store.com/en_us/"],
    [wawwa_logo, "https://wawwaclothing.com/"],
  ];

  return (
    <>

      <div className="mobile-yardsale-icon">
        <img className='mobile-yardsale-icon' src={yardsale_logo}/>
      </div>

      <div className='mobile-form-div'>
        <h1 className='mobile-form-div'>
          {text['top_left_text_1']}
        </h1>

        <p className='mobile-form-div'>
          {text['top_left_text_2']}
        </p>

        <p className='mobile-form-div'>
          {text['top_left_text_3']}
        </p>

        <EmailForm mobile={true}/>
      </div>


      <div className='mobile-image-rop-right'>
        <img className='mobile-image-rop-right' src={top_image}/>
      </div>

      <div className='horizontal-line-top'></div>

        <div className="mobile-form-div">
          <h1 className="mobile-our-mission">
            {text['mission_text_1']}
          </h1>

          <p className="mobile-our-mission">
            {text['mission_text_2']}
          </p>
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

      <div className='horizontal-line-top'></div>



      <div className='mobile-a-few-brands-message'>
        <p className='mobile-a-few-brands-message'>
          {text['a_few_brands_text']}
        </p>

        {brands.map((tuple) => (
            <div className="mobile-carousel-div">
              <a target="_blank" href={tuple[1]}>
                <img className="mobile-carousel-img" src={tuple[0]}/>
              </a>
            </div>
        ))}
      </div>

      <div className='horizontal-line-top'></div>


      <div className='social-media'>
        <p className='mobile-social-media'>
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


export default Mobile;
