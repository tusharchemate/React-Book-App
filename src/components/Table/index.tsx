import React from "react";
import { Button, Form, Input, InputNumber, Table } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../reducers/bookSlice";

interface Item {
  key: string;
  name: string;
  price: string;
  author: string;
  description: string;
  publicationDate: Date;
  publisher: string;
  language: string[];
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

interface TTableProps {
  originalData: Item[];
}

const TTable: React.FC<TTableProps> = (props) => {
  const { originalData } = props;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "10%",
      editable: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "10%",
      editable: true,
    },
    {
      title: "Author",
      dataIndex: "author",
      width: "10%",
      editable: true,
    },

    {
      title: "Description",
      dataIndex: "description",
      width: "25%",
      editable: true,
    },

    {
      title: "Publication Date",
      dataIndex: "publicationDate",
      width: "10%",
      editable: true,
    },
    {
      title: "Publisher",
      dataIndex: "publisher",
      width: "10%",
      editable: true,
    },
    {
      title: "Language",
      dataIndex: "language",
      width: "10%",
      editable: true,
    },

    {
      title: "Actions",
      dataIndex: "Actions",
      render: (_: any, record: Item) => {
        return (
          <>
            <span>
              <Link to={`/edit/${record.key}`} style={{ marginRight: 8 }}>
                <Button>Edit</Button>
              </Link>
            </span>
            <span>
              <Button
                onClick={() => dispatch(deleteBook(record.key))}
                style={{ marginRight: 8 }}
              >
                Delete
              </Button>
            </span>

            <span>
              <Link to={`/view/${record.key}`} style={{ marginRight: 8 }}>
                <Button>View</Button>
              </Link>
            </span>
          </>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === "price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={originalData}
        columns={mergedColumns}
        rowClassName="editable-row"
        // pagination={{
        //   onChange: cancel,
        // }}
      />
    </Form>
  );
};

export default TTable;
