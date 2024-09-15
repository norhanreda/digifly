"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/action";
import "./table.css"
interface User {
  id: number;
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
}

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const users: User[] = useSelector((state: any) => state.users); 

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <div className="col">
        <h3 className="results">Results:</h3>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Mobile Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user.id}>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.Phone}</td>
                <td>{user.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;