import Header from "../components/Header";
import { Button, Input } from "antd";
import TTable from "../components/Table/";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const BookContainer = () => {
  const bookData = useSelector((store: any) => store.bookReducer);
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState();

  const onInputChange = (value: any) => {
    if (value) {
      const filteredData = bookData.filter((book: any) =>
        book.name.toLowerCase().includes(value.trim().toLowerCase())
      );
      setSearchData(filteredData);
    } else {
      setSearchData(bookData);
    }
  };

  return (
    <>
      <Header isNodeEnvOn={false} />
      <div className={styles.utility}>
        <Input
          className={styles.searchBar}
          placeholder="Search Book"
          onChange={(e) => onInputChange(e.target.value)}
        />
        <Button onClick={() => navigate("/addBook")} className={styles.btn}>
          {" "}
          Add Book{" "}
        </Button>
      </div>
      <TTable originalData={searchData ? searchData : bookData} />
    </>
  );
};

export default BookContainer;
