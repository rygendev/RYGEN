// components/Background.jsx
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import bgVideo from '../../assets/background_play.mp4';
import bgImage from '../../assets/Red_background.jpg';

const Background = () => {
  const location = useLocation();
  const videoRef = useRef(null);

  const isVideoRoute = location.pathname === '/' || location.pathname === '/apps';

  useEffect(() => {
    if (!isVideoRoute) return;

    const video = videoRef.current;
    let scrollTop = 0;
    let scrollHeight = 1;
    let targetTime = 0;
    let currentTime = 0;

    const onScroll = () => {
      scrollTop = window.scrollY;
      scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const scrollPercent = scrollTop / scrollHeight;
      targetTime = scrollPercent * video.duration;
    };

    const animate = () => {
      if (video.readyState >= 2) {
        currentTime += (targetTime - currentTime) * 0.1;
        video.currentTime = currentTime;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', onScroll);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isVideoRoute]);

  if (isVideoRoute) {
    return (
      <video
        ref={videoRef}
        src={bgVideo}
        type="video/mp4"
        preload="auto"
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    );
  }

  return (
    <div
      className="static-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default Background;
