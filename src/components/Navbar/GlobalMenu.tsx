import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function GlobalMenu() {
    const products = [
        {
            name: 'Credit Cards',
            url: '/personal'
        },
        {
            name: 'Loans',
            url: '/business'
        },
        {
            name: 'Accounts',
            url: '/business'
        },
        {
            name: 'Investments',
            url: '/business'
        },
        {
            name: 'Insurance',
            url: '/business'
        },
        {
            name: 'Rewards',
            url: '/business'
        },
    ]
  return (
    <div className='fixed top-[100px] bottom-0 left-0 w-full h-screen bg-blue-900 z-50 flex flex-col'>
        <div className='container mx-auto flex h-full'>
             <div className='text-white w-[300px] h-full p-4'>
                <h3 className='text-xl font-bold mb-6'>Products</h3>
                <ul>
                    {products.map((item, index) => (
                        <li key={index}>
                            <Link href={item.url} className="flex items-center justify-between py-2"><span>{item.name}</span> <ChevronRight /></Link>
                        </li>
                    ))}
                </ul>


             </div>
        </div>
    </div>
  )
}

export default GlobalMenu