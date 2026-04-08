import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Organization Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            HUMRISE
          </h2>

          <p className="mt-4 text-gray-400">
            Humrise Welfare Foundation works to uplift communities through
            healthcare, education, plantation drives and social welfare programs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/campaigns">Campaigns</Link>
            </li>

            <li>
              <Link href="/gallery">Gallery</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>

          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Get Involved
          </h3>

          <ul className="space-y-2">

            <li>
              <Link href="/donate">Donate</Link>
            </li>

            <li>
              <Link href="/volunteer">Volunteer</Link>
            </li>

            <li>
              <Link href="/campaigns">Support Campaigns</Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <p>Email: info@humrise.org</p>
          <p className="mt-2">Phone: +91 98765 43210</p>
          <p className="mt-2">India</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">

        © {new Date().getFullYear()} Humrise Welfare Foundation. All rights reserved.

      </div>

    </footer>
  );
}