import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [
  {
    key: 1,
    name: "Java E Book",
    price: "1240 INR",
    author: "Y.Putta",
    description:
      "This book assumes no background in object-oriented design. If you know object-oriented programming, in fact, the first couple of days will be easy for you.This book assumes no background in object-oriented design. If you know object-oriented programming, in fact, the first couple of days will be easy for you.",
    publicationDate: "10/10/2023",
    publisher: "Virat Kohli",
    language: "English/ Telegu",
  },
  {
    key: 2,
    name: "React - Guide",
    price: "320 INR",
    author: "Ikram",
    description:
      "This book assumes no background in object-oriented design. If you know object-oriented programming, in fact, the first couple of days will be easy for you.This book assumes no background in object-oriented design. If you know object-oriented programming, in fact, the first couple of days will be easy for you.",
    publicationDate: "10/10/2023",
    publisher: "Virat Kohli",
    language: "Tamil",
  },
];
const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },

    deleteBook: (state, action) => {
      const keyToDelete = action.payload;
      return state.filter((book: any) => book.key !== keyToDelete);
    },

    viewBook: (state, action) => {
      const keyToView = action.payload;
      return state.filter((book: any) => book.key == keyToView);
    },

    editBook: (state, action) => {
      const {
        key,
        name,
        author,
        price,
        publisher,
        language,
        publicationDate,
        description,
      } = action.payload;
      return state.map((book: any) => {
        if (book.key == key) {
          return {
            ...book,
            name,
            author,
            price,
            publisher,
            language,
            publicationDate,
            description,
          };
        }
        return book;
      });
    },
  },
});

export const { addBook, editBook, deleteBook, viewBook } = BookSlice.actions;
export default BookSlice.reducer;
