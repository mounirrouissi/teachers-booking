import React from 'react'
import TeacherImage2 from '../assets/me.png'

import styles from './TeacherCards.module.css'


const teachers = [
    {name: 'John Doe', img: TeacherImage2, subject: 'Math'},
    {name: 'Jane Smith', img: TeacherImage2, subject: 'Science'},
    {name: 'David Johnson', img: TeacherImage2, subject: 'English'},
    // Add more teacher objects as needed
  
]

const Card = ({TeacherName,TeacherImg,TeacherSubject}) => {
  return (
      <div className={styles.card}>
        <img src={TeacherImg} alt={TeacherName} className={styles.teacherImage} />
        <div className={styles.cardContent}>
          <h3>{TeacherName}</h3>
          <p>{TeacherSubject}</p>
          <button className={styles.bookingButton}>Make a Booking</button>
        </div>
      </div>  )
}


function TeacherCards() {
    
  return (
      <div >
        <h1>Teachers</h1>
        <div className={styles.container}>
        {teachers.filter(t => t.name.startsWith('J') ).map(teacher => (
        <Card key={teacher.name} TeacherName={teacher.name} TeacherImg={teacher.img} TeacherSubject={teacher.subject} />
    ))}
    </div>
    </div>
  )
}

export default TeacherCards