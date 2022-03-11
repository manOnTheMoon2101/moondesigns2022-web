import '../styles/globals.css';
import {motion,AnimatePresence} from 'framer-motion'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Head from 'next/head'
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useEffect } from 'react/cjs/react.development';

import Script from 'next/script'

import * as gtag from './lib/gtag';

<<<<<<< HEAD
function MyApp({ Component, pageProps }) {

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return( <>
=======
  return( <>
  
  
  <Script
  strategy='lazyOnLoad'
  src={'https://www.googletagmanager.com/gtag/js?id=G-BCPHN8QQWC'}

   />




<Script strategy='lazyOnload'>
                {`
             window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BCPHN8QQWC');
            </Script>
>>>>>>> 949b33a44cfdb67bcd1f87a46cfcac730cf22b14
  
  
 {/* Global Site Tag (gtag.js) - Google Analytics */}
 <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-BCPHN8QQWC`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCPHN8QQWC', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
  
  
  
  
  
  <AnimatePresence>

<Head>
        <title>Moon Designs</title>
        <meta name="description" content="we provided our clients with high end quality work
and we always put heart and soul
to our projects..." />
        <link rel="icon" href="/moon_icon.ico" />





        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet"></link>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bitter&display=swap" rel="stylesheet"></link>


      </Head>

  
      <div className={styles.navB}>
        
       
     <ul>
     <li><Link href='/'>Home</Link></li>
       <li><Link href='/about'>About</Link></li>
       <li><Link href='/service'>Service</Link></li>
       <li><Link href='/contact'>Contact</Link></li>
       
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

  <a id={styles.instaL} href="https://www.instagram.com/moon_designs2022/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
  <a id={styles.whatsL}href='https://api.whatsapp.com/send?phone=27746957353&text=Hey,I%20would%20like%20to%20place%20a%20order?' target="_blank" rel="noopener noreferrer"><BsWhatsapp/></a>
  <a id={styles.gmailL} href='mailto:moondesigns2022@gmail.com' target="_blank" rel="noopener noreferrer"><AiOutlineMail/></a>
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
