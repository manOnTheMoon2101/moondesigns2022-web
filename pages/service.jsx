
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import {RiPagesLine} from 'react-icons/ri';
import logo5 from '../public/images/full_moon (1).svg'
import { useState } from 'react'
import { motion } from 'framer-motion';



import {MdBusiness} from 'react-icons/md';
import {MdPerson} from 'react-icons/md'
import {MdUpdate} from 'react-icons/md';
import {AiOutlineStop} from 'react-icons/ai';
import {BiCart} from 'react-icons/bi';




export default function Service(){

  const [num,setNum]   =useState(0);

  const [numA,setNumA] =useState(0);

  const [numS,setNumS] =useState(0);

  const [numP,setNumP] =useState(0);

  const [numL,setNumL] =useState(0);

  const [numB,setNumB] =useState(0);

  const numSum =num+numA+numS+numP+numL+numB


  const domainClickP =() =>{
  setNum(+100);
}

function cartDomain(){
  const optionD = document.getElementsByClassName(styles.optionD).value
  
  if (optionD === ".vercel.app(default)"){
    setNum(+10);}

  else{
    setNum(+300)
  
  }
}


function cartAnimation(el){
  const optionA = el.value

  if (optionA === "No Animations"){
    setNumA(+10);}

  else{
    setNumA(+200)
  
  }
}


const domainClickM =() =>{
  setNum(0);
}




const AniClickP =() =>{
  setNumA(+50);
}
const AniClickM =() =>{
  setNumA(0);
}



const StyleClickP =() =>{
  setNumS(+0);
}
const StyleClickM =() =>{
  setNumS(+50);
}



const pageClickP =() =>{
  setNumP(+50);
}
const pageClickM =() =>{
  setNumP(+100);
}


const lifeClickP =() =>{
  setNumL(+50);
}
const lifeClickM =() =>{
  setNumL(0);
}


const portClickP =() =>{
  setNumB(+50);
}
const portClickM =() =>{
  setNumB(+100);
}














    return(
      <>



      <div className={styles.aboutP}>
      <motion.div
     
     


     initial={{opacity:0, x:'-100vw'}}
     animate={{opacity:1, x:0,transition:{delay:.1}}}
     
     exit={{opacity:0, x:'100vw'}}

     
     
     
     
     >
      
      <h1 className={styles.headH}>


Moon Designs

</h1>

        </motion.div>

        
        <div className={styles.moon}>
     <Image className={styles.moonH} src={logo5} width='150px' height='150px' alt='moon'></Image>
     </div>


     </div>

      


    <div className={styles.domainService}>
      <h1>We offer various Domain Options</h1>
     
      <div className={styles.domainList}>
      
      <button className={styles.buttonD} onClick={domainClickM}>
  <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>.vercel.app(default)</span>
      
      
      </button>

<br/>
<div className={styles.domainList2}>
    <button className={styles.buttonD} onClick={domainClickP}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front2}>.com</span>



    </button>


    <button className={styles.buttonD} onClick={domainClickP}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front3}>.co.za</span>



    </button>




    <button className={styles.buttonD} onClick={domainClickP}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front4}>.app</span>



    </button>
        </div>
        </div>
      <h2 className={styles.numVar}>+ZAR {num}</h2>

      <div className={styles.cartC}>
  
  </div>
    
  </div>
  
 

  <div className={styles.animationsService}>
      <h1>Animations to stand out</h1>
      
        
      
      <h5 className={styles.numVar} >+ZAR {numA}</h5>
      

    <button className={styles.buttonD} onClick={AniClickM}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>No Animations</span>


    </button>
   
    <button className={styles.buttonD} onClick={AniClickP}>
    <motion.div
      className={styles.aniHover}
      initial={{scale:1}}
      whileTap={{ fontSize:'40px' ,rotate:360,color:'blue',textDecoration:'underline'}}
      transition={{transition:1}
    
    }
      >
    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  
  <span class={styles.front31}>Animations</span>
 
  </motion.div>
    </button>

    <div className={styles.cartC}>

  </div>
  </div>



  <div className={styles.stylingService}>
      <h1>Styling with diffrent unique fonts</h1>
      
      
      <h6 className={styles.noStyle}>qué tengas un lindo día</h6>
     



      <h6 className={styles.allStyle}>qué tengas un lindo día</h6>
     

      <h5 className={styles.numVar}>+ZAR {numS}</h5>
      
    <button  onClick={StyleClickP}>
  
  <span >Low Styling</span>



    </button>
    <button className={styles.buttonD} onClick={StyleClickM}>
    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front2}>Styling</span>


    </button>
    <div className={styles.cartC}>

  </div>
  </div>

  <div className={styles.pageService}>
      <h1>Page Count</h1>

     

     

      <h5 className={styles.numVar}>+ZAR {numP}</h5>
      
    <button className={styles.buttonD} onClick={pageClickP}>
    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}> 
      <RiPagesLine/>
      <br/>
     (1-5)
  </span>

    </button>
    <button className={styles.buttonD} onClick={pageClickM}>
    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front4}>
    <RiPagesLine/>

    
      <br/>
     (6-10)
  
  </span>


    </button>
    <div className={styles.cartC}>

  </div>
  </div>



  <div className={styles.lifeService}>
      <h1>Life Time Updates</h1>
      <h2>We provided free future updates on <br/>your website</h2>
      <h5 className={styles.numVar}>+ZAR {numL}</h5>
      
    <button className={styles.buttonD} onClick={lifeClickM}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}><AiOutlineStop/></span>

    </button>
    <button className={styles.buttonD} onClick={lifeClickP}>
    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front2}><MdUpdate/></span>

    </button>
    <div className={styles.cartC}>

  </div>
  </div>


  <div className={styles.portService}>
      <h1>Portfolio/Business</h1>
      <h2>Attract Empolyers <br/>or <br/>
      Attract Customers</h2>
      
      <h5 className={styles.numVar}>+ZAR {numB}</h5>
      
    <button className={styles.buttonD} onClick={portClickP}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}><MdPerson/></span>


    </button>
    <button className={styles.buttonD} onClick={portClickM}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front3}><MdBusiness/></span>

    </button>
    <div className={styles.cartC}>

  </div>
  </div>

  



  <div className={styles.priCe}>
    <h1>Your total will be:<span className={styles.sumNum}>ZAR {numSum}</span></h1>

    <div className={styles.coupon}>
    
