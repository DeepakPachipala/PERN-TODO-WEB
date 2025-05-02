import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center  mt-5">PERN TODO LIST</h1>
      <form className="d-flex mt-5 px-9" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            boxShadow: '0 0 5px rgba(255, 182, 193, 0)',
            transition: 'box-shadow 0.3s ease',
            marginRight: '10px', // Adjust as needed
            padding: '10px', // Adjust as needed
            borderRadius: '5px', // Adjust as needed
            border: '1px solid #ccc', // Adjust as needed
            outline: 'none', // Remove default focus outline
          }}
          onFocus={(e) => {
            e.target.style.boxShadow = '0 0 50px rgba(255, 182, 193, 0.5)';
          }}
          onBlur={(e) => {
            e.target.style.boxShadow = '0 0 50px rgba(255, 182, 193, 0)';
          }}
        />
        <button
          className="btn btn-success"
          style={{
            fontSize: "16px", // Adjust as needed
            padding: "10px 50px", // Adjust as needed
            borderRadius: "5px", // Adjust as needed
          }}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default InputTodo;
