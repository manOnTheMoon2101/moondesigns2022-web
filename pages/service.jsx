import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import {AiOutlineSmile} from 'react-icons/ai';
import {RiPagesLine} from 'react-icons/ri';
import logo5 from '../public/images/full_moon (1).svg'
import { useState } from 'react'
import { motion } from 'framer-motion';





export default function Service(){

  const [num,setNum]   =useState(0);

  const [numA,setNumA] =useState(0);

  const [numS,setNumS] =useState(0);

  const [numP,setNumP] =useState(0);

  const [numL,setNumL] =useState(0);

  const [numB,setNumB] =useState(0);

  const numSum =num+numA+numS+numP+numL+numB


  const domainClickP =() =>{
  setNum(+300);
}

const domainClickM =() =>{
  setNum(0);
}




const AniClickP =() =>{
  setNumA(+200);
}
const AniClickM =() =>{
  setNumA(0);
}



const StyleClickP =() =>{
  setNumS(+100);
}
const StyleClickM =() =>{
  setNumS(+300);
}



const pageClickP =() =>{
  setNumP(+200);
}
const pageClickM =() =>{
  setNumP(+400);
}


const lifeClickP =() =>{
  setNumL(+300);
}
const lifeClickM =() =>{
  setNumL(0);
}


const portClickP =() =>{
  setNumB(+200);
}
const portClickM =() =>{
  setNumB(+100);
}














    return(
      <>



      <div className={styles.aboutP}>

      
        <h1 className={styles.serviceHeader}>Services</h1>



        
        <div className={styles.moon}>
     <Image className={styles.moonH} src={logo5} width='100px' height='100px'></Image>
     </div>


     </div>

      


    <div className={styles.domainService}>
      <h1>Do you want your own Domain?</h1>
      
        <h6>example. yourname+surname<span className={styles.com}>.com</span></h6>
        <h6> businessname<span className={styles.za}>.co.za</span></h6>
        <h6> anyname<span className={styles.io}>.net</span></h6>
       

  
      <h2 className={styles.numVar}>+R{num}</h2>

    <button className={styles.buttonD} onClick={domainClickM}>
  <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>No</span>
      
      
      </button>
    <button className={styles.buttonD} onClick={domainClickP}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>Yes</span>


    </button>
    
  </div>
  

  <div className={styles.animationsService}>
      <h1>Do you want any Animations?</h1>
      <motion.div
      className={styles.aniHover}
      initial={{scale:1}}
      whileTap={{ fontSize:'40px' ,rotate:360,color:'blue',textDecoration:'underline'}}
      transition={{transition:1}
    
    }
      >
        <h2>Click and Hold on Me</h2>
      </motion.div>
      <h5 className={styles.numVar} >+R{numA}</h5>
      

    <button className={styles.buttonD} onClick={AniClickM}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>No Animations</span>


    </button>
    <button className={styles.buttonD} onClick={AniClickP}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>Mid Animations</span>


    </button>
  </div>



  <div className={styles.stylingService}>
      <h1>Do You Want Styling?</h1>
      
      
      <h6 className={styles.noStyle}>Hey My Name is Juan,I have some styling today.</h6>
     



      <h6 className={styles.allStyle}>Hey I'm Juan,I have <span className={styles.south}>average</span> styling in me today.</h6>
     

      <h5 className={styles.numVar}>+R{numS}</h5>
      
    <button className={styles.buttonD} onClick={StyleClickP}>
    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>Low Styling</span>



    </button>
    <button className={styles.buttonD} onClick={StyleClickM}>
    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>Mid Styling</span>


    </button>
  </div>

  <div className={styles.pageService}>
      <h1>Page Count</h1>

      <div className={styles.five}>
      <RiPagesLine/>
      <RiPagesLine/>
      <RiPagesLine/>
      <RiPagesLine/>
      <RiPagesLine/>
      </div>

      <div className={styles.ten}>

     <p><RiPagesLine/><span className={styles.pageFive}>+5</span></p>
     </div>


      <h5 className={styles.numVar}>+R{numP}</h5>
      
    <button className={styles.buttonD} onClick={pageClickP}>
    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>1-5 Pages</span>

    </button>
    <button className={styles.buttonD} onClick={pageClickM}>
    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>6-10 Pages</span>


    </button>
  </div>



  <div className={styles.lifeService}>
      <h1>Life Time Updates</h1>
      <h2>We provided free future updates on <br/>your website</h2>
      <h5 className={styles.numVar}>+R{numL}</h5>
      
    <button className={styles.buttonD} onClick={lifeClickM}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>No</span>

    </button>
    <button className={styles.buttonD} onClick={lifeClickP}>
    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>Yes</span>

    </button>
  </div>


  <div className={styles.portService}>
      <h1>Portfolio/Business</h1>
      <h2>Attract Empolyeers <br/>or <br/>
      Attract Customers</h2>
      
      <h5 className={styles.numVar}>+R{numB}</h5>
      
    <button className={styles.buttonD} onClick={portClickM}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>Portfolio</span>


    </button>
    <button className={styles.buttonD} onClick={portClickP}>

    <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}>Business</span>

    </button>
  </div>

  



  <div className={styles.priCe}>
    <h1>Your total will be:<span className={styles.sumNum}>R{numSum}</span></h1>

    <div className={styles.coupon}>
    

    </div>

    
<button className={styles.buttonD}>
  <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}><Link href='/contact'>Contact Form</Link></span>
  </button>

  </div>
    

      </>
      
      
      
      
      )
      
      
      
      
      }