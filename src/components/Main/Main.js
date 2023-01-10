import React from 'react'
import ReactMarkdown from 'react-markdown';
import "./Main.css"

function Main({currNote, onUpdateNote}) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...currNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if(!currNote){
    return <div className='no-active-note'>No note selected</div>
  }

  return (
    <div className='app-main'>
      <div className="app-main-note-edit">
        <input type="text" value={currNote.title} onChange={(e)=>onEditField("title",e.target.value)} id="title" autoFocus/>
        <textarea id="body" cols="30" rows="10" value={currNote.body} onChange={(e)=>onEditField("body",e.target.value)}></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{currNote.title}</h1>
          <ReactMarkdown className="markdown-preview">
            {currNote.body}
          </ReactMarkdown>
      </div>
    </div>
  )
}

export default Main