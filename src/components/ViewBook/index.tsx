import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import Header from "../Header";

const ViewBook = () => {
  const bookData = useSelector((store: any) => store.bookReducer);
  const { id } = useParams();
  const book = bookData?.filter((item: any) => item.key == id);

  return (
    <>
      <Header isNodeEnvOn={false} goBack={true} />
      <div className={styles.viewContainer}>
        {book?.map((item: any) => (
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <div>Book Name :</div>
                <span> {item?.name}</span>
              </div>
              <div>
                <div>Published On :</div>
                <span>{item?.publicationDate}</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div>{item?.description}</div>
            </div>
            <div className={styles.cardFooter}>
              <div>
                <div>Published By :</div>
                <span> {item?.publisher}</span>
              </div>
              <div>
                <div>Price :</div>
                <span> {item?.price}</span>
              </div>
              <div>
                <div>Language :</div>
                <span>{item?.language}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewBook;
