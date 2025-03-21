import { Search, Sparkles, X } from 'lucide-react'
import React from 'react'

function SearchBox({showSearch, toogleSearch}:{showSearch:boolean, toogleSearch:()=>void}) {
  return (
    <div className={`p-4 2xl:px-0 absolute w-full h-full bg-blue-800 pt-10 bg-opacity-80 transition-all ease-in-out backdrop-blur-md z-50 ${!showSearch ? "-top-60" : "top-0"}`} style={{zIndex:"999"}}>
        <div className="container mx-auto relative">
          <Search className="absolute top-2 left-3 text-slate-700" />
          <input
            className="border-none w-full h-10 px-4 pl-14"
            placeholder="Search for services, customer portal features and more"
          />
          <p className='text-xs flex text-white gap-x-2 py-1'><span>Search Tool Powered by </span> <span className='text-emerald-300'>Unibank AI</span> <Sparkles className='text-emerald-300' size="10"/></p>
          <button className="absolute -top-8 right-1 bg-white rounded-full p-1 bg-opacity-55" onClick={toogleSearch}>
            <X  size="14"/>
          </button>
        </div>
      </div>
  )
}

export default SearchBox