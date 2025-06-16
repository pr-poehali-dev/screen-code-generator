import Icon from "@/components/ui/icon";

const MotorsportSection = () => {
  const stats = [
    { label: "Гонщиков", value: "500+", icon: "Users" },
    { label: "Соревнований", value: "50+", icon: "Trophy" },
    { label: "Стран", value: "25+", icon: "Globe" },
    { label: "Лет опыта", value: "30+", icon: "Calendar" },
  ];

  return (
    <section id="motorsport" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Мир <span className="text-blue-600">Автоспорта</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Автоспорт — это не просто гонки. Это симфония технологий,
              мастерства и адреналина. От Формулы-1 до ралли, каждая дисциплина
              требует уникальных навыков и техники.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icon
                      name={stat.icon as any}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Автоспорт"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <Icon name="Zap" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotorsportSection;
