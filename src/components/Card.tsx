import React, { FC } from "react";

export enum CardOption {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height?: string;
  children?: React.ReactNode;
  option: CardOption;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ width, height, children, option, onClick }) => {
  return (
    <div
      style={{
        width,
        height,
        background: option === CardOption.primary ? "teal" : "lightgrey",
        border: option === CardOption.outlined ? "2px solid grey" : "none",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
