

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
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleTextChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    setHistory([...history.slice(0, historyIndex + 1), newContent]);
    setHistoryIndex(historyIndex + 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setContent(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setContent(history[historyIndex + 1]);
    }
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
  };

  const changeFontFamily = (font) => {
    setFontFamily(font);
  };

  const alignText = (alignment) => {
    setTextAlign(alignment);
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
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
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