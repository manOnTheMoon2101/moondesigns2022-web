import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import {GiSouthAfrica} from 'react-icons/gi';
import {BiTimer} from 'react-icons/bi';
import {GrSecure} from 'react-icons/gr';
import {MdOutlineAttachMoney} from 'react-icons/md';
import {MdUpdate} from 'react-icons/md';
import {FaReact} from 'react-icons/fa';
import {SiFlutter} from 'react-icons/si';
import {RiPagesFill} from 'react-icons/ri';
 
import { motion } from 'framer-motion';



import logo5 from '../public/images/full_moon (1).svg'

export default function About(){



    return(
      <>


<div className={styles.aboutP}>



<div className={styles.aboutHeader}>


<motion.div
     
     


     initial={{opacity:0, x:'100vw'}}
     animate={{opacity:1, x:0,transition:{delay:.1}}}
     
     exit={{opacity:0, x:'-100vw'}}

     
     
     
     
     >

<h1 className={styles.aboutHead}>About Us</h1>


</motion.div>



<div className={styles.moon}>
     <Image className={styles.moonH} src={logo5} width='100px' height='100px'></Image>
     </div>




</div>




    
</div>




<div className={styles.aboutMain}>

<h1 className={styles.aboutHead2}>Team Moon</h1>







<h2 className={styles.aboutPa}>
is currently established in 
Wellington,<br/>we provided our clients with high end quality work<br/> and we always put heart and soul<br/> to our projects.



</h2>





</div>





<div className={styles.aboutMain2}>

<div className={styles.aboutBx1}>

<h1>We Deliver On Time<BiTimer/></h1>

</div>

<div className={styles.aboutBx2}>

<h1>Websites Are Secured<GrSecure/></h1>

</div>

<div className={styles.aboutBx3}>

<h1>10% Goes to Charity<MdOutlineAttachMoney/></h1>

</div>


<div className={styles.aboutBx4}>

<h1>Life Time Updates<MdUpdate/></h1>

</div>

<div className={styles.aboutBx5}>

<h1>Portfolio/Business Web-Site<RiPagesFill/></h1>

</div>


<div className={styles.aboutBx6}>

<h1>App Devolopment Soon...<SiFlutter/></h1>

</div>

</div>












      </>
    )
}