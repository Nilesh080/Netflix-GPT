import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptPage = () => {
  return (
    <div>
        <div className="fixed -z-10">
            <img className="h-screen md:object-cover md:w-screen object-cover" src={BG_URL} alt="logo" />
        </div>
        <div>
            <GptSearchBar />
            <GptMovieSuggestion/>
        </div>
        
    </div>
  )
}

export default GptPage