"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, ChevronRight } from "lucide-react";
import FooterProps from "./types";
import Image from "next/image";

const Footer = ({ slogan, logoUrl, blocks }: FooterProps) => {
  return (
    <footer data-name="Footer" className="bg-blue-950  text-white">
      <div className="container mx-auto px-4  2xl:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src={logoUrl}
              width="240"
              height="50"
              alt=""
              className="w-52"
            />
            <p className="text-gray-300">{slogan}</p>
          </div>

          {blocks.map((block, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{block.title}</h3>
              <ul className="space-y-2">
                {block.items.map((item, index) => (
                  <li key={index} className="flex gap-1 items-center">
                    <ChevronRight size="16" />
                    <Link
                      href={item.href}
                      className="hover:text-gray-300 transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

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
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col space-y-2"
            >
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
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            {process.env.NEXT_PUBLIC_VENDOR_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
