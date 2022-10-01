import React, { useState } from "react";

export const sliderData = [
  {
    slide: 1,
    icon: "star",
    description: "Food",
    url: "https://images.unsplash.com/photo-1619290463523-6d18f6a6b220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80",
  },
  {
    slide: 2,
    icon: "category",
    description: "Food",
    url: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  },
  {
    slide: 3,
    icon: "supervised_user_circle",
    description: "Food",
    url: "https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    slide: 4,
    icon: "help_center",
    description: "Food",
    url: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    slide: 5,
    icon: "alarm",
    description: "Food",
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

export const Slider = () => {
  const [activeId, setActiveSlider] = useState(1);
  return (
    <div className="slider">
      {sliderData.map((obj: any) => (
        <div
          className={activeId === obj.slide ? "slide active" : "slide"}
          onClick={() => setActiveSlider(obj.slide)}
          style={{
            backgroundImage: `url(${obj.url})`,
          }}
        >
          <div className="slide__content">
            <div className="slide__icon">
              <span className="material-symbols-outlined">{obj.icon}</span>
            </div>
            <div>
              <div className="slide__title">Slide {obj.slide}</div>
              <div className="slide__description">{obj.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
