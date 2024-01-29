import React, { useState } from "react";

const ItemList = ({ items, onEdit, onDelete }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.isEditing ? (
            <>
              <input
                type="text"
                value={item.text}
                onChange={(e) => onEdit(index, e.target.value)}
              />
              <button onClick={() => onEdit(index, "")}>Cancel</button>
            </>
          ) : (
            <>
              <span>{item.text}</span>
              <button onClick={() => onEdit(index, item.text)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [items, setItems] = useState([
    { text: "Item 1", isEditing: false },
    { text: "Item 2", isEditing: false },
  ]);

  const handleAddItem = () => {
    const newItem = { text: "New Item", isEditing: false };
    setItems([...items, newItem]);
  };

  const handleEditItem = (index, newText) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...items[index],
      text: newText,
      isEditing: !items[index].isEditing,
    };
    setItems(updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Item List</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <ItemList
        items={items}
        onEdit={handleEditItem}
        onDelete={handleDeleteItem}
      />
    </div>
  );
};

export default App;
