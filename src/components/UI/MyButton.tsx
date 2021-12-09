import React, { FC, ReactChild, ReactNode } from "react";

export enum ButtonVariant {
  submit = "submit",
  cancel = "cancel",
  danger = "danger",
}

interface IMyButtonProps {
  children: ReactChild | ReactNode;
  variant: ButtonVariant;
}

const MyButton: FC<IMyButtonProps> = ({ children, variant }) => {
  return (
    <button
      style={{
        color: "#FFF",
        backgroundColor: "#7DB59A",
        borderRadius: "16px",
        cursor: "pointer",
        border: "none",
        fontSize: 18,
        padding: "10px 20px",
      }}
    >
      {children}
    </button>
  );
};

export default MyButton;
