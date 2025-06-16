import Icon from "@/components/ui/icon";

const CarsSection = () => {
  const cars = [
    {
      title: "Суперкары",
      description: "Легендарные машины с невероятной мощностью и дизайном",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["1000+ л.с.", "0-100 за 2.5с", "Карбоновый кузов"],
    },
    {
      title: "Гоночные болиды",
      description: "Профессиональная техника для спортивных соревнований",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Аэродинамика", "Безопасность", "Скорость 350+ км/ч"],
    },
    {
      title: "Электромобили",
      description: "Будущее автоиндустрии уже здесь",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Экологичность", "Бесшумность", "Мгновенный крутящий момент"],
    },
  ];

  return (
    <section id="cars" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Автомобили
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            От суперкаров до гоночных болидов — исследуйте мир
            высокопроизводительных машин
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {car.title}
                </h3>
                <p className="text-muted-foreground mb-4">{car.description}</p>

                <div className="space-y-2">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-primary"
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
