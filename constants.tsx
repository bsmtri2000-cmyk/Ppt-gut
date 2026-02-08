
import React from 'react';
import { SlideContent } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    type: 'title',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
        <h1 className="text-5xl font-extrabold text-blue-900 leading-tight uppercase tracking-wide">
          TĂNG ACID URIC KHÔNG TRIỆU CHỨNG:<br/>
          KHI NÀO BẮT ĐẦU ĐIỀU TRỊ?
        </h1>
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-gray-700">TS.BS Bùi Hải Bình</p>
          <p className="text-xl text-gray-600">Trung tâm Cơ Xương Khớp, bệnh viện Bạch Mai</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Nội dung",
    content: (
      <ul className="text-2xl space-y-8 mt-10 ml-10 text-gray-700">
        <li className="flex items-center gap-4">
           <span className="w-2 h-2 bg-blue-600 rounded-full" />
           Tăng acid uric không triệu chứng: định nghĩa, dịch tễ học
        </li>
        <li className="flex items-center gap-4">
           <span className="w-2 h-2 bg-blue-600 rounded-full" />
           Cơ chế bệnh sinh và vai trò của tăng acid uric trong một số bệnh lý
        </li>
        <li className="flex items-center gap-4">
           <span className="w-2 h-2 bg-blue-600 rounded-full" />
           Hướng dẫn điều trị tình trạng tăng acid uric không triệu chứng
        </li>
      </ul>
    )
  },
  {
    id: 3,
    title: "Định nghĩa - Dịch tễ học",
    content: (
      <div className="space-y-6 text-xl text-gray-800">
        <ul className="list-disc ml-8 space-y-4">
          <li><strong>Tăng acid uric không triệu chứng (Asymptomatic Hyperuricemia)</strong> là tình trạng nồng độ acid uric (AU) trong máu cao hơn mức bình thường nhưng không có biểu hiện lâm sàng của bệnh gút hoặc bệnh lý liên quan đến AU.</li>
          <li><strong>Giới hạn AU máu:</strong> Nam giới: {`> 7.0 mg/dL (420 µmol/L)`}; Nữ giới: {`> 6.0 mg/dL (360 µmol/L)`}.</li>
          <li><strong>Tỷ lệ mắc bệnh:</strong> khoảng 5-20% dân số.</li>
          <li>Tỷ lệ cao hơn ở nam giới, người lớn tuổi, béo phì, người có chế độ ăn giàu purin (thịt đỏ, hải sản, rượu bia).</li>
          <li><strong>Phân bố theo giới tính:</strong> Nam giới có nguy cơ cao hơn nữ giới (do hormon estrogen ở nữ giúp tăng đào thải AU). Phụ nữ sau mãn kinh có nguy cơ tăng AU.</li>
        </ul>
        <p className="text-sm text-gray-500 italic mt-8">Nguồn: David B Mount. Asymptomatic hyperuricemia Uptodate 2025</p>
      </div>
    )
  },
  {
    id: 4,
    title: "Hậu quả của tăng Acid uric máu",
    content: (
      <div className="grid grid-cols-2 gap-8 items-center h-full">
        <div className="space-y-6 text-lg">
           <p>• Tăng AU (thông qua tinh thể urat) <strong className="text-red-600">liên quan trực tiếp</strong> đến các bệnh lắng đọng tinh thể monosodium urat (MSU)</p>
           <p>• Tăng AU (hòa tan) <strong className="text-red-600">có liên quan nhưng không có mối quan hệ nhân quả</strong> đến các rối loạn (mà không liên quan nhiều và trực tiếp đến lắng đọng tinh thể) như các bệnh tăng huyết áp, bệnh thận mạn tính (CKD), bệnh tim mạch và hội chứng chuyển hóa</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="flex flex-col gap-4 text-xs">
            <div className="grid grid-cols-2 gap-2 text-center font-bold">
               <div className="bg-orange-200 p-2 rounded">Symptomatic</div>
               <div className="bg-green-200 p-2 rounded">Asymptomatic</div>
            </div>
            <div className="flex justify-center items-center gap-4">
               <div className="bg-white border-2 border-orange-400 p-2 rounded w-24">Crystalline UA</div>
               <div className="text-xl">↔</div>
               <div className="bg-white border-2 border-green-400 p-2 rounded w-24">Soluble UA</div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-[10px]">
               <div className="space-y-1">
                 <div className="bg-white border p-1">Gouty arthritis</div>
                 <div className="bg-white border p-1">Urolithiasis</div>
                 <div className="bg-white border p-1">Kidney stones</div>
               </div>
               <div className="space-y-1">
                 <div className="bg-white border p-1">CKD progression</div>
                 <div className="bg-white border p-1">CKD-related CVD</div>
                 <div className="bg-white border p-1">CKD and infection</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Cơ chế bệnh sinh và vai trò của acid uric",
    content: (
      <div className="relative h-full flex items-center">
        <div className="grid grid-cols-3 gap-4 text-xs h-3/4">
          <div className="border border-red-500 p-2 overflow-auto bg-gray-50">
             <h4 className="font-bold border-b mb-1">Diseases</h4>
             <p>Gout, Kidney disease, Metabolic syndrome, Cardiovascular disease (CVD), Hypertension, Intervertebral degeneration, Diabetes</p>
          </div>
          <div className="border border-red-500 p-2 overflow-auto bg-gray-50">
             <h4 className="font-bold border-b mb-1">Symptoms</h4>
             <p>Arthritis, Tophi, Chronic kidney diseases, Nephrolithiasis, Central obesity, Hyperglycemia, Atrial fibrillation, Heart failure, Insulin resistance...</p>
          </div>
          <div className="border border-red-500 p-4 bg-yellow-100 flex flex-col justify-center items-center text-center gap-2">
            <h3 className="font-bold text-lg mb-2">Inflammasome</h3>
            <ul className="space-y-1 text-sm font-semibold">
              <li>Bài tiết các cytokines gây viêm</li>
              <li>Stress oxi hóa và RL chức năng nội mô</li>
              <li>Co mạch thận do viêm</li>
              <li>Kích hoạt hệ thống Renin-angiotensin bởi AU</li>
              <li>Tổn thương mạch</li>
              <li>Rối loạn vi mạch</li>
              <li>Hủy tế bào</li>
              <li>Tăng đề kháng insulin...</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 18,
    title: "Khuyến cáo trong điều trị tăng AU máu không triệu chứng",
    content: (
      <div className="grid grid-cols-2 gap-8 h-full text-sm">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-lg font-bold text-blue-900 mb-4 bg-blue-200 p-2 rounded">Đồng thuận dùng thuốc hạ AU máu</h3>
          <ul className="list-disc ml-4 space-y-3">
            <li>Một số NC RCT đã chứng minh hiệu quả</li>
            <li>Trong một số điều kiện nhất định (khuyến cáo có điều kiện)</li>
            <li>Một số quốc gia châu Á: các NC châu Âu (không chứng tỏ hiệu quả) đối tượng chủ yếu là người da trắng, thiếu chủng tộc châu Á; trong khi NC tại châu Á: có hiệu quả</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
          <h3 className="text-lg font-bold text-orange-900 mb-4 bg-orange-200 p-2 rounded">Phản đối dùng thuốc hạ AU máu rộng rãi</h3>
          <ul className="list-disc ml-4 space-y-3">
            <li>Tỷ lệ phát triển bệnh thấp: tỷ lệ tích lũy 5 năm phát triển bệnh gút nhóm AU {`> 9mg/dL`} 20-30%; cứ 24 BN điều trị 3 năm liền để ngăn 1 đợt bệnh gút xuất hiện</li>
            <li>Ngay cả có bệnh - giải quyết được dễ dàng</li>
            <li>Một số NC chưa chứng minh được hiệu quả hoặc thiếu dữ liệu bằng chứng thuyết phục</li>
            <li>Lợi ích không lớn hơn; rủi ro cao hơn (khi dùng thuốc hạ AU kéo dài) với số đông BN</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 24,
    title: "Thống nhất",
    content: (
      <div className="space-y-8 text-xl text-gray-800 mt-6">
        <div className="space-y-4">
          <h3 className="font-bold text-blue-900 text-2xl">Can thiệp lối sống (Nền tảng chính):</h3>
          <ul className="list-disc ml-10 space-y-2">
            <li>Chế độ ăn ít purin, tránh bia rượu và nước ngọt có đường</li>
            <li>Uống nhiều nước để tăng đào thải AU</li>
            <li>Giảm cân nếu béo phì...</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-blue-900 text-2xl">Điều trị, đánh giá:</h3>
          <p className="ml-10">Điều trị các nguy cơ - bệnh kèm theo (huyết áp, đường máu, bệnh thận, rối loạn lipid...) theo <strong>Các hướng dẫn đã được đề nghị cho từng bệnh</strong></p>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-blue-900 text-2xl">Dùng thuốc khi có chỉ định rõ ràng:</h3>
          <ul className="list-disc ml-10 space-y-2">
            <li>Tư vấn bệnh nhân về nguy cơ và lợi ích điều trị</li>
            <li>Định kỳ kiểm tra AU, chức năng thận</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 30,
    title: "Kết luận",
    content: (
      <div className="space-y-8 text-2xl text-gray-800 mt-10 ml-8">
        <ul className="space-y-6">
          <li className="flex items-center gap-4">
             <span className="w-3 h-3 bg-red-500 rounded-full" />
             Không điều trị hầu hết các trường hợp tăng AU không triệu chứng
          </li>
          <li className="flex flex-col gap-4">
             <div className="flex items-center gap-4">
                <span className="w-3 h-3 bg-blue-500 rounded-full" />
                Chỉ điều trị khi có nguy cơ biến chứng cao:
             </div>
             <ul className="list-disc ml-16 space-y-2 text-xl text-gray-700">
                <li><span className="bg-yellow-100 px-2 font-bold">AU {`> 13 mg/dL`} (780 µmol/L với nam); {`> 10 mg/dL`} (600 µmol/L với nữ)</span></li>
                <li>Bệnh sỏi thận do acid uric và AU {`> 480 mcmol/L`}</li>
                <li>CKD {`≥ G3`} và AU {`> 480 mcmol/L`}</li>
                <li>Hội chứng ly giải khối u</li>
                <li><span className="bg-yellow-100 px-2 italic">Tăng huyết áp/CVD/ Hội chứng rối loạn chuyển hóa?</span></li>
             </ul>
          </li>
          <li className="flex items-center gap-4">
             <span className="w-3 h-3 bg-green-500 rounded-full" />
             Quản lý AU bằng thay đổi lối sống là ưu tiên hàng đầu
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 31,
    type: 'thankyou',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-12">
        <h1 className="text-7xl font-bold text-blue-600 drop-shadow-md">Trân trọng cảm ơn!</h1>
        <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="https://picsum.photos/800/500?grayscale" alt="Landscape" className="w-full object-cover" />
        </div>
      </div>
    )
  }
];

// Placeholder for remaining slides based on text from images
// Slide 6-17 are mostly research data tables/graphs which we summarize in content components
