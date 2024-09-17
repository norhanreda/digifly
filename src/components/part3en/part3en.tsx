"use client";
import TextEditor from "../textEditor/texteditor";
import { useSelector } from "react-redux";
const Part3en: React.FC = () =>{
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
  
  const language:string = useSelector((state: State) => state.language); 
    return (
      <>
      <div className="container">
      
        {language ==="en"&& <div className="together"><hr className="line" />
        <h1 className="title">Part3</h1></div>}
      
        {language ==="ar"&& <div className="together" dir="rtl">
          <hr className="line" dir="rtl" />
        <h1 className="title" dir="rtl" >الجزء رقم 3</h1> 
        
        </div>
        
        }
        
        {language ==="en"&&
          <p>
        Implement a text editor that precisely replicates the Ul styles provided. It&apos;s essential to create the undo and redo functionalities from scratch, along with two additional features of your choice. You may use any package, but creating these functionalities from scratch will be advantageous. Ensure that all text editor functionalities are operational.
        </p>}
        {language ==="ar"&&
          <p dir="rtl">
           قم بتنفيذ محرر نصوص يكرر أنماط واجهة المستخدم المتوفرة بدقة. من الضروري إنشاء وظيفتي التراجع والإعادة من البداية، بالإضافة إلى ميزتين إضافيتين من اختيارك. يمكنك استخدام أي حزمة، ولكن إنشاء هذه الوظائف من البداية سيكون مفيدًا. تأكد من أن جميع وظائف محرر النصوص قيد التشغيل.
        </p>}
        <TextEditor/>
        </div>
      </>
    );
  };
  export default Part3en;