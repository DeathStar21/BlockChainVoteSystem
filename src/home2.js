import React from 'react'

export default function Home2() {
  return (
    <div bg="info" style={{backgroundColor:'white',textAlign: 'center'}}>
        <br/>
        <h1>E-Voting System</h1>
        <br/>
        <p>
          Using an online voting website will allow us to have a vote or vote on various matters 
        </p>
        <p>
          quickly and easily. Whether voting in an election sporting event or a survey of other people's opinions on various interesting matters
        </p>
      
        <img src={require('./PIC/Home.jpg')} alt="รูปภาพของฉัน" style={{ width: '60%', height: '500px'}} />
    </div>
  )
}
