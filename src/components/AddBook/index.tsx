import { useDispatch, useSelector } from "react-redux";
import { addBook, editBook } from "../../reducers/bookSlice";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.scss";
import Header from "../Header";
import { message } from "antd";

const AddBooks = (props: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const bookData = useSelector((store: any) => store.bookReducer);
  const bookToEdit = bookData.find((book: any) => book.key == id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const bookId = uuid();
    const bookData = {
      ...data,
      key: bookId,
    };

    const editBookdata = {
      ...data,
      key: id,
    };

    if (id) {
      dispatch(editBook(editBookdata));
      message.success("Book Updated Successfully !");
    } else {
      dispatch(addBook(bookData));
      message.success("Book Added Successfully !");
    }
    navigate("/");
  };

  return (
    <>
      <Header isNodeEnvOn={false} />
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>{id ? "Update" : "Add"} Book</h2>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              defaultValue={bookToEdit ? bookToEdit.name : ""}
              {...register("name", { required: true, maxLength: 80 })}
            />
            {errors.name && (
              <div className={styles.errorText}> *Name is required</div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Author"
              className={styles.input}
              defaultValue={bookToEdit ? bookToEdit.author : ""}
              {...register("author", { required: true, maxLength: 100 })}
            />
            {errors.author && (
              <div className={styles.errorText}>* Author is required</div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="number"
              placeholder="Price"
              className={styles.input}
              defaultValue={bookToEdit ? bookToEdit.price : ""}
              {...register("price", { required: true })}
            />
            {errors.price && (
              <div className={styles.errorText}>* Price is required</div>
            )}
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Description"
              className={styles.input}
              defaultValue={bookToEdit ? bookToEdit.description : ""}
              {...register("description", { required: true, maxLength: 200 })}
            />
            {errors.description && (
              <div className={styles.errorText}> * Description is required</div>
            )}
          </div>

          <div className={styles.inputContainer}>
            <input
              type="Date"
              placeholder="Publication Date"
              className={styles.input}
              defaultValue={bookToEdit ? bookToEdit.publicationDate : ""}
              {...register("publicationDate", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.publicationDate && (
              <div className={styles.errorText}>
                * Publication Date is required
              </div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Publisher"
              className={styles.input}
              defaultValue={bookToEdit ? bookToEdit.publisher : ""}
              {...register("publisher", { required: true })}
            />
            {errors.publisher && (
              <div className={styles.errorText}>* Publisher is required</div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Language"
              className={styles.input}
              defaultValue={bookToEdit ? bookToEdit.language : ""}
              {...register("language", { required: true })}
            />
            {errors.language && (
              <div className={styles.errorText}>* Language is required</div>
            )}
          </div>
          <input className={styles.button} type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddBooks;
