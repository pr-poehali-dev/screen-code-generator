import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
        }}
      ></div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Мир <span className="text-primary">Автоспорта</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
          Погрузитесь в захватывающий мир скорости, технологий и адреналина
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            <Icon name="Play" size={20} />
            Смотреть видео
          </button>
          <button className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
