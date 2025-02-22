"use client"
import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-950  text-white">
      <div className="container mx-auto px-4  xxl:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="tex-xl lg:text-4xl font-semibold mb-4">{process.env.NEXT_PUBLIC_VENDOR_NAME}</h3>
            <p className="text-gray-300">
              We are dedicated to providing the best service to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">123 Main St, City, Country</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@company.com</p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_VENDOR_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer