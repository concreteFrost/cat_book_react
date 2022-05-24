import s from "./News.module.css";
import New from "./New/New";
import { useState, useEffect } from "react";
import axios from "axios";

const ax = axios.create({
  baseURL: "https://catfact.ninja/facts?limit=5",
});

function News(props) {
  let [fact, setFact] = useState([]);

  useEffect(() => {
    ax.get().then((res) => {
      setFact(res.data.data);
    });
  }, []);

  return (
    <div className={s.main}>
      {fact.map((e) => {
        return <New article={e.fact} key={fact.indexOf(e)} />;
      })}
    </div>
  );
}

export default News;
