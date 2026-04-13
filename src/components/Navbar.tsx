"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          <Image
            src="/logos/logo.png"
            alt="Humrise Welfare Foundation"
            width={160}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/campaigns">Campaigns</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/volunteer">Volunteer</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/donate"
            className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
          >
            Donate
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-green-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FiMenu />
        </button>

      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Slide Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b">

          <span className="text-xl font-bold text-green-700">
            HUMRISE
          </span>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl text-green-700"
          >
            <FiX />
          </button>

        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-5 p-6 text-gray-700 font-medium">

          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/campaigns" onClick={() => setMobileMenuOpen(false)}>Campaigns</Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link href="/volunteer" onClick={() => setMobileMenuOpen(false)}>Volunteer</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-green-700 text-white px-5 py-2 rounded-lg text-center"
          >
            Donate
          </Link>

        </div>

      </div>

    </nav>
  );
}