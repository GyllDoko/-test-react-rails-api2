import React from "react";

export default function Details(props) {
  const item = props.location.data;
  console.log(item);
  return (
    <div>
      <p>Name: {item.name}</p>
      <p>Contenu: {item.content}</p>
    </div>
  );
}
