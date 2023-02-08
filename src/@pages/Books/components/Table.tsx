import React from 'react';

export default function Table({ books }) {
  return (
    <div>
      {' '}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Writer</th>
            <th scope="col">Publisher</th>
            <th scope="col">Stock</th>
            <th scope="col">Purchase Price</th>
            <th scope="col">Sell Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={index}>
                <td>{book?.code || null}</td>
                <td>{book?.name || null}</td>
                <td>{book?.category || null}</td>
                <td>{book?.writer || null}</td>
                <td>{book?.publisher || null}</td>
                <td>{book?.qty || null}</td>
                <td>{book?.purchasePrice || null}</td>
                <td>{book?.sellPrice || null}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
