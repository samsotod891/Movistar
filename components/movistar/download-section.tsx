import Image from "next/image"

export function DownloadSection() {
  return (
    <section className="bg-[#019df4]">
      {/* Desktop layout: row */}
      <div className="hidden md:flex items-center">
        {/* Text + CTA — Left side */}
        <div className="w-[45%] pl-12 lg:pl-20 py-16 text-left">
          <p className="text-white text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
            Y tú, ¿ya la<br />descargaste?
          </p>
          <a
            href="#"
            className="inline-block bg-[#e63780] hover:bg-[#d42e70] text-white font-bold px-10 py-3.5 rounded-full transition-colors shadow-lg text-lg"
          >
            Descárgala aquí
          </a>
        </div>

        {/* Woman image — Right side */}
        <div className="w-[55%] flex justify-end">
          <Image
            src="/images/banner-mobile.webp"
            alt="Descarga la App Mi Movistar"
            width={700}
            height={500}
            className="object-contain w-full h-auto max-h-[420px]"
            priority
          />
        </div>
      </div>

      {/* Mobile layout: column */}
      <div className="flex flex-col md:hidden">
        {/* Text + CTA — Top */}
        <div className="text-center px-8 pt-10 pb-4">
          <p className="text-white text-2xl font-extrabold mb-5 leading-tight">
            Y tú, ¿ya la descargaste?
          </p>
          <a
            href="#"
            className="inline-block bg-[#e63780] hover:bg-[#d42e70] text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg text-base"
          >
            Descárgala aquí
          </a>
        </div>

        {/* Woman image — Bottom, full width */}
        <div className="w-full">
          <Image
            src="/images/banner-mobile.webp"
            alt="Descarga la App Mi Movistar"
            width={500}
            height={400}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
