'use client';

import { useState, useEffect } from 'react';

interface IconProps {
  src: string;
  className?: string;
}

// Component for SVG Icons
const Icon = ({ src, className = 'w-6 h-6' }: IconProps) => (
  <img src={src} alt="" className={className} />
);

interface NavLinksProps {
  isMobile?: boolean;
}

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    benefits: string[];
}

interface ProjectCardProps {
    image: string;
    category: string;
    title: string;
    description: string;
}

// Main Page Component
export default function VseProStavbyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Vše pro stavby.cz | Komplexní řešení pro vaše stavby';

    const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#164a41" d="M88.5,41.2l-37-32.1c-1-0.9-2.7-0.9-3.7,0L11.5,41.2c-1.3,1.1-1.5,3.1-0.4,4.4s3.1,1.5,4.4,0.4L50,15.8l34.4,29.9c0.5,0.5,1.2,0.7,1.9,0.7c0.9,0,1.8-0.5,2.3-1.4C90,44.3,89.8,42.3,88.5,41.2z"/><path fill="#4d774e" d="M81.2,49.2L75,43.7V25.3c0-1.7-1.4-3-3-3s-3,1.4-3,3v15.6l-19-16.5c-1-0.9-2.7-0.9-3.7,0l-19,16.5V25.3c0-1.7-1.4-3-3-3s-3,1.4-3,3v18.4l-6.2,5.4c-1.2,1-1.4,2.8-0.4,4s2.8,1.4,4,0.4l3,2.6V80c0,1.7,1.4,3,3,3h54c1.7,0,3-1.4,3-3V56.2l3-2.6c0.5,0.4,1.1,0.6,1.7,0.6c0.9,0,1.8-0.5,2.3-1.3C82.6,52,82.4,50.2,81.2,49.2z M65,77H35c-1.7,0-3-1.4-3-3v-5c0-1.7,1.4-3,3-3h30c1.7,0,3,1.4,3,3v5C68,75.6,66.7,77,65,77z M68,58c0,1.7-1.4,3-3,3H35c-1.7,0-3-1.4-3-3V45c0-1.7,1.4-3,3-3h30c1.7,0,3,1.4,3,3V58z"/></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;
    
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      document.head.appendChild(link);
    }
    link.rel = 'icon';
    link.href = faviconUrl;

  }, []);

  const navLinks = [
    { href: '#sluzby', label: 'Služby' },
    { href: '#projekty', label: 'Projekty' },
    { href: '#proc-nas', label: 'O nás' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const RenderNavLinks = ({ isMobile = false }: NavLinksProps) => (
    <>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} 
           className={isMobile ? 'block text-2xl font-semibold text-gray-800 py-3 text-center hover:bg-green-100 rounded-lg' : 'text-base font-medium text-gray-700 hover:text-green-800 transition-colors duration-300'}
           onClick={() => isMenuOpen && setIsMenuOpen(false)}>
          {link.label}
        </a>
      ))}
    </>
  );

  const ServiceCard = ({ icon, title, description, benefits }: ServiceCardProps) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <Icon src={icon} className="w-6 h-6 text-green-800" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 text-sm text-gray-500">
          {benefits.map((benefit, index) => (
            <li key={index} className='flex items-start'>
                <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/check.svg" className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
            </li>
          ))}
        </ul>
    </div>
  );

  const ProjectCard = ({ image, category, title, description }: ProjectCardProps) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
      <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-green-700 uppercase mb-1">{category}</p>
        <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center space-x-2">
              <img src="/images/logo-vseprostavby.png" alt="Vše pro stavby.cz Logo" className="h-12 w-auto"/>
              <span className="text-xl font-bold text-gray-900 tracking-tight">Vše pro stavby<span className='text-green-700'>.cz</span></span>
            </a>
            <nav className="hidden lg:flex items-center space-x-8">
              <RenderNavLinks />
            </nav>
            <div className="hidden lg:block">
                <a href="#kontakt" className="inline-block bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors duration-300 shadow-sm">Poptat služby</a>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                <Icon src={isMenuOpen ? 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg' : 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg'} className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <RenderNavLinks isMobile={true} />
              <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="w-full text-center mt-4 inline-block bg-green-700 text-white font-semibold px-5 py-3 rounded-lg hover:bg-green-800 transition-colors duration-300 shadow-sm">Poptat služby</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-24 sm:py-32 lg:py-40">
            <div className="absolute inset-0">
                <img src="/images/project-jevany-new-construction-rear.jpg" alt="Moderní novostavba" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gray-900/60"></div>
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">Stavíme budoucnost. Renovujeme historii.</h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-200">Od základů po fasádu. Nabízíme komplexní stavební řešení s vlastní výrobou unikátních sanačních a tepelně izolačních omítek.</p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#sluzby" className="w-full sm:w-auto inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 text-lg shadow-lg">Naše služby</a>
                    <a href="#kontakt" className="w-full sm:w-auto inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg">Nezávazná konzultace</a>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-20 sm:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-base font-semibold text-green-700 uppercase tracking-wider">Naše specializace</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">Komplexní stavební služby</h2>
              <p className="mt-4 text-lg text-gray-600">Pokrýváme celý životní cyklus stavby – od prvotního zasíťování pozemku, přes realizaci novostaveb na klíč, až po precizní rekonstrukce a fasády.</p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard 
                    icon="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/shield-check.svg"
                    title="Fasády a sanační omítky"
                    description="Jako výrobci tepelně izolačních a sanačních omítek Thermosan nabízíme špičkové řešení proti vlhkosti a pro úsporu energie."
                    benefits={["Trvale suché zdivo", "Prevence plísní a řas", "Špičkové tepelně-izolační vlastnosti", "Dům, který dýchá"]}
                />
                <ServiceCard 
                    icon="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/home-cog.svg"
                    title="Rekonstrukce a novostavby"
                    description="Realizujeme kompletní rekonstrukce starších objektů i výstavbu moderních rodinných domů na klíč. Zkušenosti a kvalita v každém detailu."
                    benefits={["Rekonstrukce domů a bytů", "Výstavba na klíč", "Sanace vlhkého zdiva", "Modernizace interiéru i exteriéru"]}
                />
                 <ServiceCard 
                    icon="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/network.svg"
                    title="Inženýrské sítě a pozemky"
                    description="Zajišťujeme kompletní přípravu pozemků pro výstavbu, včetně budování inženýrských sítí a zpevněných ploch."
                    benefits={["Zasíťování pozemků", "Výstavba komunikací", "Zemní a terénní úpravy", "Tesařské a demoliční práce"]}
                />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projekty" className="py-20 sm:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-base font-semibold text-green-700 uppercase tracking-wider">Reference</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">Naše realizované projekty</h2>
              <p className="mt-4 text-lg text-gray-600">Prohlédněte si výběr z našich prací, které demonstrují kvalitu, preciznost a široký záběr našich služeb.</p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard 
                image="/images/project-tanvald-cottage-renovation-front-after.jpg"
                category="Rekonstrukce fasády"
                title="Omlazení chalupy, Tanvald"
                description="Kompletní oprava fasády s použitím naší sanační omítky, která vyřešila problémy s vlhkostí a dodala chalupě nový vzhled."
              />
              <ProjectCard 
                image="/images/project-jevany-new-construction-front-side.jpg"
                category="Novostavba"
                title="Moderní dům, Jevany"
                description="Realizace novostavby rodinného domu s důrazem na čistý design, funkčnost a kvalitní materiály, včetně naší fasádní omítky."
              />
              <ProjectCard 
                image="/images/project-plot-utility-team-laying-pipe.jpg"
                category="Inženýrské sítě"
                title="Zasíťování pozemku"
                description="Příprava parcely pro budoucí výstavbu, zahrnující výkopové práce a profesionální pokládku veškerých potřebných sítí."
              />
            </div>
          </div>
        </section>
        
        {/* Why Us Section */}
        <section id="proc-nas" className="py-20 sm:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div>
                    <p className="text-base font-semibold text-green-700 uppercase tracking-wider">Proč si vybrat nás</p>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">Zkušenosti, kvalita a vlastní výroba</h2>
                    <p className="mt-4 text-lg text-gray-600">S kořeny ve stavebnictví sahajícími do roku 2006 přinášíme ověřené postupy a moderní technologie. Naše největší výhoda? Vlastní výroba sanačních omítek, která nám dává plnou kontrolu nad kvalitou a výsledkem.</p>
                    <dl className="mt-10 space-y-8">
                        <div className="relative">
                            <dt>
                                <Icon src="https://heroicons.com/24/solid/shield-check.svg" className="absolute h-8 w-8 text-green-600"/>
                                <p className="ml-12 text-lg leading-6 font-bold text-gray-900">Unikátní produkt</p>
                            </dt>
                            <dd className="mt-2 ml-12 text-base text-gray-600">Vyrábíme tepelně izolační omítku Thermosan, která je lehčí, účinnější a trvanlivější než běžné sanační materiály.</dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <Icon src="https://heroicons.com/24/solid/briefcase.svg" className="absolute h-8 w-8 text-green-600"/>
                                <p className="ml-12 text-lg leading-6 font-bold text-gray-900">Komplexní služby</p>
                            </dt>
                            <dd className="mt-2 ml-12 text-base text-gray-600">Od zasíťování pozemků, přes hrubou stavbu až po finální fasády. Jeden partner pro celý váš projekt.</dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <Icon src="https://heroicons.com/24/solid/calendar-days.svg" className="absolute h-8 w-8 text-green-600"/>
                                <p className="ml-12 text-lg leading-6 font-bold text-gray-900">Ověřené zkušenosti</p>
                            </dt>
                            <dd className="mt-2 ml-12 text-base text-gray-600">Působíme v oboru od roku 2006. Zúročujeme léta praxe při realizaci novostaveb i náročných rekonstrukcí.</dd>
                        </div>
                    </dl>
                </div>
                <div className="mt-10 lg:mt-0 relative h-96">
                    <img className="w-full h-full object-cover rounded-xl shadow-xl" src="/images/project-large-house-facade-after.jpg" alt="Dokončená fasáda na velké budově" />
                </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="bg-green-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className='max-w-xl'>
                <h2 className="text-3xl sm:text-4xl font-extrabold">Máte projekt? Pojďme se o něm pobavit.</h2>
                <p className="mt-4 text-lg text-green-200">Ať už plánujete novostavbu, rekonstrukci nebo potřebujete vyřešit vlhkost ve zdivu, jsme tu pro vás. Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku.</p>
              </div>
              <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Kontaktní údaje</h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" className="w-6 h-6 mr-4 text-green-700 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Adresa a sídlo</h4>
                      <p className='text-gray-600'>Vše pro stavby.cz s.r.o.<br/>Otovická 623/4, 193 00 Praha 9<br/>IČ: 04857291</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" className="w-6 h-6 mr-4 text-green-700 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Telefon</h4>
                      <a href="tel:+420777205708" className="text-gray-600 hover:text-green-700 transition-colors">+420 777 205 708</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" className="w-6 h-6 mr-4 text-green-700 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">E-mail</h4>
                      <a href="mailto:info@vseprostavby.cz" className="text-gray-600 hover:text-green-700 transition-colors">info@vseprostavby.cz</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Vše pro stavby.cz s.r.o. Všechna práva vyhrazena.</p>
            <p className="mt-4 text-sm">
                Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-300 hover:text-white transition-colors">DigitalFusion</a>
            </p>
        </div>
      </footer>
    </div>
  );
}