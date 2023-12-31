import { Avatar } from "@ui/general";
import { cn, partiallyApply } from "@ui/utils";
import { HTMLAttributes } from "react";

export type TChatMessageProps = HTMLAttributes<HTMLDivElement> & {
  avatar?: string;
  reverse?: boolean;
  messageStyles?: string;
};

const ChatMessage = ({
  children,
  avatar,
  reverse,
  className,
  messageStyles,
}: TChatMessageProps) => {
  return (
    <div
      className={cn(
        "gwk-flex gwk-nowrap gwk-gap-2 gwk-items-center",
        reverse && "gwk-flex-row-reverse",
        className,
      )}
    >
      {avatar && <Avatar image={avatar} className="gwk-w-10 gwk-h-10" />}
      <div className={cn("gwk-p-1 gwk-rounded-rdmd", messageStyles)}>
        {children}
      </div>
    </div>
  );
};

export default ChatMessage;

export const ChatMessageUser = partiallyApply(ChatMessage, {
  messageStyles: "gwk-bg-surface-primary gwk-text-text-white",
  reverse: true,
});

export const ChatMessageBot = partiallyApply(ChatMessage, {
  messageStyles: "gwk-bg-surface-triarty-hover gwk-text-text-black",
  reverse: false,
});
