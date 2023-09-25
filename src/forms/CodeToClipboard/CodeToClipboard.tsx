import { HTMLAttributes, useState, useEffect } from "react";

export interface clipboardTextProps extends HTMLAttributes<HTMLDivElement> {
  code: string;
  buttonStyles: string;
}

const CodeToClipboard = ({ code, buttonStyles, ...props }: clipboardTextProps) => {
  const [state, setState] = useState("copy");

  useEffect(() => {
    if (state === "copied!") {
      setTimeout(() => setState("copy"), 1000);
    }
  }, [state]);

  const copyText = () => {
    navigator.clipboard.writeText(code);
    setState("copied!");
  };

  return (
    <div {...props}>
      <code className="gwk-font-mono gwk-pl-2 ">{code} </code>
      <button
        type="button"
        className={`gwk-p-1 gwk-w-[4em] ${buttonStyles ? buttonStyles : "gwk-bg-[#000]"}`}
        onClick={copyText}
      >
        {state}
      </button>
    </div>
  );
};

export default CodeToClipboard;
