import '../styles/globals.css';
import {motion,AnimatePresence} from 'framer-motion'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Head from 'next/head'
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {AiTwotonePhone} from 'react-icons/ai';
import {AiTwotoneTool} from 'react-icons/ai';
import {RiPagesFill} from 'react-icons/ri';
import {AiTwotoneHome} from 'react-icons/ai';
import {HiInformationCircle} from 'react-icons/hi';

import { useRouter } from 'next/router'
import { GTM_ID, pageview } from '../lib/ga/gtm'
import { useEffect } from 'react'
import Script from 'next/script'



function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])


  return( <>
  
  <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-KH4ZFBC');
          `,
        }}
      />
     
   

     <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-8PX1TPT1WX`} />

<Script strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8PX1TPT1WX', {
        page_path: window.location.pathname,
        });
    `}
</Script>

  
  
  
  <AnimatePresence>

<Head>
        <title>Moon Designs-Web Designing</title>

        <meta name="description" content="Moon Designs focuses on providing clients with high-end WebPages powered by NextJS." />
        <meta name="keywords" content="Web-Design,NextJS,Responsive,GoDaddy,Vercel,Animations"></meta>


        <meta name='robots' content='noindex,nofollow'></meta>
        <meta name='author' content='Cleve Clayton'></meta>

        <link rel="icon" href="/moon.svg" />





        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet"></link>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bitter&display=swap" rel="stylesheet"></link>






          

      </Head>

  
      <div className={styles.navB}>
        
       
     <ul>
     <li><Link href='/'><AiTwotoneHome title='Home'/></Link></li>
       <li><Link href='/about'><HiInformationCircle title='About'/></Link></li>
       <li><Link href='/projects'><RiPagesFill title='Projects'/></Link></li>
       <li><Link href='/service'><AiTwotoneTool title='Services'/></Link></li>
       
       <li><Link href='/contact'><AiTwotonePhone title='Contact'/></Link></li>
       
      
     </ul>
   
     </div>
    
    
     

  <motion.div
  
  key={router.route}


  initial="pageInitial"

  animate="pageAnimate"

  exit="pageExit"

  variants={{
  
    pageInitial:{
      opacity:1,

    },
    pageAnimate:{
      opacity:1
    },
    pageExit:{
    

      transition:{
        delay:1,
        
      }
     
  
      
      
    }
  }}
  
  >
    
  <Component {...pageProps} />




  </motion.div>
  <div className={styles.footerMain}>


  <div className={styles.footerHead}>
<h1>Social Media</h1>
</div>

<div className={styles.socialBox}>

  <a id={styles.instaL} href="https://www.instagram.com/moon_designs2022/" target="_blank" rel="noopener noreferrer" title='Instagram'><BsInstagram/></a>
  <a id={styles.whatsL}href='https://api.whatsapp.com/send?phone=27746957353&text=Hey,I%20would%20like%20to%20place%20a%20order?' target="_blank" rel="noopener noreferrer" title='Whatsapp'><BsWhatsapp/></a>
  <a id={styles.gmailL} href='mailto:moondesigns2022@gmail.com' target="_blank" rel="noopener noreferrer" title='Email'><AiOutlineMail/></a>
  <a id={styles.faceL} href='https://www.facebook.com/moonDesigns2022' target="_blank" rel="noopener noreferrer" title='FaceBook Page'><BsFacebook/></a>
</div>


<div className={styles.special}>
  <p>This Website is powered by NextJS<br/>Created by Moon Designs:)</p>
</div>

<div className={styles.footerA}>
  <p>@2022</p>
</div>


</div>
  </AnimatePresence>

  </>
  )
}
  
export default MyApp