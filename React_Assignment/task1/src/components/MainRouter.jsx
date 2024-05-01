import { Route,BrowserRouter,Routes } from "react-router-dom";
import React from 'react'
import FoodPhotografer from './FoodPhotografer';
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Book from './Book'
import Blog from './Blog'
import ClientAlbum from './ClientAlbum'

export const MainRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>

<Route path="/" element={<FoodPhotografer/>}></Route>
<Route path="about" element={<About/>}></Route>
<Route path="portfolio" element={<Portfolio/>}></Route>
<Route path="book" element={<Book/>}></Route>
<Route path="blog" element={<Blog/>}></Route>
<Route path="albums" element={<ClientAlbum/>}></Route>
<Route path="contact" element={<Contact/>}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}
