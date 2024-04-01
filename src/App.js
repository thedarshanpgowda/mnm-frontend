import "./App.css";
import Form from "./components/Form";
import styles from "./components/Form.module.css";
import Chart from "./components/Chart";
import Secondary from "./components/Secondary";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState([]);
  const [display, setDisplay] = useState(true)
  useEffect(() => {
    axios
      .get("http://localhost:3000/faculty/home", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxQ1MwMDEiLCJ1c2VyVHlwZSI6ImZhY3VsdHkiLCJpYXQiOjE1MTYyMzkwMjJ9.t3vKgqQRc4r9_hCS5xgJNcko19cjFrCH-bZ-d7YuR_w",
        },
      })
      .then((res) => setState(res.data.data))
      .catch((err) => console.log(err));
  }, []);


  const [message, setmessage] = useState({
    question: "",
    qid: "",
    answer: ""
  });

  const questionHandler = (data, id) => {
    setmessage({ ...message, question: data, qid: id });
    setDisplay(false)
    console.log(message);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(message);
    await axios
      .post("http://localhost:3000/faculty/home", message, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxQ1MwMDEiLCJ1c2VyVHlwZSI6ImZhY3VsdHkiLCJpYXQiOjE1MTYyMzkwMjJ9.t3vKgqQRc4r9_hCS5xgJNcko19cjFrCH-bZ-d7YuR_w",
        },
      })
      .then((res) => console.log("success posting the solution"))
      .catch((e) => console.log("error while posting the solution"));

    window.location.reload();
  };

  return (
    <>
      <Chart className="nameBlock">Dr Raju SP | PHY06</Chart>
      <Chart className={styles.mainBlock}>
        <Form
          message={message}
          setmessage={setmessage}
          submitHandler={submitHandler}
          display = {display}
        />
        <hr />
        <Secondary state={state} questionHandler={questionHandler} />
      </Chart>
    </>
  );
}

export default App;
