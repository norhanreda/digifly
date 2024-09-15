

// //////////////////////////////////////////////
// "use client";
// import React, { useState } from 'react';
// import './texteditor.css';

// const TextEditor = () => {
//   const [content, setContent] = useState('');
//   const [isBold, setIsBold] = useState(false);
//   const [isItalic, setIsItalic] = useState(false);
//   const [isUnderline, setIsUnderline] = useState(false);
//   const [fontSize, setFontSize] = useState(16);
//   const [fontFamily, setFontFamily] = useState('Arial');
//   const [textAlign, setTextAlign] = useState('left');
//   const [history, setHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);

//   const handleTextChange = (e) => {
//     const newContent = e.target.value;
//     setContent(newContent);
//     setHistory([...history.slice(0, historyIndex + 1), newContent]);
//     setHistoryIndex(historyIndex + 1);
//   };

//   const undo = () => {
//     if (historyIndex > 0) {
//       setHistoryIndex(historyIndex - 1);
//       setContent(history[historyIndex - 1]);
//     }
//   };

//   const redo = () => {
//     if (historyIndex < history.length - 1) {
//       setHistoryIndex(historyIndex + 1);
//       setContent(history[historyIndex + 1]);
//     }
//   };

//   const toggleBold = () => {
//     setIsBold(!isBold);
//   };

//   const toggleItalic = () => {
//     setIsItalic(!isItalic);
//   };

//   const toggleUnderline = () => {
//     setIsUnderline(!isUnderline);
//   };

//   const changeFontSize = (size) => {
//     setFontSize(size);
//   };

//   const changeFontFamily = (font) => {
//     setFontFamily(font);
//   };

//   const alignText = (alignment) => {
//     setTextAlign(alignment);
//   };



//   return (
//     <div className="editor">
//       <div className="toolbar">
//         <button onClick={toggleBold}><b>B</b></button>
//         <button onClick={toggleItalic}><i>I</i></button>
//         <button onClick={toggleUnderline}><u>U</u></button>
//         <select onChange={(e) => changeFontSize(parseInt(e.target.value))}>
//           <option value="16">Font Size</option>
//           <option value="12">12px</option>
//           <option value="16">16px</option>
//           <option value="20">20px</option>
//         </select>
//         <select onChange={(e) => changeFontFamily(e.target.value)}>
//           <option value="Arial">Arial</option>
//           <option value="Times New Roman">Times New Roman</option>
//           <option value="Courier New">Courier New</option>
//         </select>
//         <button onClick={() => alignText('left')}>Left Align</button>
//         <button onClick={() => alignText('center')}>Center Align</button>
//         <button onClick={() => alignText('right')}>Right Align</button>
//         <button onClick={undo}>Undo</button>
//         <button onClick={redo}>Redo</button>
//       </div>
//       <textarea
//         className={`editor-content ${isBold ? 'bold' : ''} ${isItalic ? 'italic' : ''} ${isUnderline ? 'underline' : ''}`}
//         style={{ fontSize: `${fontSize}px`, fontFamily: fontFamily, textAlign: textAlign }}
//         value={content}
//         onChange={handleTextChange}
//         placeholder="Enter your text here..."
//       />
//     </div>
//   );
// };

// export default TextEditor;

// "use client";
// import React, { useState, useEffect } from 'react';
// import './texteditor.css';

// const TextEditor = () => {
//   const [content, setContent] = useState('');
//   const [isBold, setIsBold] = useState(false);
//   const [isItalic, setIsItalic] = useState(false);
//   const [isUnderline, setIsUnderline] = useState(false);
//   const [fontSize, setFontSize] = useState(16);
//   const [fontFamily, setFontFamily] = useState('Arial');
//   const [textAlign, setTextAlign] = useState('left');
//   const [history, setHistory] = useState(['']);
//   const [historyIndex, setHistoryIndex] = useState(0);

//   const handleTextChange = (e) => {
//     const newContent = e.target.value;

//     if (newContent !== history[historyIndex]) {
//       setContent(newContent);
//        console.log(newContent)
//       // Push the new content to history and update the index
//       const newHistory = [...history.slice(0, historyIndex + 1), newContent];
//       setHistory(newHistory);
//       setHistoryIndex(newHistory.length - 1);
//     }
//   };

//   const undo = () => {
//     if (historyIndex > 0) {
//       setHistoryIndex(historyIndex - 1);
//       setContent(history[historyIndex - 1]);
//     }
//   };

//   const redo = () => {
//     if (historyIndex < history.length - 1) {
//       setHistoryIndex(historyIndex + 1);
//       setContent(history[historyIndex + 1]);
//     }
//   };

//   const toggleBold = () => setIsBold(!isBold);
//   const toggleItalic = () => setIsItalic(!isItalic);
//   const toggleUnderline = () => setIsUnderline(!isUnderline);

//   const changeFontSize = (size) => setFontSize(size);
//   const changeFontFamily = (font) => setFontFamily(font);
//   const alignText = (alignment) => setTextAlign(alignment);

