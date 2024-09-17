export interface User {
    id: number;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
  }
  
 export  interface State {
    users: User[];
    language: string;
    error: string | null;
  }

 export interface FormData {
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
  }
  export type TextAlign = 'left' | 'center' | 'right';
  export interface EditorState {
    content: string;
    isBold: boolean;
    isItalic: boolean;
    isUnderline: boolean;
    fontSize: number;
    fontFamily: string;
    textAlign: TextAlign;
  }
