import React, { useState } from "react";

function InputResume() {
  const [resume, setResume] = useState("");

  const handleClickResume = () => {
    setResume("");
  };

  const handleChangeResume = (event) => {
    setResume(event.target.value);
  };

  return (
    <div className="InputResume">
      <input
        type="text"
        value={resume}
        onChange={handleChangeResume}
        onClick={handleClickResume}
      />
    </div>
  );
}

export default InputResume;
