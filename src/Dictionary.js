import axios from "axios";
import React, { useState } from "react";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleRersponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
    let apiUrl = ` https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleRersponse);
  }
  function handlekeywordchange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handlekeywordchange} />
      </form>
    </div>
  );
}
