import './App.css';
import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

function App() {
  
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('https://www.biography.com/.image/t_share/MTgwNDU1MTgzMTI0Mjc3MTAw/gettyimages-1257937597.jpg');

  const app = new Clarifai.App({
    apiKey: 'b283cf87c1c6437a9c1dece41f044c83'
  });

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  }

  const onButtonSubmit = () => {
    console.log('click');
    setImageURL(input);

    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      input)
      .then(
      function(res) {
        console.log(res)
      },
      function (err) {
        console.log('error')
        console.log(err);
        // console.log(Clarifai);
      }
    )
  }

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const partcileOptions = {
    zLayers:1,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  return (
    <div className="App">
      <Navigation />
      <Logo className='z-max'/>
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={partcileOptions}
    />
      
      
      <FaceRecognition imageURL={imageURL} />
    </div>
  );
}

export default App;
