"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { fetchUser } from "../../store/action";
import "./table.css"
import {State,User} from "../../store/types";



const Table: React.FC = () => {
  const dispatch = useAppDispatch();
  const users: User[] = useAppSelector((state: State) => state.users); 
  const language:string = useAppSelector((state: State) => state.language); 

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  

  return (
    <>
      {language==="en" && <div className="col">
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
}
{language==="ar" && <div className="col" dir="rtl">
        <h3 className="results">النتائج:</h3>
        <table>
          <thead>
            <tr>
              <th>الإسم الأول </th>
              <th>الإسم الأخير</th>
              <th>رقم الموبايل</th>
              <th>البريد الإلكترونى</th>
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
}
    </>
  );
};

export default Table;