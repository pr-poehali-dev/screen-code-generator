import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Racing car"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/90"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 animate-fade-in">
          Мир <span className="text-blue-600">Автоспорта</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in font-medium">
          Погрузитесь в захватывающий мир скорости, технологий и адреналина
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
            <Icon name="Play" size={20} />
            Смотреть видео
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
