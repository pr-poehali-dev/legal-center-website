import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: "Scale",
      title: "Корпоративное право",
      description: "Комплексное юридическое сопровождение бизнеса, сделки M&A, корпоративные споры",
      price: "от 50 000 ₽"
    },
    {
      icon: "Building",
      title: "Недвижимость",
      description: "Сопровождение сделок с недвижимостью, земельное право, строительство",
      price: "от 35 000 ₽"
    },
    {
      icon: "FileText",
      title: "Договорное право",
      description: "Разработка и экспертиза договоров, взыскание задолженности",
      price: "от 25 000 ₽"
    },
    {
      icon: "ShieldCheck",
      title: "Налоговое право",
      description: "Налоговое планирование, споры с налоговыми органами, оптимизация",
      price: "от 40 000 ₽"
    },
    {
      icon: "Users",
      title: "Трудовое право",
      description: "Защита интересов работодателей и работников, кадровый аудит",
      price: "от 20 000 ₽"
    },
    {
      icon: "Briefcase",
      title: "Арбитражные споры",
      description: "Представительство в арбитражных судах всех инстанций",
      price: "от 60 000 ₽"
    }
  ];

  const advantages = [
    {
      number: "15+",
      title: "лет опыта",
      description: "Успешная практика в сфере корпоративного права"
    },
    {
      number: "500+",
      title: "выигранных дел",
      description: "Высокий процент положительных решений суда"
    },
    {
      number: "24/7",
      title: "поддержка",
      description: "Круглосуточная правовая поддержка клиентов"
    },
    {
      number: "98%",
      title: "довольных клиентов",
      description: "Безупречная репутация и доверие партнеров"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', consultationForm);
    setConsultationForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="/img/8f92a689-774f-4470-90ae-d5b49969948f.jpg" alt="Legal Center" className="w-8 h-8 object-cover rounded" />
              <span className="text-xl font-bold text-primary">Правовой Лидер</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О центре</a>
              <a href="#lawyers" className="text-foreground hover:text-primary transition-colors">Юристы</a>
              <a href="#cases" className="text-foreground hover:text-primary transition-colors">Кейсы</a>
              <a href="#articles" className="text-foreground hover:text-primary transition-colors">Статьи</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <Button className="bg-gradient-navy-gold text-white hover:opacity-90">
                Консультация
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">О центре</a>
                <a href="#lawyers" className="text-foreground hover:text-primary transition-colors">Юристы</a>
                <a href="#cases" className="text-foreground hover:text-primary transition-colors">Кейсы</a>
                <a href="#articles" className="text-foreground hover:text-primary transition-colors">Статьи</a>
                <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
                <Button className="bg-gradient-navy-gold text-white hover:opacity-90 w-full">
                  Консультация
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 business-bg-pattern text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  Премиальные юридические услуги
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Ваш надежный
                  <span className="block text-gradient">правовой партнер</span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  Профессиональная защита интересов бизнеса и частных лиц. 
                  Комплексные юридические решения от ведущих экспертов отрасли.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                >+7 (938) 555-87-47</Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{advantage.number}</div>
                    <div className="text-sm text-white/70 font-medium">{advantage.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="/img/0796776a-1c71-4231-9cee-bfc4e948d896.jpg" 
                alt="Legal consultation" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30 section-with-pattern">
        <div className="legal-pattern-bg"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр юридических услуг для бизнеса и частных лиц
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <div className="text-lg font-semibold text-secondary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-with-pattern">
        <div className="legal-pattern-bg"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">О юридическом центре</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Правовой Лидер — это команда высококвалифицированных юристов 
                  с многолетним опытом работы в ведущих российских и международных 
                  юридических фирмах.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Персональный подход</h3>
                    <p className="text-muted-foreground">
                      Индивидуальные решения для каждого клиента с учетом специфики задач
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Shield" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Конфиденциальность</h3>
                    <p className="text-muted-foreground">
                      Строгое соблюдение адвокатской тайны и защита интересов клиентов
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Clock" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Оперативность</h3>
                    <p className="text-muted-foreground">
                      Быстрое реагирование на запросы и соблюдение всех сроков
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/10 border-0">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Бесплатная консультация</h3>
                  <p className="text-muted-foreground">
                    Получите профессиональную оценку вашей ситуации
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Ваше имя"
                      value={consultationForm.name}
                      onChange={(e) => setConsultationForm({...consultationForm, name: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={consultationForm.email}
                      onChange={(e) => setConsultationForm({...consultationForm, email: e.target.value})}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={consultationForm.phone}
                      onChange={(e) => setConsultationForm({...consultationForm, phone: e.target.value})}
                      required
                    />
                    <Textarea
                      placeholder="Опишите вашу ситуацию"
                      value={consultationForm.message}
                      onChange={(e) => setConsultationForm({...consultationForm, message: e.target.value})}
                      rows={4}
                    />
                    <Button type="submit" className="w-full bg-gradient-navy-gold text-white hover:opacity-90">
                      <Icon name="Send" className="mr-2" size={16} />
                      Получить консультацию
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/img/8f92a689-774f-4470-90ae-d5b49969948f.jpg" alt="Legal Center" className="w-8 h-8 object-cover rounded" />
                <span className="text-xl font-bold">Правовой Лидер</span>
              </div>
              <p className="text-white/70">
                Профессиональные юридические услуги для бизнеса и частных лиц
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Корпоративное право</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Недвижимость</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Арбитражные споры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Налоговое право</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (938) 555-87-47</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@legal-leader.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Тверская, 15</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">График работы</h3>
              <ul className="space-y-2 text-white/70">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб: 10:00 - 16:00</li>
                <li>Вс: по договоренности</li>
                <li className="text-secondary font-medium">Консультации 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p>&copy; 2024 Правовой Лидер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;