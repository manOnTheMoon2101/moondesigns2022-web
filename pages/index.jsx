

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import React, { useEffect } from 'react';



import { motion, useAnimation,AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



import logo1 from '../public/images/next.png'




import logo3 from '../public/images/Responsive.png'

import logo6 from '../public/images/daddy.png'


import logo5 from '../public/images/full_moon (1).svg'


export default function Home() {
   

  const controls = useAnimation();
 
  const [ ref, inView ] = useInView({
    threshold: 0.3,
   
  });


  let next = "NextJS";
  
 

  useEffect(() => {
    if (inView) {
      console.log(inView)
      controls.start('visible');
    }
    if (!inView) {
      console.log(inView)
      controls.start('hidden');
    }
  }, [inView]);

 


 




  const boxVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }



  return (
  
   

    
  <div className={styles.indeX}>

      

<div className={styles.header}>


     <motion.div
     
     


     initial={{opacity:0, x:'-100vw'}}
     animate={{opacity:1, x:0,transition:{delay:.1}}}
     
     exit={{opacity:0, x:'100vw'}}

     
     
     
     
     >
     <h1 className={styles.headH}>MOON Designs</h1>
    


     
     </motion.div>


     <motion.div
     initial={{opacity:0, y:1000}}
     animate={{opacity:1, y:0}}
     

     transition={{
  
      type: "spring",
      damping: 50,
      mass: 6,
      stiffness: 100,
  
      delay:.9,
    
      
      
    }}
     >

     
     <div className={styles.moon}>
     <Image className={styles.moonH} src={logo5} width='100px' height='100px' alt='moon'></Image>
     </div>

     </motion.div>
     

    
     </div>



    

<div className={styles.nextJ}>


<div className={styles.paraG}>

<h1 className={styles.paraHead}>NextJS Framework</h1>
<p>We use the <span>{next}</span> Framework to build our websites.

</p>

<h1 className={styles.paraHead}>What is NextJS?</h1>
<p><span>{next}</span> is a React Framework which enables SSR(server side rendering)<br/> for your website.
With this technique,websites load faster than other web pages<br/> even when on low internet speed.
</p>

<h1 className={styles.paraHead}>NextJS Websites</h1>
<p><a className={styles.showL} href="https://nextjs.org/showcase" target="_blank" rel="noopener noreferrer">Here</a> are a list off popular websites using <span>{next}</span>.
</p>




<iframe width="560" height="315" src="https://www.youtube.com/embed/lRQ5z7i7pxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>




</div>



<div className={styles.serviceC}>




      

<div className={styles.serviceHeader}>







</div>



<div className={styles.serviceCenter}>

<div className="slide-container">
      <Fade>
        <div className="each-fade">
          <h1>Your Own Custom Domain</h1>

          <Image src={logo6} width="700px" height='400px' alt='goDaddyDomain'></Image>
        </div>

        <div className="each-fade">
          <h1>Deployed In Vercel</h1>
          <h5>(Among The Top 10 Web Hosting Services)</h5>
          <Image src={logo1} width="700px" height='400px' alt='responsiveWebDesign'></Image>
        </div>




        
        <div className="each-fade">
        <h1>Responsive websites</h1>
        <Image src={logo3} width="700px" height='400px' alt='vercel/nextJS'></Image>
        </div>
        
      </Fade>
      
    </div>

</div>




</div>



    

<div className={styles.project}>

<div className={styles.serviceChoice}>




<h1>Start chosing from our varias options for<br/> your Perfect Website</h1>

<h5>Check out our service page</h5>





<button className={styles.buttonD}>
  <span class={styles.shadow}></span>
  <span class={styles.edge}></span>
  <span class={styles.front}><Link href='/service'>Services</Link></span>
  </button>


  






  </div>
</div>






    </div>
  
  )
}
