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

interface State {
  users: User[];
  language: string;
  error: string | null;
}

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const users: User[] = useSelector((state: State) => state.users); 
  const language:string = useSelector((state: State) => state.language); 

  useEffect(() => {
    dispatch<any>(fetchUser());
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