import React, { useState } from 'react';
import img from './foto.jpg';
import Announcement from './Announcement';
import Navbar from './Navbar';

function App() {
  const [brightness, setBrightness] = useState({
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  });

  const [saturation, setSaturation] = useState({
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  });

  const [grayscale, setGrayscale] = useState({
    name: 'Grayscale',
    property: 'grayscale',
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  });

  const [sepia, setSepia] = useState({
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  });

  const [hueRotate, setHueRotate] = useState({
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg',
  });

  const [blur, setBlur] = useState({
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: 'px',
  });

  const [background, setBackground] = useState(
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg',
  );

  return (
    <div>
      <Announcement />
      <Navbar setBackground={setBackground} />
      <div className="wrapper">
        <div className="image-wrapper">
          <div className="image">
            <img
              src={background}
              alt=""
              style={{
                filter: `
                ${brightness.property}(${brightness.value}${brightness.unit})
                ${blur.property}(${blur.value}${blur.unit})
                ${grayscale.property}(${grayscale.value}${grayscale.unit})
                ${saturation.property}(${saturation.value}${saturation.unit})
                ${sepia.property}(${sepia.value}${sepia.unit})
                ${hueRotate.property}(${hueRotate.value}${hueRotate.unit})`,
              }}
            />
          </div>
        </div>
        <div className="options">
          <div className="mode">
            <span>brightness</span>
            <input
              type="range"
              max={brightness.range.max}
              min={brightness.range.min}
              value={brightness.value}
              onChange={(e) => {
                setBrightness({ ...brightness, value: `${e.target.value}` });
              }}
            />
          </div>

          <div className="mode">
            <span>saturation</span>
            <input
              type="range"
              max={saturation.range.max}
              min={saturation.range.min}
              value={saturation.value}
              onChange={(e) => {
                setSaturation({ ...saturation, value: `${e.target.value}` });
              }}
            />
            <span>grayscale</span>
            <input
              type="range"
              max={grayscale.range.max}
              min={grayscale.range.min}
              value={grayscale.value}
              onChange={(e) => {
                setGrayscale({ ...grayscale, value: `${e.target.value}` });
              }}
            />
          </div>

          <div className="mode">
            <span>sepia</span>
            <input
              type="range"
              max={sepia.range.max}
              min={sepia.range.min}
              value={sepia.value}
              onChange={(e) => {
                setSepia({ ...sepia, value: `${e.target.value}` });
              }}
            />
            <span>hue rotate</span>
            <input
              type="range"
              max={hueRotate.range.max}
              min={hueRotate.range.min}
              value={hueRotate.value}
              onChange={(e) => {
                setHueRotate({ ...hueRotate, value: `${e.target.value}` });
              }}
            />
          </div>
          <div className="mode blur">
            <span>blur</span>
            <input
              type="range"
              max={blur.range.max}
              min={blur.range.min}
              value={blur.value}
              onChange={(e) => {
                setBlur({ ...blur, value: `${e.target.value}` });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
