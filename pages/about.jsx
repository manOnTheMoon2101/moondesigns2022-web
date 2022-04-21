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




<h1 className={styles.headH}>


Moon Designs

</h1>











</div>

<div className={styles.moon}>
     <Image className={styles.moonH} src={logo5} width='150px' height='150px' alt='moon'></Image>
     </div>


  
    
</div>




<div className={styles.aboutMain}>

<h1 className={styles.aboutHead2}>

Moon Designs is a FreeLancing Businnes run by <a href='https://www.cleveclayton.com/'>Cleve Clayton</a>. 
I make websites using the NextJs Framework.
Whether it is for Business purposes or Portfolio,<br/>I provide.



  
</h1>







<h2 className={styles.aboutPa}>




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