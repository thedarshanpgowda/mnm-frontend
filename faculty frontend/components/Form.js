import React from "react";
import Chart from "./Chart";
import styles from "./Form.module.css";

export default function Form(props) {
  return (
    <Chart className={styles.primaryBlock}>
      {!props.display ? (
        <Chart className={styles.primaryContainer}>
          <div className="question">Q: {props.message.question}</div>
          <Chart className={styles.inputBlock}>
            <textarea
              type="text"
              className={styles.message}
              placeholder="Message"
              onChange={(e) => {
                props.setmessage({ ...props.message, answer: e.target.value });
                console.log(props.message);
              }}
            />
          </Chart>
          <input
            type="submit"
            value="Submit"
            className={styles.button}
            onClick={(e) => {
              props.submitHandler(e);
            }}
          />
        </Chart>
      ) : (
        <Chart className = "answer"> Hello Dr Raju SP, Hope you are having a great day. </Chart>
      )}
    </Chart>
  );
}
