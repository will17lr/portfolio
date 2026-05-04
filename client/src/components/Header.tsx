import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const previewImage = `${import.meta.env.BASE_URL}images/preview-messenger.png`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Retour en haut de page"
            className="group/logo relative w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            <span className="text-white font-bold text-sm">W</span>

            <div className="pointer-events-none absolute left-0 top-12 hidden w-64 translate-y-2 overflow-hidden rounded-lg border border-gray-200 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover/logo:translate-y-0 group-hover/logo:opacity-100 group-focus-visible/logo:translate-y-0 group-focus-visible/logo:opacity-100 md:block">
            <img
              src={previewImage}
              alt="Aperçu du portfolio de Wilfried Vogler"
              className="w-full bg-gray-50"
            />
            <div className="border-t border-gray-100 p-3">
              <p className="text-sm font-semibold text-gray-900">Portfolio Wilfried Vogler</p>
              <p className="text-xs text-gray-600">Développeur Web Junior</p>
            </div>
          </div>
          </button>
          <span className="font-bold text-gray-900">Will</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollToSection('skills')}
            className="rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            Compétences
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            Projets
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection('skills')}
              className="flex w-full items-center rounded-lg border border-gray-200 px-4 py-3 text-left font-medium text-gray-700 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-700"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex w-full items-center rounded-lg border border-gray-200 px-4 py-3 text-left font-medium text-gray-700 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-700"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex w-full items-center rounded-lg border border-blue-700 bg-blue-700 px-4 py-3 text-left font-semibold text-white transition-all duration-200 hover:bg-blue-800 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
