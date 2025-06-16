import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">
              AutoSport
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="#cars"
              className="text-foreground hover:text-primary transition-colors"
            >
              Автомобили
            </a>
            <a
              href="#motorsport"
              className="text-foreground hover:text-primary transition-colors"
            >
              Автоспорт
            </a>
            <a
              href="#faq"
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <button className="md:hidden text-foreground">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
