import { useState } from "react";
import File from "./File";

export default function Folder({ name, files }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="hover:bg-slate-500 transition-all p-2" onClick={toggleFolder}>
        {isOpen ? "📂" : "📁"} {name}
      </div>
      {isOpen && (
        <div className="pl-2">
          {files.map((file) => (
            <File key={file} name={file} />
          ))}
        </div>
      )}
    </div>
  );
}
