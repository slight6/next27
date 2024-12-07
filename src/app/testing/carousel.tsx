import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

const demoSites = [
  { id: 1, title: 'Site 1', link: 'https://example.com', thumbnail: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Site 2', link: 'https://example.com', thumbnail: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Site 3', link: 'https://example.com', thumbnail: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Site 4', link: 'https://example.com', thumbnail: 'https://via.placeholder.com/150' },
];

const App = () => {
  const [current, setCurrent] = useState(0);

  const handleCardClick = (index) => {
    if (index === current) {
      window.open(demoSites[index].link, '_blank');
    } else {
      setCurrent(index);
    }
  };

  return (
    <div className="ufo-container">
      <div className="cards-container">
        {demoSites.map((site, index) => {
          const isCenter = index === current;
          const offset = index - current;

          const { transform, opacity } = useSpring({
            transform: `translateX(${offset * 120}px) scale(${isCenter ? 1.2 : 0.8})`,
            opacity: isCenter ? 1 : 0.5,
          });

          return (
            <animated.div
              key={site.id}
              className={`card ${isCenter ? 'center' : ''}`}
              style={{ transform, opacity }}
              onClick={() => handleCardClick(index)}
            >
              <img src={site.thumbnail} alt={site.title} />
              <div className="card-title">{site.title}</div>
            </animated.div>
          );
        })}
      </div>
      <div className="ufo">
        <div className="ufo-light" />
      </div>
    </div>
  );
};

export default App;
