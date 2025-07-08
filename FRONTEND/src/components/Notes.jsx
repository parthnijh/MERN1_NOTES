import React from 'react'

const getNotes=async () => {
    const res=await fetch("http://localhost:5000/user/notes/:id")
    
}

const Notes = () => {
  return (
    <div>Notes</div>
  )
}

export default Notes