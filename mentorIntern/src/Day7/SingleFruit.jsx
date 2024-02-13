import React from "react";

const SingleFruit = ({ props }) => {
  return (
    <div>
        <h1>Fruits Table Using Map</h1>
      <table className="fruit-table">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.map((fruit) => (
            <tr key={fruit.id}>
              <td>{fruit.id}</td>
              <td >{fruit.name}</td>
              <td className="image">{fruit.emoji}</td>
              <td>{fruit.price}Rs/Kg</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SingleFruit;
