import React, { MouseEvent, ChangeEvent, FC, useState, useRef } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);

  // uncontrolled input
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(value); //for controlled input

    console.log(inputRef.current?.value); // for uncontrolled input

    setValue("");
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("is Dragged");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);

    console.log("is Dropped");
  };

  return (
    <div>
      <input
        type="text"
        name="controlled"
        placeholder="controlled"
        value={value}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="uncontrolled"
        placeholder="uncontrolled"
        ref={inputRef}
      />
      <button onClick={handleBtnClick}>IN CONSOLE</button>
      <hr />
      <div
        draggable
        onDrag={handleDrag}
        style={{ width: 200, height: 200, background: "tomato" }}
      ></div>
      <div
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "teal" : "gray",
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
