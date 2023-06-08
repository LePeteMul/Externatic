import React, { useState } from "react";
import HeaderWave from "../Header/HeaderWave";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <HeaderWave open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </div>
  );
}

export default NavBar;
