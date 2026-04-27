import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="font-bold text-gray-900">Will</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
          >
            Compétences
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
          >
            Projets
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
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
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('skills')}
              className="text-left text-gray-700 hover:text-blue-700 transition-colors font-medium"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-gray-700 hover:text-blue-700 transition-colors font-medium"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
