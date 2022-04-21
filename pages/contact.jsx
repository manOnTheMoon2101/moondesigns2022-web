


import Image from 'next/image'
import styles from '../styles/Home.module.css'

import "react-slideshow-image/dist/styles.css";
import logo5 from '../public/images/full_moon (1).svg'

import { motion } from 'framer-motion';
import {BsArrowDown} from 'react-icons/bs';




export default function Contact(){

    return <>
    
    
    <div className={styles.header}>

<div className={styles.contactHeader}>

<motion.div
     
     


     initial={{opacity:0, x:'-100vw'}}
     animate={{opacity:1, x:0,transition:{delay:.1}}}
     
     exit={{opacity:0, x:'100vw'}}

     
     
     
     
     >
  <h1 className={styles.headH}>


Moon Designs

</h1>


</motion.div>

</div>




<div className={styles.moon}>
     <Image className={styles.moonH} src={logo5} width='150px' height='150px' alt='moon'></Image>
     </div>


    </div>
    
  
    
    
    <div className={styles.form}>

    <form  action="https://formsubmit.co/moondesigns2022@gmail.com" method="POST">
  
    <div class={styles.screen}>
      <div class={styles['screen-header']}>
        
      
      </div>
      <div class={styles['screen-body']}>
        <div class="screen-body-item left">
          <div class={styles['app-title']}>
            
          </div>

        </div>
        <div class={styles['screen-body-item']}>
          <div class={styles['app-form']}>
            <div class={styles['app-form-group']}>
              <input class={styles['app-form-control1']} type="text" name='Name' placeholder="Full Name(required)" required/>
            </div>
            <div class={styles['app-form-group']}>
              <input class={styles['app-form-control1']} type="text" name='Email' placeholder="Email(required)" required/>
            </div>
            <div class={styles['app-form-group']}>
              <input class={styles['app-form-control1']} type="number" name='ContactNumber' placeholder="Phone Number (not required)"/>
            </div>
            
            <div class="app-form-group message">
              <input class={styles['app-form-control1']} type="text" name='Message' placeholder="Message" required/>
            </div>

            <div class={styles['app-form-group-buttons']}>

              <button class={styles['app-form-button']} type='submit'>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </form>


<div className={styles.reach}>
<h1>Or reach out to us in our Socials</h1>
<span><BsArrowDown/></span>
</div>


  </div>





    
    
    
    
    
    
    
    </>
}