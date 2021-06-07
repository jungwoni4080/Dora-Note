//Youtube: Build a Notes App with React.js 동영상을 거의 따라하다시피 따라하는중
import './App.css';

import Sidebar from "./Sidebar"
import Main from "./Main"
import {useState} from "react";

function App() {

  const [notes, setNotes] = useState([]);

  const onAddNote= () => {
    const newNote = {
      id:  //UUID를 설치해서 고유 ID값을 주려는 것인가..!
      title:
      body:
      lastModified:
    }
  }

  return (
    <div className="App">
      <Sidebar notes = {notes} onAddNote={onAddNote} />
      <Main />
    </div>
  );
}

export default App;
