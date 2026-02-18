import { Phone, MapPin, Clock, Star, ChevronRight, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-display font-bold text-gold">Colibri cafe</span>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#servicios" className="hover:text-gold transition">Servicios</a>
            <a href="#nosotros" className="hover:text-gold transition">Nosotros</a>
            <a href="#contacto" className="hover:text-gold transition">Contacto</a>
          </div>
          <a
            href="https://wa.me/573001234567"
            className="bg-gold text-dark px-6 py-2 font-semibold hover:bg-gold/90 transition flex items-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-dark" />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">restaurant</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white leading-tight">
            Experiencia Gastronómica de Lujo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Sabores excepcionales en un ambiente inolvidable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573001234567"
              className="px-10 py-4 bg-gold text-dark font-semibold hover:bg-gold/90 transition text-lg flex items-center justify-center gap-2"
            >
              Reservar Mesa
              <ChevronRight size={20} />
            </a>
            <a
              href="#servicios"
              className="px-10 py-4 border-2 border-gold text-gold hover:bg-gold/10 transition text-lg"
            >
              Ver Menú
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-4 bg-darker">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold uppercase tracking-[0.3em] text-sm text-center mb-4">Servicios</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Experiencias Exclusivas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-dark border border-gray-800 hover:border-gold transition group">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition">
                <Star className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">Menú Degustación</h3>
              <p className="text-gray-400 leading-relaxed">
                Experiencia culinaria de 7 tiempos con maridaje de vinos seleccionados
              </p>
            </div>
            <div className="p-8 bg-dark border border-gray-800 hover:border-gold transition group">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition">
                <Star className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">Chef Privado</h3>
              <p className="text-gray-400 leading-relaxed">
                Servicio exclusivo de chef en mesa con preparación en vivo
              </p>
            </div>
            <div className="p-8 bg-dark border border-gray-800 hover:border-gold transition group">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition">
                <Star className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">Eventos Privados</h3>
              <p className="text-gray-400 leading-relaxed">
                Espacios exclusivos para celebraciones íntimas y corporativas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Nosotros</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Compromiso con la Excelencia
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              En Colibri cafe, cada detalle está diseñado para superar sus expectativas.
              Nuestro equipo de profesionales dedicados trabaja incansablemente para
              crear experiencias memorables que perduran en el tiempo.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Con años de experiencia en el sector restaurant, hemos perfeccionado
              el arte de la hospitalidad de lujo, combinando tradición con innovación
              para ofrecer un servicio incomparable.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-4xl font-display font-bold text-gold">5+</p>
                <p className="text-sm text-gray-400">Años</p>
              </div>
              <div className="w-px h-12 bg-gray-800" />
              <div className="text-center">
                <p className="text-4xl font-display font-bold text-gold">1000+</p>
                <p className="text-sm text-gray-400">Clientes</p>
              </div>
              <div className="w-px h-12 bg-gray-800" />
              <div className="text-center">
                <p className="text-4xl font-display font-bold text-gold">4.9</p>
                <p className="text-sm text-gray-400">Rating</p>
              </div>
            </div>
          </div>
          <div className="bg-darker border border-gray-800 h-96 flex items-center justify-center">
            <p className="text-gray-600">Imagen del establecimiento</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
            ¿Listo para una experiencia única?
          </h2>
          <p className="text-dark/80 text-lg mb-10 max-w-2xl mx-auto">
            Contáctenos hoy y permítanos crear un momento inolvidable para usted.
          </p>
          <a
            href="https://wa.me/573001234567"
            className="inline-flex items-center gap-3 px-10 py-4 bg-dark text-white font-semibold hover:bg-darker transition text-lg"
          >
            <MessageCircle size={24} />
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-4 bg-darker">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold uppercase tracking-[0.3em] text-sm text-center mb-4">Contacto</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Encuéntrenos
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-gold" size={28} />
              </div>
              <h3 className="font-display font-semibold mb-2">Ubicación</h3>
              <p className="text-gray-400">Cartagena, Colombia</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="text-gold" size={28} />
              </div>
              <h3 className="font-display font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-400">+57 300 123 4567</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="text-gold" size={28} />
              </div>
              <h3 className="font-display font-semibold mb-2">Horario</h3>
              <p className="text-gray-400">Lun - Dom: 9AM - 10PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-2xl font-display font-bold text-gold">Colibri cafe</span>
              <p className="text-gray-500 text-sm mt-2">© 2024 Todos los derechos reservados.</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold transition">Privacidad</a>
              <a href="#" className="hover:text-gold transition">Términos</a>
              <a href="#" className="hover:text-gold transition">Instagram</a>
            </div>
          </div>
          <p className="text-center text-gray-600 text-xs mt-8">
            Powered by MachineMind Genesis Engine
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/573001234567"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 flex items-center justify-center hover:bg-green-600 transition shadow-lg z-50"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} className="text-white" />
      </a>
    </main>
  );
}
