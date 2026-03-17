"use client"

import { Menu, Bell } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#019df4] text-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo Movistar */}
        <div className="flex items-center gap-3">
          <svg 
            viewBox="0 0 100 100" 
            className="w-10 h-10"
            fill="currentColor"
          >
            <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 80c-19.3 0-35-15.7-35-35s15.7-35 35-35 35 15.7 35 35-15.7 35-35 35z"/>
            <path d="M50 25c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 40c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z"/>
          </svg>
          
          {/* App Button */}
          <button className="bg-[#0b2739] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            App Mi Movistar
          </button>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-[#0b2739] px-4 py-4 space-y-3">
          <a href="#" className="block text-white hover:text-[#019df4] transition-colors">Inicio</a>
          <a href="#" className="block text-white hover:text-[#019df4] transition-colors">Móvil</a>
          <a href="#" className="block text-white hover:text-[#019df4] transition-colors">Hogar</a>
          <a href="#" className="block text-white hover:text-[#019df4] transition-colors">Tienda Online</a>
          <a href="#" className="block text-white hover:text-[#019df4] transition-colors">Ayuda</a>
        </nav>
      )}
    </header>
  )
}
