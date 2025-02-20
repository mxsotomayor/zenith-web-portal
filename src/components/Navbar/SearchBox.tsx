import { Search, X } from 'lucide-react'
import React from 'react'

function SearchBox({showSearch, toogleSearch}:{showSearch:boolean, toogleSearch:()=>void}) {
  return (
    <div className={`p-4 2xl:px-0 absolute w-full h-full bg-blue-800 pt-10 bg-opacity-80 transition-all ease-in-out backdrop-blur-md ${!showSearch ? "-top-60" : "top-0"}`}>
        <div className="container mx-auto relative">
          <Search className="absolute top-3 left-3" />
          <input
            className="border-none w-full h-12 px-4 pl-14"
            placeholder="Search"
          />
          <button className="absolute -top-8 right-1 bg-white rounded-full p-1 bg-opacity-55" onClick={toogleSearch}>
            <X  size="14"/>
          </button>
        </div>
      </div>
  )
}

export default SearchBox