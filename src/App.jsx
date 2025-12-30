import React, { useState } from 'react';

export default function WindowsInstallWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const whatsappNumber = "62895621365826"; 
  
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo, saya ${formData.name}%0A%0AEmail: ${formData.email}%0ANo. HP: ${formData.phone}%0A%0APesan: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo, saya tertarik dengan jasa install ulang Windows`, '_blank');
  };

  const services = [
    {
      title: "Install Windows 10/11",
      description: "Instalasi fresh Windows dengan driver lengkap dan update terbaru",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
    },
    {
      title: "Backup & Recovery",
      description: "Backup data penting sebelum instalasi dan recovery data hilang",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
    },
    {
      title: "Optimasi Performa",
      description: "Setting optimal untuk performa maksimal PC/Laptop Anda",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        .custom-shadow {
          box-shadow: 8px 8px 0px rgba(59, 130, 246, 0.3);
        }
        
        .skew-card {
          transform: skewY(-2deg);
          transition: all 0.3s ease;
        }
        
        .skew-card:hover {
          transform: skewY(0deg) scale(1.02);
        }
        
        .zigzag-border {
          position: relative;
        }
        
        .zigzag-border::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 10px;
          background: linear-gradient(135deg, #1e293b 25%, transparent 25%),
                      linear-gradient(225deg, #1e293b 25%, transparent 25%);
          background-size: 20px 20px;
          background-position: 0 0, 10px 0;
        }
        
        .glitch {
          position: relative;
        }
        
        .glitch::before {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          text-shadow: -2px 0 #3b82f6;
          top: 0;
          color: white;
          overflow: hidden;
          animation: glitch-1 2s infinite linear alternate-reverse;
        }
        
        @keyframes glitch-1 {
          0% {
            clip: rect(42px, 9999px, 44px, 0);
          }
          5% {
            clip: rect(12px, 9999px, 59px, 0);
          }
          10% {
            clip: rect(48px, 9999px, 29px, 0);
          }
          100% {
            clip: rect(18px, 9999px, 83px, 0);
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center transform rotate-45">
                <span className="text-2xl font-bold transform -rotate-45">A</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                ADIL <span className="text-blue-500">INUL</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" className="hover:text-blue-500 transition tracking-wide uppercase text-sm font-medium">Beranda</a>
              <a href="#services" className="hover:text-blue-500 transition tracking-wide uppercase text-sm font-medium">Layanan</a>
              <a href="#about" className="hover:text-blue-500 transition tracking-wide uppercase text-sm font-medium">Tentang</a>
              <a href="#contact" className="hover:text-blue-500 transition tracking-wide uppercase text-sm font-medium">Kontak</a>
            </div>

            <button 
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t-2 border-blue-600">
            <div className="px-6 py-6 space-y-4">
              <a href="#home" className="block hover:text-blue-500 transition uppercase text-sm font-medium">Beranda</a>
              <a href="#services" className="block hover:text-blue-500 transition uppercase text-sm font-medium">Layanan</a>
              <a href="#about" className="block hover:text-blue-500 transition uppercase text-sm font-medium">Tentang</a>
              <a href="#contact" className="block hover:text-blue-500 transition uppercase text-sm font-medium">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-600/20 border-2 border-blue-600 transform -skew-x-12">
                <span className="block transform skew-x-12 text-sm font-bold tracking-wider uppercase">Jasa Profesional</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                INSTALL ULANG
                <span className="block mt-2 text-blue-500 glitch" data-text="WINDOWS">WINDOWS</span>
                <span className="block text-4xl lg:text-5xl mt-4 text-gray-400">CEPAT & TERPERCAYA</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Solusi terbaik untuk masalah Windows Anda. Kami siap membantu instalasi, backup data, dan optimasi performa dengan hasil yang memuaskan.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="group relative px-8 py-4 bg-blue-600 font-bold text-lg uppercase tracking-wider overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    CHAT SEKARANG
                  </span>
                  <div className="absolute inset-0 bg-cyan-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
                
                <a 
                  href="#services"
                  className="px-8 py-4 border-4 border-white font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                >
                  LIHAT LAYANAN
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 border-4 border-blue-600 transform translate-x-6 translate-y-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=800&q=80"
                  alt="Windows Installation"
                  className="relative w-full custom-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-12 bg-gray-900/50 zigzag-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-600 transform -skew-x-12">
              <span className="block transform skew-x-12 text-sm font-bold tracking-widest uppercase">LAYANAN KAMI</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              APA YANG KAMI<br />
              <span className="text-blue-500">TAWARKAN?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-gray-800 overflow-hidden border-4 border-gray-700 hover:border-blue-600 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600 transform translate-x-10 -translate-y-10 rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
                
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/50 to-transparent"></div>
                </div>
                
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight uppercase">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  
                  <button 
                    onClick={handleWhatsAppClick}
                    className="group/btn inline-flex items-center gap-2 text-blue-500 font-bold uppercase text-sm tracking-wider pt-2"
                  >
                    <span>PESAN LAYANAN</span>
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <img 
                      src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
                      alt="Professional"
                      className="w-full h-64 object-cover custom-shadow"
                    />
                    <div className="bg-blue-600 p-8">
                      <div className="text-5xl font-bold mb-2">1+</div>
                      <div className="text-sm uppercase tracking-wider">Tahun Pengalaman</div>
                    </div>
                  </div>
                  <div className="pt-12 space-y-6">
                    <div className="bg-gray-800 p-8 border-4 border-gray-700">
                      <div className="text-5xl font-bold mb-2 text-blue-500">5+</div>
                      <div className="text-sm uppercase tracking-wider">Klien Puas</div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                      alt="Service"
                      className="w-full h-64 object-cover custom-shadow"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-block px-6 py-2 bg-blue-600 transform -skew-x-12 mb-4">
                <span className="block transform skew-x-12 text-sm font-bold tracking-widest uppercase">TENTANG KAMI</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                KENAPA HARUS<br />
                <span className="text-blue-500">PILIH KAMI?</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Kami adalah tim profesional yang berdedikasi memberikan layanan terbaik untuk kebutuhan instalasi dan perbaikan Windows Anda. Dengan pengalaman bertahun-tahun, kami memahami setiap detail teknis untuk memberikan hasil yang sempurna.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-blue-600 flex-shrink-0 flex items-center justify-center text-2xl font-bold">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">PROFESIONAL & BERPENGALAMAN</h3>
                    <p className="text-gray-400">Tim teknisi bersertifikat dengan pengalaman menangani berbagai kasus instalasi Windows</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-blue-600 flex-shrink-0 flex items-center justify-center text-2xl font-bold">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">GARANSI KEPUASAN 100%</h3>
                    <p className="text-gray-400">Kami memberikan garansi untuk setiap layanan yang kami berikan kepada Anda</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-blue-600 flex-shrink-0 flex items-center justify-center text-2xl font-bold">03</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">HARGA KOMPETITIF</h3>
                    <p className="text-gray-400">Dapatkan layanan berkualitas premium dengan harga yang terjangkau dan transparan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-blue-600 transform -skew-x-12 mb-6">
              <span className="block transform skew-x-12 text-sm font-bold tracking-widest uppercase">HUBUNGI KAMI</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              SIAP MEMBANTU<br />
              <span className="text-blue-500">ANDA SEKARANG</span>
            </h2>
            <p className="text-xl text-gray-300">
              Isi form di bawah dan kami akan menghubungi Anda melalui WhatsApp
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-3">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-800 border-2 border-gray-700 focus:border-blue-600 outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-800 border-2 border-gray-700 focus:border-blue-600 outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-3">Nomor WhatsApp</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-gray-800 border-2 border-gray-700 focus:border-blue-600 outline-none transition-colors text-white placeholder-gray-500"
                placeholder="081234567890"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-3">Pesan / Kebutuhan</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-gray-800 border-2 border-gray-700 focus:border-blue-600 outline-none transition-colors text-white placeholder-gray-500 resize-none"
                placeholder="Ceritakan masalah atau kebutuhan Anda..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="group relative w-full md:w-auto px-12 py-5 bg-blue-600 font-bold text-lg uppercase tracking-wider overflow-hidden border-4 border-blue-600 hover:bg-transparent transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                KIRIM PESAN VIA WHATSAPP
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}