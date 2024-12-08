
import { useState } from 'react';
const BasicForm = () => {
    const [formObj, setFormValue]= useState({
        name: '',
        gender:'male'
    });

    const handleSubmit = (event) => {
      console.log("Event", event);
      event.preventDefault();
      alert(JSON.stringify(formObj));
    };

    const onChangeHandler=(event)=> {
        const { id,value, type } = event.target;
        if(type==='radio'){
            setFormValue((prevObj) => ({
                ...prevObj,
                ['gender']: value,
              }));
        }
        if(type==='radio'){
          setFormValue((prevObj) => ({
              ...prevObj,
              ['gender']: value,
            }));
      }
        else{
            setFormValue((prevObj) => ({
                ...prevObj,
                [id]: value,
              }));
        }
    }

  const handleSelect= (value) => {
    console.log("value", value);
  }
  return (
    // <form style={{ display: "block" }}>
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <div>min, max, minlength, maxlength, pattern,required</div>
      <input
        type="number"
        id="age"
        name="age"
        min="18"
        max="100"
        required
      ></input>
      <select value={2} onChange={handleSelect}>
        <option value={"1"}>Male</option>
        <option value={"2"}>Female</option>
        <option value={"3"}>NoOne</option>
      </select>
      <label htmlFor="start">Start date:</label>
      <input
        type="date"
        id="start"
        name="trip-start"
        value="2018-07-22"
        min="2018-01-01"
        max="2018-12-31"
      />
      <input
        type="text"
        id="username"
        name="username"
        minlength="3"
        maxlength="15"
        pattern="[A-Za-z0-9]+"
        required
        title="Username must be alphanumeric and 3-15 characters long."
      />
      <input
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        value="2018-06-12T19:30"
        min="2018-06-07T00:00"
        max="2018-06-14T00:00"
      />
      <label htmlFor="name">
        Name:
        <input id="name" type="text" onChange={onChangeHandler} required />
      </label>
      <label htmlFor="email">
        Email:
        <input id="email" type="email" onChange={onChangeHandler} required />
      </label>
      <label>
        Gender:
        <label htmlFor="male">
          Male{" "}
          <input
            id="male"
            type="radio"
            checked={formObj.gender === "male"}
            value={"male"}
            onChange={onChangeHandler}
          />
        </label>
        <label htmlFor="female">
          Female{" "}
          <input
            id="female"
            type="radio"
            value="female"
            checked={formObj.gender === "female"}
            onChange={onChangeHandler}
          />
        </label>
      </label>
      <label htmlFor="yes">
        Agree with Terms{" "}
        <input
          id="yes"
          type="checkbox"
          value="yes"
          checked={false}
          onChange={onChangeHandler}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm