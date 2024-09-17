
"use client";
import React, { useState } from 'react';
import './texteditor.css';
import {EditorState,TextAlign} from "../../store/types";

const TextEditor: React.FC = () => {
  // type TextAlign = 'left' | 'center' | 'right'; // Define TextAlign type
  const [content, setContent] = useState<string>('');
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [isUnderline, setIsUnderline] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontFamily, setFontFamily] = useState<string>('Arial');
  const [textAlign, setTextAlign] = useState<TextAlign>('left');
  const [history, setHistory] = useState<EditorState[]>([
    {
      content: '',
      isBold: false,
      isItalic: false,
      isUnderline: false,
      fontSize: 16,
      fontFamily: 'Arial',
      textAlign: 'left',
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const saveToHistory = (newState: EditorState): void => {
    const newHistory = [...history.slice(0, historyIndex + 1), newState];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const newContent = e.target.value;
    setContent(newContent);
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

  const undo = (): void => {
    if (historyIndex > 0) {
      const previousState = history[historyIndex - 1];
      setHistoryIndex(historyIndex - 1);
      applyEditorState(previousState);
    }
  };

  const redo = (): void => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setHistoryIndex(historyIndex + 1);
      applyEditorState(nextState);
    }
  };

  const applyEditorState = (state: EditorState): void => {
    setContent(state.content);
    setIsBold(state.isBold);
    setIsItalic(state.isItalic);
    setIsUnderline(state.isUnderline);
    setFontSize(state.fontSize);
    setFontFamily(state.fontFamily);
    setTextAlign(state.textAlign);
    console.log(state.textAlign)
  };

  const toggleBold = (): void => {
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

  const toggleItalic = (): void => {
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

  const toggleUnderline = (): void => {
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

  const changeFontSize = (size: number): void => {
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

  const changeFontFamily = (font: string): void => {
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

  const alignText = (alignment: TextAlign): void => {
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