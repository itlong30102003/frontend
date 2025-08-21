import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, Calendar, Clock, Users, Globe, PlayCircle, Check, ArrowRight, MessageCircle } from 'lucide-react';
import './index.css';

const EnglishLearningPlatform = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const teacherSectionRef = useRef(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const handleCloseModal = useCallback(() => {
    setShowDemoModal(false);
  }, []);
  const handleOpenModal = useCallback(() => {
    setShowDemoModal(true);
  }, []);

  const teachers = [
    {
      id: 1,
      name: "Sarah Johnson",
      nationality: "US",
      experience: "5 năm",
      rating: 4.9,
      reviews: 234,
      price: "200k",
      specialties: ["Business English", "IELTS", "Conversation"],
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      availableSlots: ["9:00 AM", "2:00 PM", "7:00 PM"]
    },
    {
      id: 2,
      name: "James Wilson",
      nationality: "UK",
      experience: "8 năm",
      rating: 4.8,
      reviews: 189,
      price: "250k",
      specialties: ["Academic English", "TOEFL", "Grammar"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      availableSlots: ["10:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
      id: 3,
      name: "Emily Davis",
      nationality: "CA",
      experience: "6 năm",
      rating: 5.0,
      reviews: 156,
      price: "180k",
      specialties: ["Kids English", "Pronunciation", "Speaking"],
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      availableSlots: ["11:00 AM", "4:00 PM", "6:00 PM"]
    }
  ];

  const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    role: "Nhân viên Marketing",
    content: "Sau 3 tháng học với cô Sarah, tôi đã tự tin giao tiếp với khách hàng quốc tế. Phương pháp học 1-1 thực sự hiệu quả!",
    rating: 5,
    improvement: "IELTS từ 5.5 lên 7.0"
  },
  {
    name: "Trần Văn Nam", 
    role: "Sinh viên",
    content: "Thầy James rất kiên nhẫn và chuyên nghiệp. Lịch học linh hoạt giúp tôi cân bằng với việc học đại học.",
    rating: 5,
    improvement: "TOEFL từ 70 lên 95"
  },
  {
    name: "Lê Thị Hương",
    role: "Doanh nhân", 
    content: "Platform này đã thay đổi cách tôi học tiếng Anh. Giáo viên phù hợp, lịch học thuận tiện, kết quả rõ rệt.",
    rating: 5,
    improvement: "Từ sơ cấp lên trung cấp trong 6 tháng"
  },
  {
    name: "Phạm Quốc Dũng",
    role: "Kỹ sư IT",
    content: "Tôi cần tiếng Anh chuyên ngành IT để thăng tiến. Giáo viên hiểu rất rõ về technical English và đã giúp tôi rất nhiều.",
    rating: 5,
    improvement: "Lương tăng 40% sau khi chuyển công ty"
  },
  {
    name: "Vũ Thị Mai",
    role: "Học sinh cấp 3",
    content: "Ban đầu em rất sợ nói tiếng Anh. Nhờ cô Lisa nhiệt tình, giờ em đã tự tin thuyết trình trước lớp bằng tiếng Anh!",
    rating: 5,
    improvement: "Điểm tiếng Anh từ 6.5 lên 8.8"
  },
  {
    name: "Hoàng Minh Tuấn",
    role: "Quản lý dự án",
    content: "Sau 4 tháng học, tôi đã có thể điều hành các cuộc meeting quốc tế một cách tự tin. Đầu tư xứng đáng!",
    rating: 5,
    improvement: "IELTS Speaking từ 5.0 lên 7.5"
  },
  {
    name: "Đỗ Thị Lan",
    role: "Bác sĩ",
    content: "Tôi cần tiếng Anh y khoa để tham gia hội thảo quốc tế. Thầy David đã giúp tôi chuẩn bị rất tốt với từ vựng chuyên môn.",
    rating: 5,
    improvement: "Đã thuyết trình tại 3 hội nghị quốc tế"
  },
  {
    name: "Ngô Văn Khoa",
    role: "Chủ doanh nghiệp",
    content: "Việc mở rộng thị trường ra nước ngoài đòi hỏi tiếng Anh tốt. Cô Emma đã giúp tôi đàm phán thành công với đối tác Mỹ.",
    rating: 5,
    improvement: "Ký được hợp đồng 2 triệu USD"
  }
];
  const handleBookTrial = (teacher) => {
    setSelectedTeacher(teacher);
    setShowModal(true);
  };
  const DemoVideoModal = React.memo(() => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-xl w-full">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Demo Video</h3>
        <div className="relative w-full pb-[56.25%] mb-4"> {/* 16:9 aspect ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/oafyFIOqtsw?autoplay=1&controls=0&modestbranding=1&rel=0"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          onClick={handleCloseModal}
        >
          Đóng
        </button>
      </div>
    </div>
  ));
  const TrialBookingModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Đặt Lịch Học Thử Miễn Phí</h3>
        <div className="flex items-center mb-4">
          <img src={selectedTeacher?.avatar} alt="" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h4 className="font-semibold text-lg">{selectedTeacher?.name}</h4>
            <p className="text-gray-600">{selectedTeacher?.nationality} • {selectedTeacher?.experience}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Họ và tên</label>
            <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Nhập họ tên của bạn" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Số điện thoại</label>
            <input type="tel" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Nhập số điện thoại" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Nhập email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Chọn khung giờ học thử</label>
            <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              {selectedTeacher?.availableSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mục tiêu học tập</label>
            <textarea className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-20" placeholder="Ví dụ: Cải thiện giao tiếp, luyện thi IELTS..." />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setShowModal(false)}
            className="flex-1 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Hủy
          </button>
          <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            Đặt Lịch Ngay
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 opacity-90"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">🎉 Học thử miễn phí - Không mất phí</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tiếng Anh 1-1<br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Thành Thạo Nhanh Chóng
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Kết nối với giáo viên bản ngữ hàng đầu. Lịch học linh hoạt. Kết quả đảm bảo sau 30 ngày đầu tiên.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                onClick={() => teacherSectionRef.current.scrollIntoView({ behavior: 'smooth' })}
              >
                Học Thử Miễn Phí Ngay
              </button>
              <button
                className="flex items-center text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                onClick={handleOpenModal}
              >
                <PlayCircle className="mr-2" size={20} />
                Xem Demo
              </button>
            </div>
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center">
                <Check className="mr-2 text-green-300" size={16} />
                Giáo viên bản ngữ
              </div>
              <div className="flex items-center">
                <Check className="mr-2 text-green-300" size={16} />
                Lịch học linh hoạt
              </div>
              <div className="flex items-center">
                <Check className="mr-2 text-green-300" size={16} />
                Đảm bảo kết quả
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">2,500+</div>
              <div className="text-gray-600">Học viên thành công</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-gray-600">Giáo viên bản ngữ</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-gray-600">Tỷ lệ hài lòng</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">4.9/5</div>
              <div className="text-gray-600">Đánh giá trung bình</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Tại Sao Chọn Chúng Tôi?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Phương pháp học hiện đại kết hợp công nghệ và chuyên môn của giáo viên bản ngữ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Giáo Viên Bản Ngữ Chuyên Nghiệp</h3>
              <p className="text-gray-600 mb-4">
                100% giáo viên từ Mỹ, Anh, Canada với chứng chỉ TESOL/TEFL và kinh nghiệm giảng dạy tối thiểu 3 năm.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 text-green-500" size={16} />
                  Chứng chỉ TESOL/TEFL
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 text-green-500" size={16} />
                  Kinh nghiệm 3+ năm
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 text-green-500" size={16} />
                  Phương pháp cá nhân hóa
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Lịch Học Siêu Linh Hoạt</h3>
              <p className="text-gray-600 mb-4">
                Đặt lịch học theo thời gian rảnh rỗi của bạn, có thể thay đổi hoặc hủy trước 2 tiếng mà không mất phí.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 text-green-500" size={16} />
                  24/7 đặt lịch online
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 text-green-500" size={16} />
                  Thay đổi miễn phí
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 text-green-500" size={16} />
                  Múi giờ toàn cầu
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="text-pink-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Công Nghệ Học Tập Hiện Đại</h3>
              <p className="text-gray-600 mb-4">
                Platform học tập tích hợp AI, video call HD, bảng tương tác và theo dõi tiến độ thời gian thực.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 text-green-500" size={16} />
                  Video call HD
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 text-green-500" size={16} />
                  Bảng tương tác
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 text-green-500" size={16} />
                  AI đánh giá tiến độ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section ref={teacherSectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Giáo Viên Nổi Bật</h2>
            <p className="text-xl text-gray-600">
              Chọn giáo viên phù hợp với mục tiêu và phong cách học của bạn
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="bg-white border rounded-2xl p-6 hover:shadow-xl transition-shadow group">
                <div className="text-center mb-6">
                  <img src={teacher.avatar} alt={teacher.name} className="w-24 h-24 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                  <p className="text-gray-600">{teacher.nationality} • {teacher.experience}</p>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="ml-1 font-semibold">{teacher.rating}</span>
                    <span className="ml-1 text-gray-500 text-sm">({teacher.reviews} đánh giá)</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((specialty, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-green-600">{teacher.price}đ</span>
                    <span className="text-gray-500">/buổi</span>
                  </div>
                </div>
                <button
                  onClick={() => handleBookTrial(teacher)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Học Thử Miễn Phí
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Học Viên Nói Gì?</h2>
            <p className="text-xl text-white/80">
              Hơn 2,500 học viên đã thành công với chúng tôi
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <blockquote className="text-xl mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="mb-2">
                <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-white/80">{testimonials[currentTestimonial].role}</div>
              </div>
              <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Kết quả: {testimonials[currentTestimonial].improvement}
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn Sàng Bắt Đầu Hành Trình Tiếng Anh?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để nhận buổi học thử miễn phí cùng giáo viên bản ngữ chuyên nghiệp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Học Thử Miễn Phí Ngay
              <ArrowRight className="ml-2 inline" size={20} />
            </button>
            <button className="flex items-center text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
              <MessageCircle className="mr-2" size={20} />
              Tư Vấn Miễn Phí
            </button>
          </div>
          <div className="mt-8 text-white/80 text-sm">
            ⭐ Cam kết hoàn tiền 100% nếu không hài lòng trong 7 ngày đầu
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && <TrialBookingModal />}
      {showDemoModal && <DemoVideoModal />}
    </div>
  );
};

export default EnglishLearningPlatform;