//   return (
//     <div className="editor">
//       <div className="toolbar">
//         <button onClick={toggleBold}><b>B</b></button>
//         <button onClick={toggleItalic}><i>I</i></button>
//         <button onClick={toggleUnderline}><u>U</u></button>
//         <select onChange={(e) => changeFontSize(parseInt(e.target.value))}>
//           <option value="16">Font Size</option>
//           <option value="12">12px</option>
//           <option value="16">16px</option>
//           <option value="20">20px</option>
//         </select>
//         <select onChange={(e) => changeFontFamily(e.target.value)}>
//           <option value="Arial">Arial</option>
//           <option value="Times New Roman">Times New Roman</option>
//           <option value="Courier New">Courier New</option>
//         </select>
//         <button onClick={() => alignText('left')}>Left Align</button>
//         <button onClick={() => alignText('center')}>Center Align</button>
//         <button onClick={() => alignText('right')}>Right Align</button>
//         <button onClick={undo} disabled={historyIndex === 0}>Undo</button>
//         <button onClick={redo} disabled={historyIndex === history.length - 1}>Redo</button>
//       </div>
//       <textarea
//         className={`editor-content ${isBold ? 'bold' : ''} ${isItalic ? 'italic' : ''} ${isUnderline ? 'underline' : ''}`}
//         style={{ fontSize: `${fontSize}px`, fontFamily: fontFamily, textAlign: textAlign }}
//         value={content}
//         onChange={handleTextChange}
//         placeholder="Enter your text here..."
//       />
//     </div>
//   );
// };

// export default TextEditor;

//////////////////////////////////////////////
"use client";
import React, { useState } from 'react';
import './texteditor.css';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [textAlign, setTextAlign] = useState('left');
  const [history, setHistory] = useState([{
    content: '',
    isBold: false,
    isItalic: false,
    isUnderline: false,
    fontSize: 16,
    fontFamily: 'Arial',
    textAlign: 'left',
  }]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Save the current state to history
  const saveToHistory = (newState) => {
    const newHistory = [...history.slice(0, historyIndex + 1), newState];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleTextChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);

    // Save the new content state to history
    saveToHistory({
      content: newContent,
      isBold,
      isItalic,
      isUnderline,
      fontSize,
      fontFamily,
      textAlign,
    });
  };

  const undo = () => {
    if (historyIndex > 0) {
      const previousState = history[historyIndex - 1];
      setHistoryIndex(historyIndex - 1);
      applyEditorState(previousState);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setHistoryIndex(historyIndex + 1);
      applyEditorState(nextState);
    }
  };

  const applyEditorState = (state) => {
    setContent(state.content);
    setIsBold(state.isBold);
    setIsItalic(state.isItalic);
    setIsUnderline(state.isUnderline);
    setFontSize(state.fontSize);
    setFontFamily(state.fontFamily);
    setTextAlign(state.textAlign);
  };

  const toggleBold = () => {
    const newBoldState = !isBold;
    setIsBold(newBoldState);
    saveToHistory({
      content,
      isBold: newBoldState,
      isItalic,
      isUnderline,
      fontSize,
      fontFamily,
      textAlign,
    });
  };

  const toggleItalic = () => {
    const newItalicState = !isItalic;
    setIsItalic(newItalicState);
    saveToHistory({
      content,
      isBold,
      isItalic: newItalicState,
      isUnderline,
      fontSize,
      fontFamily,
      textAlign,
    });
  };

  const toggleUnderline = () => {
    const newUnderlineState = !isUnderline;
    setIsUnderline(newUnderlineState);
    saveToHistory({
      content,
      isBold,
      isItalic,
      isUnderline: newUnderlineState,
      fontSize,
      fontFamily,
      textAlign,
    });
  };

  const changeFontSize = (size) => {
    setFontSize(size);
    saveToHistory({
      content,
      isBold,
      isItalic,
      isUnderline,
      fontSize: size,
      fontFamily,
      textAlign,
    });
  };

  const changeFontFamily = (font) => {
    setFontFamily(font);
    saveToHistory({
      content,
      isBold,
      isItalic,
      isUnderline,
      fontSize,
      fontFamily: font,
      textAlign,
    });
  };

  const alignText = (alignment) => {
    setTextAlign(alignment);
    saveToHistory({
      content,
      isBold,
      isItalic,
      isUnderline,
      fontSize,
      fontFamily,
      textAlign: alignment,
    });
  };

  return (
    <div className="editor">
      <div className="toolbar">
        <button onClick={toggleBold}><b>B</b></button>
        <button onClick={toggleItalic}><i>I</i></button>
        <button onClick={toggleUnderline}><u>U</u></button>
        <select onChange={(e) => changeFontSize(parseInt(e.target.value))}>
          <option value="16">Font Size</option>
          <option value="12">12px</option>
          <option value="16">16px</option>
          <option value="20">20px</option>
        </select>
        <select onChange={(e) => changeFontFamily(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
        <button onClick={() => alignText('left')}>Left Align</button>
        <button onClick={() => alignText('center')}>Center Align</button>
        <button onClick={() => alignText('right')}>Right Align</button>
        <button onClick={undo} disabled={historyIndex === 0}>Undo</button>
        <button onClick={redo} disabled={historyIndex === history.length - 1}>Redo</button>
      </div>
      <textarea
        className={`editor-content ${isBold ? 'bold' : ''} ${isItalic ? 'italic' : ''} ${isUnderline ? 'underline' : ''}`}
        style={{ fontSize: `${fontSize}px`, fontFamily: fontFamily, textAlign: textAlign }}
        value={content}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
    </div>
  );
};

export default TextEditor;
