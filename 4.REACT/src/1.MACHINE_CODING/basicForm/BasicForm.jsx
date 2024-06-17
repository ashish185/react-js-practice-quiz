
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
        else{
            setFormValue((prevObj) => ({
                ...prevObj,
                [id]: value,
              }));
        }
    }
  return (
    // <form style={{ display: "block" }}>
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
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
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        value="2018-06-12T19:30"
        min="2018-06-07T00:00"
        max="2018-06-14T00:00"
      />
      <label htmlFor="name">
        Name:
        <input id="name" type="text" onChange={onChangeHandler} />
      </label>
      <label htmlFor="email">
        Email:
        <input id="email" type="email" onChange={onChangeHandler} />
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