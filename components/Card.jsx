import React from 'react'
import styles from '../styles/Card.module.css'
import CardItem from "../components/CardItem"
const Card = ({missions}) => {

 return missions.map((m, index) => (
   <div className={styles.column} key={index}>
     <CardItem m={m}  />
   </div>
 ));
 
}
export default Card

  
        
            
             