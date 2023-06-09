import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function MenuList() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (!selectedItems.find((selectedItem) => selectedItem.value === item)) {
      setSelectedItems([...selectedItems, { key: uuid(), value: item }]);
    }
  };

  const handleButtonClick = (index) => {
    const updatedItems = selectedItems.filter((_, i) => i !== index);
    setSelectedItems(updatedItems);
  };

  return (
    <div className="LanguageList">
      <h3>Language</h3>
      <select onChange={(e) => handleItemClick(e.target.value)}>
        <option value="">Sélectionnez un élément</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="C++">C++</option>
        <option value="Ruby">Ruby</option>
        <option value="C#">C#</option>
        <option value="PHP">PHP</option>
        <option value="Swift">Swift</option>
        <option value="Go">Go</option>
        <option value="TypeScrip">TypeScript</option>
        <option value="Rust">Rust</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Scala">Scala</option>
        <option value="Perl">Perl</option>
        <option value="Haskell">Haskell</option>
        <option value="Lua">Lua</option>
        <option value="R">R</option>
        <option value="Matla">Matlab</option>
        <option value="VB.NET">VB.NET</option>
        <option value="Delphi">Delphi</option>
      </select>

      <div className="buttonLanguage">
        {" "}
        {selectedItems.map((item, index) => (
          <div key={item.key}>
            <button
              className="language"
              onClick={() => handleButtonClick(index)}
              type="button"
            >
              {item.value}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
