import { createSlice } from "@reduxjs/toolkit";

// Slice == Action + Reducer
// NoteSlice = NoteAction + NoteReducer

const initialState = {
  notes: [], //ชื่อของ state
};

const noteSlice = createSlice({
  name: "note", // ชื่อของ Action
  initialState: initialState,
  reducers: {
    addNote: (state, action) => {
      const newNotes = [...state.notes, action.payload];

      return { notes: newNotes };
    },
    deleteNote: (state, action) => {
      // const newNotes = state.notes.filter((note) => note.id !== action.payload);
      // return { notes: newNotes };

      //Mutable
      const foundedIndex = state.notes.filter(
        (note) => note.id !== action.payload
      );
      if (foundedIndex !== -1) {
        state.notes.splice(foundedIndex, 1);
      }
    },
  },
});

// AutoGenerate ActionCreator ==> noteSlice.actions
export const { addNote, deleteNote } = noteSlice.actions;
// dispatch(addNote(note))

//AutoGenerate NoteReducer ให้ด้วย
const noteReducer = noteSlice.reducer;

export default noteReducer;
