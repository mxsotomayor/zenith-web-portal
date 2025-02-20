import React from 'react'


interface ImportantBlockProps {
     title:string;
     subtitle:string;
     className:string;
}

function ImportantBlock() {

    const data: ImportantBlockProps[] = [
        {
            title: 'Funcionalidades de la app',
            className: 'bg-orange-500',
            subtitle: 'Puedes realizar operaciones bancarias estés donde estés, conectándote con BBVA desde tu celular.'
        },
        {
            title: 'title2',
            subtitle: 'Conoce más',
            className: 'bg-blue-900'
        },
        {
            title: 'title3',
            subtitle: 'Conoce más',
            className: 'bg-emerald-500'
        },
        {
            title: 'title3',
            subtitle: 'Conoce más',
            className: 'bg-blue-700'
        }
    ]

  return (
    <div className="bg-blue-950 py-8">
        <div className='container mx-auto'>
            <h2 className='text-5xl py-4 font-bold text-white mb-6'>Now you have ease access to</h2>
            
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                {data.map((item, index) => (
                    <div key={index} className={`${item.className} text-white h-80 p-8 flex flex-col justify-end relative overflow-hidden group hover:justify-start transition-all ease-in-out`}>
                        <div className='z-0 absolute group-hover:top-0 top-[500px] transition-all ease-in-out  left-0 w-full h-full bg-black/50'>
                         </div>
                        <h3 className='font-bold text-2xl z-1'>{item.title}</h3>
                        <p className='max-w-md z-1'>{item.subtitle}</p>
                        
                    </div>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default ImportantBlock