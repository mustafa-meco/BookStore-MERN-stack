import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// TODOs for ShowBook
// 1. Add PropTypes
// 2. Add default props
// 3. Add tests
// 4. Add storybook
// 5. Add styles
// ideas for this page
// 1. Add a button to edit this book
// 2. Add a button to delete this book
// 3. Add a button to go back to home page
// 4. Add a button to go back to previous page
// 5. Add a button to go to next page
// other ideas
// 1. Add a modal to show book details
// 2. Add a modal to confirm delete
// 3. Add a modal to confirm edit
// 4. Add a modal to confirm go back
// 5. Add a modal to confirm go to next page
// 6. Add a modal to confirm go to previous page
// 7. Add a modal to confirm go to home page
// creative ideas for show book page
// 1. Add a dark mode
// 2. Add a light mode
// 3. Add a toggle button for dark and light mode

export default ShowBook;
