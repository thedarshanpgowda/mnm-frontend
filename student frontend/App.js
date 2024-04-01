import "./App.css";
import Form from "./components/Form";
import styles from "./components/Form.module.css";
import Chart from "./components/Chart";
import Secondary from "./components/Secondary";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "./components/Modal";

function App() {
  const [state, setState] = useState([]);
  const [view, setview] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/home", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c24iOiI0TUMyMUNTMDMwIiwidXNlclR5cGUiOiJzdHVkZW50IiwiaWF0IjoxNTE2MjM5MDIyfQ.CDYzjJr7EyIrzzcjZ9meRS42v9N3tEFGCaZdwlmCI80",
        },
      })
      .then((res) => setState(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = async (e, data) => {
    e.preventDefault();
    console.log(data);
    setview(true);
    await axios
      .post("http://localhost:3000/home", data, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c24iOiI0TUMyMUNTMDMwIiwidXNlclR5cGUiOiJzdHVkZW50IiwiaWF0IjoxNTE2MjM5MDIyfQ.CDYzjJr7EyIrzzcjZ9meRS42v9N3tEFGCaZdwlmCI80",
        },
      })
      .then((res) => console.log("success ", res))
      .catch((err) => console.log("error while posting the data ", err));
  };

  const onClose = () => {
    setview(false);
    window.location.reload();
  };
  return (
    <>
      <Chart className="nameBlock">Darshan SP | 4MC21CS041</Chart>
      <Chart className={styles.mainBlock}>
        <Form submitHandler={submitHandler} />
        <hr />
        <Secondary state={state} />
        {/* change this to state */}
        <Modal view={view} onClose={onClose} setview={setview}>
          <h2 className="answer heading">Success</h2>
          <p className="answer">Your querry is submitt.</p>
        </Modal>
      </Chart>
    </>
  );
}

export default App;
