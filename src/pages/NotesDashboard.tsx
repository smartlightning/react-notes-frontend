import React from 'react'
import Note from '../components/Note'

const NotesDashboard = () => {
    // show all notes on the dashboard



    //get Data from Backend
    const handleDeleteNote =  () => {
        alert('Request to delete note') 
    }

    const handleEdit = () => {
      alert('Request to edit')
    }
  return (
    <div>
        <h1>Welcome to your notes dashboard</h1>
        <h3>See an overview of all the notes you have here</h3>
        <Note handleEdit = {handleEdit} handleDeleteNote={handleDeleteNote} />
    </div>
  )
}

export default NotesDashboard