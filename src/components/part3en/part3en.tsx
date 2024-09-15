import TextEditor from "../textEditor/texteditor";
export default function Part3en() {
    return (
      <>
      <div className="container">
      <div className="together">
      <hr className="line" />
        <h1 className="title">Part3</h1>
        </div>
        <p>
        Implement a text editor that precisely replicates the Ul styles provided. It&apos;s essential to create the undo and redo functionalities from scratch, along with two additional features of your choice. You may use any package, but creating these functionalities from scratch will be advantageous. Ensure that all text editor functionalities are operational.
        </p>
        <TextEditor/>
        </div>
      </>
    );
  }