import battenwear_logo from './images/brands/battenwear.png'
import entireworld_logo from './images/brands/entireworld-logo.svg'
import girlfriend_logo from './images/brands/girlfriend-collective.png'
import johnston_logo from './images/brands/johnston-of-elgin.png'
import organic_logo from './images/brands/organic-basics.png'
import pangia_logo from './images/brands/pangia.png'
import richer_poorer_logo from './images/brands/richer-poorer.png'
import satta_poorer_logo from './images/brands/satta.png'
import stellamccartney_logo from './images/brands/stellamccartney.svg'
import story_logo from './images/brands/story.png'
import veja_logo from './images/brands/veja.png'

import { useState } from 'react';

import EmailForm from './EmailForm';
import Carousel from "react-simply-carousel";

function App() {

  const [activeSlideIndex, setActiveSlideIndex ] = useState(0);

  const brand_logos = [battenwear_logo, entireworld_logo, girlfriend_logo, johnston_logo, organic_logo, pangia_logo, richer_poorer_logo, satta_poorer_logo, stellamccartney_logo, story_logo, veja_logo];

  return (
    <>
      <div className='top-line'></div>

      <div className="center-top-section">
        <div className="top-section">
          <div className="top-left-quad">
            <div className='yardsale-icon-placeholder'>
            <h1 className='yardsale-icon-placeholder'>Yard Sale</h1>
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
            <div className='image-rop-right-placeholder'></div>
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

        {brand_logos.map((image) => (
            <div className="carousel-div">
              <img className="carousel-img" src={image}/>
            </div>
        ))}


        </Carousel>

      </div>

      <div className='horizontal-line-middle'></div>

      <div className="center-top-section">
        <div className="bottom-section">
          <div className='image-bottom-left-placeholder'></div>

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


export default App;
