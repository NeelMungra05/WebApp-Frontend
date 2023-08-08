import React from 'react';

import HomeImg from '../../assets/homepage.png';

import HomeImg2 from '../../assets/homeimg.png';

import AmnsImg from '../../assets/amns.png';

import t1 from '../../assets/team1.png';
import t2 from '../../assets/team2.png';
import t3 from '../../assets/team3.png';
import t4 from '../../assets/team4.png';
import styles from './Home.module.css';




const Home = () => {

  return (

    <div className={styles.homeContainer}>

{/* Introduction session starts here */}
<section className={styles.section}>

      <img src={HomeImg2} alt="" className={styles.homeImage} />

      

      <div className={styles.toolDescription}>  

        <h2 className={styles.heading}>ERP Data4Ward Plus</h2>

        <p className={styles.description}>

        Introducing our Innovative Reconciliation, Transformation, and Profiling Tool – ERP Data4Ward Plus,

        Your All-in-One Solution for Data Excellence.

        Harness the power of cutting-edge technology with our tool designed to streamline and elevate your data management processes.

        Seamlessly reconcile discrepancies, ensuring data integrity and accuracy.

        Effortlessly transform data to meet your specific needs, enabling informed decision-making.

        Experience comprehensive profiling that offers deep insights into your data, unveiling patterns and anomalies.

        Our tool empowers you to unlock the full potential of your data, simplifying complex tasks and enhancing efficiency.

        Join countless professionals who trust our solution to optimize their data workflows.

        Elevate your data management to new heights with our ERP Data4Ward Plus Tool today.

        </p>

      </div>

  </section>
      <div className={styles.greenLine}></div>

      {/* Introduction session ends here       */}

{/* Client section starts here */}
      <section className={styles.sectionclient}>
    
      <div className={styles.toolDescription}>  
      <h2 className={styles.heading}>Our Clients</h2>

<p className={styles.descriptionclient}>
<img src={AmnsImg}  alt=""  className={styles.clientImg} />

The AMNS India Reconciliation Tool has not only streamlined AMNS India's reconciliation workflows but has also delivered quantifiable results.

With fewer discrepancies, reduced manual efforts, and enhanced decision-making capabilities, AMNS India has experienced improved operational efficiency and cost savings.

The AMNS India Reconciliation Tool wasn't just a solution—it was a tailored answer to their unique reconciliation challenges.

</p>



</div>
</section>
{/* Client session ends here */}
<div className={styles.greenLine}></div>
<h1 className={styles.teamheading}>Meet our Team</h1>
<section className={styles.sectiontest}>


    <div className={styles.wrapimg}>
         
        <div className={styles.box}>
             
        <img src={t4} alt="" className={styles.imgtest} />
           
            <div className={styles.texttestimonial}>
           <h1>Darshan Singh</h1>
                <p>Lead</p>
            </div>
        </div>
         
        <div className={styles.box}>
             
        <img src={t3} alt="" className={styles.imgtest} />
       
            
            <div className={styles.texttestimonial}>
              <h1>Neel Mungra</h1>
                <p> Backend Developer</p>
            </div>
        </div>
         
        <div className={styles.box}>
        <img src={t2} alt="" className={styles.imgtest} />
       
            
            <div className={styles.texttestimonial}>
            <h1>Faizal Kureshi</h1>
                <p>Frontend Developer</p>
            </div>
        </div>
      
      <div className={styles.box}>
             
      <img src={t1} alt="" className={styles.imgtest} />
       
            
            <div className={styles.texttestimonial}>
              <h1>Mihika Bodke</h1>
                <p>Frontend Developer</p>
            </div>
        </div>
      
    
    </div>


</section>


    </div>

  );

}




export default Home;




