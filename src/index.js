import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Landing.css';

import { BlogHeader, BlogArticle }from './App'

import Navbar from './Navbar';
import { Header, Archive, About, Gallery, Contact } from './Landing';
import Footer from './Footer'



ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    {/* <BlogHeader />
    <BlogArticle /> */}
    <Header />
    <Archive />
    <About />
    <Gallery />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


