
import React, { useState, useEffect, useCallback } from 'react';
import SlideLayout from './components/SlideLayout';
import { SLIDES } from './constants';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        goToPrevSlide();
      } else if (event.key === 'Home') {
        setCurrentSlideIndex(0);
      } else if (event.key === 'End') {
        setCurrentSlideIndex(SLIDES.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  const currentSlide = SLIDES[currentSlideIndex];

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      {/* Slide Display Area */}
      <div className="slide-container">
        <SlideLayout 
          title={currentSlide.title} 
          slideNumber={currentSlideIndex + 1} 
          totalSlides={SLIDES.length}
        >
          {currentSlide.content}
        </SlideLayout>
      </div>

      {/* Navigation Controls Overlay (Visible on hover or Mobile) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={goToPrevSlide} 
          disabled={currentSlideIndex === 0}
          className="hover:text-blue-400 disabled:opacity-30 p-2 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="font-mono text-lg min-w-[60px] text-center">
          {currentSlideIndex + 1} / {SLIDES.length}
        </span>
        <button 
          onClick={goToNextSlide} 
          disabled={currentSlideIndex === SLIDES.length - 1}
          className="hover:text-blue-400 disabled:opacity-30 p-2 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-800">
        <div 
          className="h-full bg-blue-500 transition-all duration-300" 
          style={{ width: `${((currentSlideIndex + 1) / SLIDES.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default App;
