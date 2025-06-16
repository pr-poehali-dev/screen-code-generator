import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Что такое автоспорт?",
      answer:
        "Автоспорт — это соревновательная деятельность, связанная с использованием автомобилей. Включает различные дисциплины: кольцевые гонки, ралли, дрэг-рейсинг и многое другое.",
    },
    {
      question: "Как стать гонщиком?",
      answer:
        "Путь в автоспорт начинается с получения лицензии, прохождения обучения в автошколах спорта, участия в любительских соревнованиях и постепенного продвижения по карьерной лестнице.",
    },
    {
      question: "Какие существуют виды автоспорта?",
      answer:
        "Основные виды: Формула-1, NASCAR, WRC (ралли), дрифтинг, автокросс, картинг, GT серии и многие другие. Каждый вид имеет свои особенности и требования.",
    },
    {
      question: "Сколько стоит участие в автоспорте?",
      answer:
        "Стоимость варьируется от нескольких тысяч до миллионов долларов в зависимости от серии. Начинающие могут стартовать с картинга или любительских соревнований.",
    },
    {
      question: "Какие технологии используются?",
      answer:
        "Современный автоспорт использует передовые технологии: телеметрию, композитные материалы, гибридные силовые установки, активную аэродинамику и системы безопасности.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на популярные вопросы об автоспорте
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
