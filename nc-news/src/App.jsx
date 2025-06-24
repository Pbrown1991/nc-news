import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ArticlePage from './Components/ArticlePage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='/articles/:article_id' element={<ArticlePage/>}></Route>

      </Routes>
    </BrowserRouter>
      

      
    
  )
}

export default App
