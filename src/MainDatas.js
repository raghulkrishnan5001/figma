import React, { useState } from 'react'; 
import item1 from "./pictures/item-1.jpeg" 
import item2 from "./pictures/item-2.jpeg" 
import item3 from "./pictures/item-3.jpeg" 
import item4 from "./pictures/item-4.jpeg" 
import item5 from "./pictures/item-5.jpeg" 
import item6 from "./pictures/item-6.jpeg" 
import item7 from "./pictures/item-7.jpeg" 
import item8 from "./pictures/item-8.jpeg" 
import item9 from "./pictures/item-9.jpg" 
import item10 from "./pictures/item-10.jpg" 
import item11 from "./pictures/item-11.jpg" 
import item12 from "./pictures/item-12.jpg" 
import item13 from "./pictures/item-13.jpg" 
 
 
 
function MainDatas() { 
  const [datas, setDatas] = useState([ 
    { 
      id: 1, 
      title: 'Nike', 
      category: 'Sneakers', 
      price: 15.99, 
      img: item1, 
    }, 
    { 
      id: 2, 
      title: 'Hand Bag', 
      category: 'Bags', 
      price: 13.99, 
      img: item2, 
    }, 
    { 
      id: 3, 
      title: 'Hand Bag', 
      category: 'Bags', 
      price: 6.99, 
      img: item3,  
    }, 
    { 
      id: 4, 
      title: 'Nike', 
      category: 'Sneakers', 
      price: 20.99, 
      img: item4, 
    }, 
    { 
      id: 5, 
      title: 'Puma', 
      category: 'Sneakers', 
      price: 22.99, 
      img: item5, 
    }, 
    { 
      id: 6, 
      title: 'Adidas', 
      category: 'Sneakers', 
      price: 18.99, 
      img: item6,  
    }, 
    { 
      id: 7, 
      title: 'Bata', 
      category: 'Sneakers', 
      price: 8.99, 
      img: item7, 
    }, 
    { 
      id: 8, 
      title: 'Burberry', 
      category: 'Sneakers', 
      price: 12.99, 
      img: item8, 
    }, 
    { 
      id: 9, 
      title: 'American Optical', 
      category: 'Sunglasses', 
      price: 16.99, 
      img: item9,  
    }, 

    { 
      id: 10, 
      title: 'Tom Ford', 
      category: 'Sunglasses', 
      price: 16.99, 
      img: item10,  
    }, 

    { 
      id: 11, 
      title: 'Persol', 
      category: 'Sunglasses', 
      price: 16.99, 
      img: item11,  
    }, 

    { 
      id: 12, 
      title: 'Wrangler', 
      category: 'Belt', 
      price: 16.99, 
      img: item12,  
    }, 

    { 
      id: 13, 
      title: 'Levis', 
      category: 'Belt', 
      price: 16.99, 
      img: item13,  
    }, 
  ] 
 
 
 
  ) 
  const [dataRender, setRenderData] = useState(datas); 
  const category = datas.map(data => data.category) 
  const Cate = [...new Set(category)] 
  Cate.unshift('All') 
  const handleTab = (d) => { 
    if (d === 'All') { 
      setRenderData(datas) 
      return 
    } 
    const filteredData = datas.filter(data => data.category === d) 
    setRenderData(filteredData) 
  } 
 
 
  return ( 
    <div> 
    
 
 
 
      <div className='text-center mt-5'>{Cate.map((d, i) => <button className='text-warning px-4 text-decoration-none borderrem ' onClick={() => handleTab(d)} key={i} >{d}</button>)}</div> 
      <div className='container mt-5 px-5'> 
        <div className='row'> 
          { 
            dataRender.map(data => <div className='d-flex col-6 ' key={data.id}> 
              <div className='row container '> 
              
                <img src={data.img} height="150" width='100' className='col-4 mb-5 imges border border-5 border-warning' alt="img-responsive" /> 
                <div className='mb-1  col-8'> 
                  <span className='fw fw-bold'>{data.title}</span> 
                  <span className='ms-5 text-warning fw-bold'>${data.price}</span> 
                  <br/> 
                  <button className='datas-add-button'>Add To Cart</button>
                  </div> 
                 
                  
 
                 
                   
                </div> 
               
 
 
            </div>) 
          } 
 
        </div> 
      </div> 
 
    </div> 
  ) 
} 

export default MainDatas