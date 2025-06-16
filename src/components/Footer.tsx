import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Zap" size={24} className="text-primary" />
              <span className="text-xl font-bold text-foreground">
                AutoSport
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Ваш путеводитель в мир автоспорта и высокопроизводительных
              автомобилей.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                size={20}
                className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
              />
              <Icon
                name="Twitter"
                size={20}
                className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
              />
              <Icon
                name="Instagram"
                size={20}
                className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
              />
              <Icon
                name="Youtube"
                size={20}
                className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#cars"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Автомобили
                </a>
              </li>
              <li>
                <a
                  href="#motorsport"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Автоспорт
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Услуги
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Обучение
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Консультации
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Техподдержка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Запчасти
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Контакты
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="text-muted-foreground">
                  +7 (495) 123-45-67
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="text-muted-foreground">info@autosport.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-muted-foreground">Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 AutoSport. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
