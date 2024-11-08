import React, { useState } from 'react';
import img from './foto.jpg';

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

  return (
    <div>
      <div className="wrapper">
        <div className="image-wrapper">
          <div className="image">
            <img
              src={img}
              alt=""
              style={{
                filter: `${brightness.property}(${brightness.value}${brightness.unit})${blur.property}(${blur.value}${blur.unit})`,
              }}
            />
          </div>
        </div>

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
  );
}

export default App;
