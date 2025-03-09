import React, { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editInput, setEditInput] = useState("");

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, { name: input, bought: false }]);
      setInput("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const toggleBought = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditInput(items[index].name);
  };

  const saveEdit = () => {
    if (editInput.trim() !== "") {
      setItems(
        items.map((item, i) =>
          i === editingIndex ? { ...item, name: editInput } : item
        )
      );
      setEditingIndex(null);
      setEditInput("");
    }
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <input
        className="input-field"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new item"
        
      />
      <button onClick={addItem} className="add-button">Add</button>
      <ul className="shopping-list">
        {items.map((item, index) => (
          <li
            key={index}
            className={`list-item ${item.bought ? "bought" : ""}`}
          >
            {editingIndex === index ? (
              <input
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                onBlur={saveEdit}
                autoFocus
              />
            ) : (
              <span onClick={() => toggleBought(index)}>{item.name}</span>
            )}
            <div className="button-group">
              <button onClick={() => removeItem(index)} className="remove-button">Remove</button>
              {editingIndex === index ? null : (
                <button onClick={() => startEditing(index)} className="edit-button">Edit</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
