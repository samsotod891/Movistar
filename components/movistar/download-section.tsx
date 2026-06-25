import Image from "next/image"

export function DownloadSection() {
  return (
    <section className="relative bg-[#019df4] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
        {/* Text + CTA — Left side on desktop, top on mobile */}
        <div className="relative z-10 px-6 py-10 md:py-0 md:pl-10 lg:pl-16 md:w-1/2 text-center md:text-left">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
            Y tú, ¿ya la descargaste?
          </p>
          <a
            href="#"
            className="inline-block bg-[#e63780] hover:bg-[#d42e70] text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg text-base md:text-lg"
          >
            Descárgala aquí
          </a>
        </div>

        {/* Woman image — Right side on desktop, bottom on mobile */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/banner-mobile.webp"
            alt="Descarga la App Mi Movistar"
            width={600}
            height={500}
            className="object-contain w-full h-auto max-h-[400px] md:max-h-[500px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
