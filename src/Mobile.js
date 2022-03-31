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

    </>
  );
}


export default Mobile;
