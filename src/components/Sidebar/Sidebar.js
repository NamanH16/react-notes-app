import React from 'react'
import "./Sidebar.css"

function Sidebar({notes, onAddNote, onDeleteNote, currNote, setCurrNote}) {
  const sortedNotes  = notes.sort((a,b)=>b.lastModified-a.lastModified)
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
      {sortedNotes.map((note)=>(
        <div className={`app-sidebar-note ${note.id===currNote && "active"}`}
        onClick={()=>setCurrNote(note.id)}>
          <div className="sidebar-note-title">
            <strong>{note.title}</strong>
            <button onClick={()=>onDeleteNote(note.id)}>Delete</button>
          </div>
          <p>{note.body && note.body.substring(0,30)+"..."}</p>

          <small className='note-meta'>Last modified {new Date(note.lastModified).toLocaleDateString("en-GB",{
            hour: "2-digit",
            minute: "2-digit",
          })}</small>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Sidebar