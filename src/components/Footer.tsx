import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Zap" size={24} className="text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AutoSport</span>
            </div>
            <p className="text-gray-600 mb-4">
              Ваш путеводитель в мир автоспорта и высокопроизводительных
              автомобилей.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                size={20}
                className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"
              />
              <Icon
                name="Twitter"
                size={20}
                className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"
              />
              <Icon
                name="Instagram"
                size={20}
                className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"
              />
              <Icon
                name="Youtube"
                size={20}
                className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#cars"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Автомобили
                </a>
              </li>
              <li>
                <a
                  href="#motorsport"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Автоспорт
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Обучение
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Консультации
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Техподдержка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Запчасти
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Контакты
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-blue-600" />
                <span className="text-gray-600">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-blue-600" />
                <span className="text-gray-600">info@autosport.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-blue-600" />
                <span className="text-gray-600">Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 AutoSport. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
