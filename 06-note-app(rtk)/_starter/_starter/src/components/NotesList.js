import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { deleteNote } from "../redux/noteSlice";
import { useDispatch } from "react-redux";

import "./NotesList.css";

const NotesList = () => {
  const dispatch = useDispatch();
  const data = useSelector((stores) => stores.note);
  console.log("🚀 ~ file: NotesList.js:11 ~ NotesList ~ data:", data);
  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <>
      <h1>Notes List</h1>

      <div className="item-container">
        {data.notes.map((note) => (
          <div className="item-content" key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesList;