<p>For any question,please do contact us on our socials our send us a direct message.We will reach out to you in the next 24hrs.</p>
    </div>

    
<button className={styles.buttonD}>
  <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}><Link href='/contact'>Contact Us</Link></span>
  </button>

  </div>





  <div className={styles.cartContainer}>
<form  action="https://formsubmit.co/moondesigns2022@gmail.com" method="POST">
  <div className={styles.cart}>
    <h1> Your Cart<BiCart/></h1>


    <label>DomainName:</label>
<select name='DomainName' >
  <option value='.vercel.app' id={styles.optionD}>.vercel.app(default)</option>
  
  <option value='.com'>.com</option>
  <option value='.co.za'>.co.za</option>
  <option value='.app'>.app</option>

  
  </select>

<br/>

  <label>Animations:</label>
<select name='Animations'>
  <option value='NoAnimations'>No Animations</option>
  <option value='YesAnimations'>Yes</option>
  
  
  
  </select>

<br/>

  <label>Styling:</label>
<select name='Styling'>
  <option value='NoStyling'>No Styling</option>
  <option value='YesStyling'>Yes</option>
  
  
  
  </select>
    
    <br/>
   
    <label>Pages:</label>
<select name='Pages'>
  <option value='1-5'>1-5</option>
  <option value='6-10'>6-10</option>
  
  
  
  </select>
    <br/>
    
    <label>Updates:</label>
<select name='Updates'>
  <option value='NoUpadtes'>No Updates</option>
  <option value='YesUpadtes'>Yes</option>
  
  
  
  </select>
    <br/>

    <label>Portfolio/Business:</label>
<select name='P/B'>
  <option value='Portfolio'>Portfolio</option>
  <option value='Business'>Business</option>
  
  
  
  </select>
    <br/>

    <p className={styles.warN}>Note:Please asure that everything in your cart is right and you entered your correct email address. 
    <br/>
    We will contact you back regarding payments and more information about your web page.
    
     </p>


    <input class={styles['app-form-control']} type="text" name='Name' placeholder="Full Name(required)" required/>
    <input class={styles['app-form-control']} type="text" name='Email' placeholder="Email(required)" required/>
  

    <button className={styles.buttonD2} type='submit'>

  <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>Submit</span>

  </button>
    

    </div>
  
  
    </form>
    </div>






    

      </>
      
      
      
      
      )
      
      
      
      
      }