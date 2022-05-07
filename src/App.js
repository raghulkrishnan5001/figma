import React from 'react';
import './App.css';
import Top from './Top';
import Promotion from './Promotion';
import Bestseller from './Bestseller';
import MainDatas from './MainDatas';
import Loadmore from './Loadmore';
import Freeshipping from './Freeshipping.js';
import Latestnews from './Latestnews';
import Featuredproducts from './Featuredproducts';
import Searchbox from './Searchbox';
import Footer from './Footer';


function App() {
  return (
    <div>
          <Top/>
          <Promotion/>
          <Bestseller/>
          <MainDatas/>
          <Loadmore/>
          <Freeshipping/>
          <Latestnews/>
          <Featuredproducts/>
          <Searchbox/>
          <Footer/>
          
        

    </div>
  );
}

export default App;
