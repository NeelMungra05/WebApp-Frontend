import React from 'react';
import HomeImg from '../../assets/homeimg.png';
import AmnsImg from '../../assets/amns.png';
import Team1 from '../../assets/team1.png';
import Team2 from '../../assets/team2.jpg';
import Team3 from '../../assets/team3.jpg';
import Team4 from '../../assets/team4.jpeg';
import styles from './Home.module.css';

const TeamMembers = [
    { name: 'Darshan Singh', role: 'Lead', imgSrc: Team1 },
    { name: 'Neel Mungra', role: 'Backend Developer', imgSrc: Team2 },
    { name: 'Faizal Kureshi', role: 'Frontend Developer', imgSrc: Team3 },
    { name: 'Mihika Bodke', role: 'Frontend Developer', imgSrc: Team4 },
  ];

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.divImg}><img src={HomeImg} alt="" className={styles.homeImage} /></div>
      <div className={styles.greenLine}></div>
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
      <div className={styles.greenLine}></div>
      <div className={styles.toolDescription}>  
        <h2 className={styles.heading}>Our Clients</h2>
        <div className={styles.clientdesc}>
        <img src={AmnsImg}  alt=""  className={styles.clientImg} />
        <p className={styles.description}>
        The AMNS India Reconciliation Tool has not only streamlined AMNS India's reconciliation workflows but has also delivered quantifiable results.
        With fewer discrepancies, reduced manual efforts, and enhanced decision-making capabilities, AMNS India has experienced improved operational efficiency and cost savings. 
        The AMNS India Reconciliation Tool wasn't just a solution—it was a tailored answer to their unique reconciliation challenges. 
        </p>
        </div>
      </div>
      <div className={styles.greenLine}></div>
      <div className={styles.toolDescription}>  
        <h2 className={styles.heading}>Our Team</h2>
        <div className={styles.wrapimg}>
          {TeamMembers.map((member, index) => (
            <div className={styles.box} key={index}>
              <img src={member.imgSrc} alt="" className={styles.imgtest} />
              <div className={styles.texttestimonial}>
                <h1>{member.name}</h1>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.greenLine}></div>
    </div>
  );
}

export default Home;
