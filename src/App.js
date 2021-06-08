//Youtube: Build a Notes App with React.js 동영상을 거의 따라하다시피 따라하는중
import './App.css';

import Sidebar from "./Sidebar"
import Main from "./Main"
import {useState} from "react";
import uuid from "react-uuid";

function App() {

  const [notes, setNotes] = useState([]);
  const[activeNote, setActiveNote] = useState(false);


  const onAddNote= () => {
    const newNote = {
      id: uuid(),  //UUID를 설치해서 고유 ID값을 주려는 것인가..!
      title: "Untitled Note" ,
      body: "",
      lastModified: Date.now(),
    }

    setNotes([newNote, ...notes]);
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete )) //idToDelete가 아닌 것만 filtering해서 표시하기
  }


  const getActiveNote = ( ) => {
    return notes.find((note) => note.id === activeNote);
  }

  

  return (
    <div className="App">
      <Sidebar 
        notes = {notes} 
        onAddNote={onAddNote} 
        onDeleteNote={onDeleteNote}
        activeNote = {activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
