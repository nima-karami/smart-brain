import './App.css';
import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


function App() {
  
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('https://www.biography.com/.image/t_share/MTgwNDU1MTgzMTI0Mjc3MTAw/gettyimages-1257937597.jpg');
  const boxInitialState = {
      leftCol: 168.72,
      topRow: 43.10,
      rightCol: 167.50,
      bottomRow: 223.33
  }

  const [faceBoxes, setFaceBoxes] = useState(boxInitialState);
  const [route, setRoute] = useState('signin');
  


  const calculateFaceLocation = (data) => {
    console.log('data: ',data);
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    const faceBoxes = [];
    
    for (let i=0; i < data.outputs[0].data.regions.length; i++) {
      let clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
      let faceBox = {
        leftCol: Math.round(clarifaiFace.left_col * width),
        topRow: Math.round(clarifaiFace.top_row * height),
        rightCol: Math.round(width - (clarifaiFace.right_col * width)),
        bottomRow: Math.round(height - (clarifaiFace.bottom_row * height))
      }

      faceBoxes.push(faceBox);
    }

    console.log('Face Boxes: ', faceBoxes);
    console.log('Image Width: ', width,'Image Height: ', height);
    return faceBoxes;
  };

  const renderFaceBox = (faceBoxes) => {
    setFaceBoxes(faceBoxes)
  }

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
      "a403429f2ddf4b49b307e318f00e528b", input)
      .then(res => renderFaceBox(calculateFaceLocation(res))
      .catch(err => console.log(err))
      );
  }

  const onRouteChange = (route) => {
    setRoute(route);
  }
  const particlesInit = async (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
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
      <Navigation onRouteChange={onRouteChange} />
      <Logo className='z-max'/>
      
      { (route === 'signin')? <Signin onRouteChange={onRouteChange} />
        :(route === 'register')? <Register onRouteChange={onRouteChange} />
        :<div>
            <Rank />
            <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
            <FaceRecognition faceBoxes={faceBoxes} imageURL={imageURL} />
          </div>
        }
        
       

      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={partcileOptions}
    />
    </div>
  );
}

export default App;
