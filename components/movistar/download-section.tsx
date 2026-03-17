import Image from "next/image"

export function DownloadSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#e5f5fd] to-[#c5e8f7] overflow-hidden">
      {/* Decorative wave pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,100 Q100,50 200,100 T400,100 L400,300 L0,300 Z" fill="#019df4" opacity="0.2"/>
          <path d="M0,150 Q100,100 200,150 T400,150 L400,300 L0,300 Z" fill="#019df4" opacity="0.15"/>
        </svg>
      </div>
      
      <div className="relative z-10 px-4 py-8 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-[#0b2739] text-lg mb-4">
            Y tú, ¿ya la descargaste?
          </p>
          <button className="bg-[#e63780] hover:bg-[#d42e70] text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg">
            Descárgala aquí
          </button>
        </div>
        
        {/* Person with phone image */}
        <div className="relative w-56 h-56 md:w-72 md:h-72">
          <Image
            src="/images/person-phone.jpg"
            alt="Persona usando la App Mi Movistar"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  )
}
