import { useState } from "react";
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePLayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";
  if (isEditing) {
    editablePLayerName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      />
    );

    // btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {editablePLayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
