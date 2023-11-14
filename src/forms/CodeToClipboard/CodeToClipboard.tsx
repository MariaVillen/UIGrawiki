import { cn } from "@ui/utils";
import { HTMLAttributes, useState, useEffect, CSSProperties } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula, docco } from "react-syntax-highlighter/dist/esm/styles/hljs"; // Puedes elegir un estilo que te guste
export interface clipboardTextProps extends HTMLAttributes<HTMLDivElement> {
  code: string;
  copyStyles?: string;
  codeStyles?: CSSProperties | undefined;
  language?: string;
  showStyles?: string;
  showButton?: boolean;
  theme?: "dark" | "light";
}

const CodeToClipboard = ({
  code,
  copyStyles,
  codeStyles,
  showStyles,
  className,
  showButton = true,
  theme = "dark",
  language = "tsx",
  ...rest
}: clipboardTextProps) => {
  const [state, setState] = useState("copy");
  const [showCode, setShowCode] = useState(!showButton ? true : false);

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
    <>
      {showButton && (
        <button
          type="button"
          className={cn(
            " gwk-whitespace-nowrap gwk-p-1 gwk-self-end gwk-text-xs gwk-border-[2px] gwk-border-grey gwk-rounded-rdsm",
            showStyles
              ? showStyles
              : "gwk-bg-surface-white gwk-text-text-black",
          )}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Hide code" : "Show code"}
        </button>
      )}
      {showCode && (
        <div
          className={cn(
            "gwk-flex gwk-justify-between gwk-items-center gwk-rounded-rdsm gwk-text-text-white gwk-font-mono gwk-pl-2",
            theme === "light" ? "gwk-bg-[#F8F8FF]" : "gwk-bg-[#282C34]",
            className,
          )}
          {...rest}
        >
          <SyntaxHighlighter
            language={language}
            style={theme === "dark" ? darcula : docco}
            wrapLines={true}
            wrapLongLines={true}
            customStyle={codeStyles}
          >
            {code}
          </SyntaxHighlighter>
          <button
            type="button"
            className={cn(
              " gwk-whitespace-nowrap gwk-py-1 gwk-px-2 gwk-self-end gwk-text-xs gwk-rounded-rdsm",
              theme === "light" ? "gwk-bg-[#888]" : "gwk-bg-surface-black",
              copyStyles ? copyStyles : "gwk-text-text-white",
            )}
            onClick={copyText}
          >
            {state}
          </button>
        </div>
      )}
    </>
  );
};

export default CodeToClipboard;
