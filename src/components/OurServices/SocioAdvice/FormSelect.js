import React, { useState } from "react";

const FormSelect = () => {
  //initial value set to react
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState("description");
  const [text, setText] = useState("Title");
  const [framework, setFramework] = useState("react");

  function handleChange(e) {
    setFramework(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(framework);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Choose your framework</h3>

      <input
        placeholder="Title"
        type="text"
        value={title}
        onChange={setTitle}
      />

      <input
        placeholder="Description"
        type="text"
        value={description}
        onChange={setDescription}
      />

      <select onChange={handleChange} value={framework}>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </select>
      
      <texarea placeholder="text"
        type="textarea" value={text} onChange={setText} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSelect;
