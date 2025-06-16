import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={28} className="text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AutoSport</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#cars"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Автомобили
            </a>
            <a
              href="#motorsport"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Автоспорт
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          <button className="md:hidden text-gray-700">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
