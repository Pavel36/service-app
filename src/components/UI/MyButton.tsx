import React, { FC } from "react";

export enum ButtonVariant {
  submit = "submit",
  cancel = "cancel",
  danger = "danger",
}

interface IMyButtonProps {
  variant: ButtonVariant;
  onClick?: () => void
}

const MyButton: FC<IMyButtonProps> = ({ children, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
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
