"use client";
import Map from "../map/map"
import { useSelector } from "react-redux";
export default function Part2en() {
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
        <h1 className="title">Part 2</h1></div>}
      
        {language ==="ar"&& <div className="together" dir="rtl">
          <hr className="line" dir="rtl" />
        <h1 className="title" dir="rtl" >الجزء رقم 2</h1> 
        
        </div>
        
        }
       {language ==="en"&&
       <p>
       Implement a map using any library of your choice (Leaflet is recommended). Search for the coordinates of &apos;Digifly Company&apos; on Google Maps, then place a tooltip at these coordinates. Ensure that the tooltip styling matches the provided design below.
       </p>
       }
        
  {language ==="ar"&&
        <p dir="rtl">قم بتنفيذ الخريطة باستخدام أي مكتبة من اختيارك يوصى باستخدام (Leaflet). ابحث عن إحداثيات &apos;شركة Digifly&apos; على خرائط Google، ثم ضع تلميحا على هذه الإحداثيات تأكد من أن تصميم تلميح الأدوات يتطابق مع التصميم المقدم أدناه.</p>
  }
     <Map />
     </div>
      </>
    );
  }
  