import React, {
    //  useState,
      useEffect
     } from "react";
// import axios from "axios";
import { useFormState } from "react-use-form-state";

// import Spinner from "../../Spinner";

// const apiSocioadvicesUrl = "http://localhost:4001/socioadvices";

export default function FormSelect2(props) {
  const [formState, { text, select, textarea }] = useFormState();
  console.log("formState.values:", formState.values);
  //   console.log("formState.validity:", formState.validity);
  //   console.log("formState.touched:", formState.touched);

//   const [data, setData] = useState([]);
//   const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await axios(apiSocioadvicesUrl);
    //   setData(result.data);
    //   setShowLoading(false);
    // };

    // fetchData();
  }, []);

//   const showDetail = (id) => {
//     props.history.push({
//       pathname: "/show/" + id,
//     });
//   };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input {...text("title")} placeholder="Title" />
      <input {...text("description")} placeholder="description" />
      <select {...select("trip")}>
        <option value="&#9989;">✅ Жирная незакрашенная галочка</option>
        <option value="&#10004;">✔ Жирная галочка</option>
        <option value="&#9749;">☕ Чашка чая / кофе</option>
        <option value="&#10071;">❗</option>
        <option value="&#10067;">❓</option>
        <option value="&#128226;">📢</option>
        <option value="&#9997;">✍ Рука с ручкой</option>
        <option value="&#128073;">👉</option>
        <option value="&#128077;">👍</option>
        <option value="&#9757;">☝️</option>
        <option value="&#129330;">🤲</option>
        <option value="&#129309;">🤝</option>
        <option value="&#128591;">🙏</option>
        <option value="&#128204;">📌</option>
      </select>
      <input {...text("text")} placeholder="text" />
      <textarea
        {...textarea("textarea")}
        id="story"
        name="text"
        spellcheck="true"
        placeholder="You text..."
      />
      {/* <input {...password('password')} required minLength="8" /> */}
      {/* <input {...radio('plan', 'free')} /> */}
      {/* <input {...radio('plan', 'premium')} /> */}
    </form>
  );
}

// 📣🔔⚠‼✔☑😀☎⏰🕰📎🔍👑🎁🎉📍🖋✏✅⁉❔❕🆗➡🔘▪◾▫🇺🇦🚩
