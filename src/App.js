import React, { useState , useEffect} from "react"
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(localStorage.notes?JSON.parse(localStorage.notes):[]);
  const [currNote, setCurrNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes",JSON.stringify(notes));
  }, [notes])
  
  
  const onAddNote = () =>{
    const newNote = {
      id: uuid(),
      title: "Untitled Note", 
      body:"",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) =>{
    setNotes(notes.filter((note)=>note.id !== idToDelete));
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note)=>{
      if(note.id===currNote){
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArray);
  }

  const getCurrNote = () => {
    return notes.find((note)=>note.id===currNote);
  };

  return (
    <div className="App">
      <Sidebar 
        notes={notes}
        onAddNote = {onAddNote}
        onDeleteNote = {onDeleteNote}
        currNote={currNote}
        setCurrNote={setCurrNote}
      />
      <Main currNote={getCurrNote()} onUpdateNote={onUpdateNote}/>     
    </div>
  );
}

export default App;
