import React from 'react';
import './App.css';

function App() {


  return (
    <div className="App" >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div className="slider">
        <div className="slider">
          <div className="slider__slider__content">
            <div className="slider__icon">
              <span className="material-symbols-outlined">star</span>
            </div>
            <div className="slider__title">Slide 1</div>
            <div className="slider__description">Some description</div>
          </div>
        </div>
        <div className="slider">
          <div className="slider__slider__content">
            <div className="slider__icon"></div>
            <div className="slider__title">Slide 2</div>
            <div className="slider__description">Some description</div>
          </div>
        </div>
        <div className="slider">
          <div className="slider__slider__content">
            <div className="slider__icon"></div>
            <div className="slider__title">Slide 3</div>
            <div className="slider__description">Some description</div>
          </div>
        </div>
        <div className="slider">
          <div className="slider__slider__content">
            <div className="slider__icon"></div>
            <div className="slider__title">Slide 4</div>
            <div className="slider__description">Some description</div>
          </div>
        </div>
        <div className="slider">
          <div className="slider__slider__content">
            <div className="slider__icon"></div>
            <div className="slider__title">Slide 5</div>
            <div className="slider__description">Some description</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
