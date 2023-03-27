import React, {useEffect, useState} from "react";

const ListTodos = () => {
    useEffect(() => {
        const getTodos = async() => {
            try{
                const response = await fetch("http://localhost:5500/todos"); 
                
            } catch(err){
                console.error(err.message);
            }
        }
    })
  return (
    <>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
