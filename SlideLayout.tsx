
import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  slideNumber: number;
  totalSlides: number;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ children, title, slideNumber, totalSlides }) => {
  return (
    <div className="flex flex-col h-full w-full bg-white relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-800 rounded flex items-center justify-center text-white font-bold text-xs text-center p-1">
            VRA
          </div>
          <div className="text-blue-900 font-semibold text-sm leading-tight">
            HỘI THẤP KHỚP HỌC VIỆT NAM<br/>
            <span className="text-[10px] font-normal uppercase">Vietnam Rheumatology Association</span>
          </div>
        </div>
        {title && (
          <h2 className="text-2xl font-bold text-gray-800 absolute left-1/2 -translate-x-1/2">
            {title}
          </h2>
        )}
      </div>

      {/* Content Body */}
      <div className="flex-1 px-12 py-8 overflow-auto">
        {children}
      </div>

      {/* Footer */}
      <div className="h-12 bg-blue-900 flex items-center justify-between px-8 text-white text-[10px] font-medium">
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold italic">VRA2025</span>
          <div className="w-px h-6 bg-white/30" />
          <span>HỘI NGHỊ KHOA HỌC THƯỜNG NIÊN LẦN THỨ XXII | The 22nd Annual Scientific Conference on Rheumatology</span>
        </div>
        <div>
           Trang {slideNumber} / {totalSlides}
        </div>
      </div>
    </div>
  );
};

export default SlideLayout;
