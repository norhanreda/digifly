"use client";
import { useSelector } from "react-redux";
import "./footer.css"
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
export default function Footer () {
    const language:string = useSelector((state: State) => state.language); 
    return (
        <>
        <div className="footer">
            <footer>
            {language ==="en" &&
              <h3>All Rights Reseved &copy; Digifly 2024</h3>
            }
              {language ==="ar" &&
              <h3>جميع الحقوق محفوظة &copy;ديجى فلاى 2024 </h3>
            }
           
           
            </footer>
        </div>
        
        </>
    );
}