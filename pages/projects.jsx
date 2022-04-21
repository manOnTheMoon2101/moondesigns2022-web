
import styles from '../styles/Home.module.css'

import { motion } from 'framer-motion';

import Image from 'next/image';

import logo10 from '../public/images/code2.png';
import logo5 from '../public/images/full_moon (1).svg'




export default function Projects(){





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
<div className={styles.moon}>
     <Image className={styles.moonH} src={logo5} width='150px' height='150px' alt='moon'></Image>
     </div>
</div>


</div>

<div className={styles.projectA}>

<h1>Our Projects</h1>

<Image src={logo10} width='600px' height='500px'></Image>
<a href="https://www.cleveclayton.com/" target="_blank" rel="noopener noreferrer">cleveclayton.com</a>

</div>
</>







}