import React from "react";
import { Button } from "antd";
import styles from "./index.module.scss"; // Replace with the correct CSS module path
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface HeaderProps {
  isNodeEnvOn: boolean;
  goBack?: boolean; // Optional prop for "go back" button
}

const Header: React.FC<HeaderProps> = (props) => {
  const { isNodeEnvOn, goBack } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      {goBack ? (
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate("/")} type="default">
          Back
        </Button>
      ) : (
        <>
          <h1>React with Typescript and Webpack By - Tushar</h1>
          {isNodeEnvOn && (
            <h3
              className={`${
                process.env.NODE_ENV === "development"
                  ? styles.dev
                  : styles.prod
              }`}
            >
              Mode: {process.env.NODE_ENV}
            </h3>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
