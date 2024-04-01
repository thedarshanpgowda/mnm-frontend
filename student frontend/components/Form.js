import React, { useState } from "react";
import Chart from "./Chart";
import styles from "./Form.module.css";

export default function Form(props) {
  const [formdata, setformdata] = useState({
    question: "",
    id: "",
    hideUsn: false,
  });
  const changeHandler = (data, val) => {
    if (data === "message") {
      setformdata({ ...formdata, question: val });
    }
    if (data === "teacher") {
      setformdata({ ...formdata, id: val });
    }
    if (data === "checkbox") {
      setformdata({ ...formdata, hideUsn: !val });
    }
  };
  return (
    <Chart className={styles.primaryBlock}>
      <Chart className={styles.primaryContainer}>
        <Chart className={styles.inputBlock}>
          <textarea
            type="text"
            className={styles.message}
            placeholder="Message"
            onChange={(e) => {
              changeHandler("message", e.target.value);
            }}
          />
        </Chart>
        <Chart className={styles.inputBlock}>
          <input type="text" placeholder="Branch" className="" />
        </Chart>
        <Chart className={styles.inputBlock}>
          <input
            type="text"
            placeholder="Lecturer Name"
            className=""
            onChange={(e) => {
              changeHandler("teacher", e.target.value);
            }}
          />
        </Chart>
        <Chart className={styles.blockCheckbox}>
          <input
            type="checkbox"
            name="hide"
            id="hide"
            className={styles.checkbox}
            checked={formdata.hideUsn}
            onChange={(e) => {
              changeHandler("checkbox", formdata.hideUsn);
            }}
          />
          <label htmlFor="hide" className={styles.checkboxMessage}>
            Hide to details to lecturer
          </label>
        </Chart>
        <input
          type="submit"
          value="Submit"
          className={styles.button}
          onClick={(e) => {
            props.submitHandler(e, formdata);
          }}
        />
      </Chart>
    </Chart>
  );
}
