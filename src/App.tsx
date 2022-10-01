import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="slider">
        <div
          className="slide"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1619290463523-6d18f6a6b220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80)",
          }}
        >
          <div className="slide__content">
            <div className="slide__icon">
              <span className="material-symbols-outlined">star</span>
            </div>
            <div>
              <div className="slide__title">Slide 1</div>
              <div className="slide__description">Some description</div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80)",
          }}
        >
          <div className="slide__content">
            <div className="slide__icon">
              <span className="material-symbols-outlined">
                shopping_cart_checkout
              </span>
            </div>
            <div>
              <div className="slide__title">Slide 2</div>
              <div className="slide__description">Some description</div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
          }}
        >
          <div className="slide__content">
            <div className="slide__icon">
              <span className="material-symbols-outlined">sunny</span>
            </div>
            <div>
              <div className="slider__title">Slide 3</div>
              <div className="slider__description">Some description</div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80)",
          }}
        >
          <div className="slide__content">
            <div className="slide__icon">
              <span className="material-symbols-outlined">
                tips_and_updates
              </span>
            </div>
            <div>
              <div className="slide__title">Slide 4</div>
              <div className="slide__description">Some description</div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
          }}
        >
          <div className="slide__content">
            <div className="slide__icon">
              <span className="material-symbols-outlined">category</span>
            </div>
            <div>
              <div className="slide__title">Slide 5</div>
              <div className="slide__description">Some description</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
