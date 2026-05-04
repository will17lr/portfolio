import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const previewImage = `${import.meta.env.BASE_URL}images/preview-messenger.png`;
  const logoImage = `${import.meta.env.BASE_URL}images/logo.png`;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (logoRef.current && !logoRef.current.contains(event.target as Node)) {
        setIsPreviewOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setIsPreviewOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setIsPreviewOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container flex items-center justify-between h-16">
        <div ref={logoRef} className="group/logo relative flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPreviewOpen((current) => !current)}
            aria-expanded={isPreviewOpen}
            aria-label="Afficher la carte de visite"
            className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gray-950 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            <img
              src={logoImage}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </button>
          <button
            type="button"
            onClick={scrollToTop}
            className="font-bold text-gray-900 transition-colors hover:text-blue-700 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            Will
          </button>

          <div
            className={`absolute left-0 top-12 z-50 w-[min(calc(100vw-2rem),20rem)] translate-y-2 overflow-hidden rounded-lg border border-gray-200 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover/logo:translate-y-0 group-hover/logo:opacity-100 group-focus-within/logo:translate-y-0 group-focus-within/logo:opacity-100 ${
              isPreviewOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none'
            }`}
          >
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
            onClick={() => scrollToSection('parcours')}
            className="rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            Parcours
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
              onClick={() => scrollToSection('parcours')}
              className="flex w-full items-center rounded-lg border border-gray-200 px-4 py-3 text-left font-medium text-gray-700 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-700"
            >
              Parcours
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
