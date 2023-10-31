import React from 'react'
import './ShowCase.css'

import showcaseImg1 from '../../assets/ShowCase_img/img1.png'
import showcaseImg2 from '../../assets/ShowCase_img/img1.png'
import showcaseImg3 from '../../assets/ShowCase_img/img1.png'
import showcaseImg4 from '../../assets/ShowCase_img/img1.png'
import showcaseImg5 from '../../assets/ShowCase_img/img1.png'
import showcaseImg6 from '../../assets/ShowCase_img/img1.png'
import showcaseImg7 from '../../assets/ShowCase_img/img1.png'

function ShowCase() {




  return (
    <div className="main_container " id='showcase'>
         <h1 className='container_heading_text'>Our product categories</h1>
         <p className='container_paragraph_text'>Sustainable clothing brands are choosing from a variety of product categories<br/> that we are producing. Check more from our categories.</p>
      <div className=" showcase_container container">
      
        <div className="box">
            <div className="imgBox">
                <img src="https://dev.nitex.com/wp-content/uploads/2021/01/Jackets.png" alt=""/>
            </div>
            <div className="content">
                <h2>Jackets<br/>
                <span>Price:$10</span></h2>
            </div>
        </div>
        <div className="box">
            <div className="imgBox">
                <img src="https://dev.nitex.com/wp-content/uploads/2021/01/Sweaters.png" alt=""/>
            </div>
            <div className="content">
                <h2>Sweaters<br/>
                <span>Price:$11</span></h2>
            </div>
        </div>
        <div className="box">
            <div className="imgBox">
                <img src="https://dev.nitex.com/wp-content/uploads/2021/01/T-shirts.png" alt=""/>
            </div>
            <div className="content">
                <h2>T-shirts<br/>
                <span>Price:$12</span></h2>
            </div>
        </div>
        <div className="box">
            <div className="imgBox">
                <img src="https://dev.nitex.com/wp-content/uploads/2021/01/Bodysuits.png" alt=""/>
            </div>
            <div className="content">
                <h2>Bodysuits<br/>
                <span>Price:$13</span></h2>
            </div>
        </div>
        <div className="box">
            <div className="imgBox">
                <img src="https://dev.nitex.com/wp-content/uploads/2021/01/Blouses.png" alt=""/>
            </div>
            <div className="content">
                <h2>Sweatshirts<br/>
                <span>Price:$14</span></h2>
            </div>
        </div>
        <div className="box">
            <div className="imgBox">
                <img src="https://dev.nitex.com/wp-content/uploads/2021/01/Hoodies.png" alt=""/>
            </div>
            <div className="content">
                <h2>Hoodies<br/>
                <span>Price:$15</span></h2>
            </div>
        </div>
    </div>
     
    </div>
   
  )
}

export default ShowCase