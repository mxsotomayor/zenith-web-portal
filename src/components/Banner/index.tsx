'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface MarketingBannerProps {
  title: string
  subtitle: string
  backgroundImage?: string;
  
  cta?: string 
  ctaUrl?: string;
}

const Banner: React.FC<MarketingBannerProps> = ({
  title,
  subtitle,
  cta, 
  ctaUrl, 
  backgroundImage = '/GettyImages-1326458117-e72cd6f16ae44bedbd7f3ca90ffb2053.jpg?height=400&width=1200',
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10" />

      {/* Content */}
      <div className="relative z-20  py-24 md:py-32 container mx-auto px-4  xxl:px-0">
        <div  className='w-full lg:max-w-4xl' >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl lg:text-7xl font-semibold text-white tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl  text-xl md:text-2xl text-gray-200"
          >
            {subtitle}
          </motion.p>
          {
            cta  && (
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Link href={ctaUrl ?? ""}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition duration-150 ease-in-out"
            >
              {cta}
            </Link>
          </motion.div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Banner