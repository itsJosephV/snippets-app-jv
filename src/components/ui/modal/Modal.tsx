import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type ModalProps = {
  children: ReactNode;
  // open: boolean;
  // onOpenChange: (open: boolean) => void;
};

type ModalContentProps = {
  children: ReactNode;
  title: string;
} & Dialog.DialogContentProps;

function Modal({
  children,
}: //  open,
//   onOpenChange
ModalProps) {
  return (
    <Dialog.Root
    // open={open}
    //  onOpenChange={onOpenChange}
    >
      {children}
    </Dialog.Root>
  );
}

// eslint-disable-next-line react/display-name
Modal.Trigger = ({ children }: { children: ReactNode }) => {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
};

// eslint-disable-next-line react/display-name
Modal.Content = ({ children, title, ...props }: ModalContentProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className={cn(
          "fixed inset-0 bg-black/50"
          // "radix-state-[open]:animate-overlayShow",
          // "radix-state-[closed]:animate-overlayHide",
        )}
      />
      <Dialog.Content
        {...props}
        className={cn(
          "fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-md border border-zinc-100/10 bg-zinc-100 p-8 shadow"
          // "radix-state-[open]:animate-contentShow",
          // "radix-state-[closed]:animate-contentHide",
        )}
      >
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-lg font-medium">{title}</Dialog.Title>
          <Dialog.Close>
            <X
              size={20}
              className="text-zinc-400 transition-colors hover:text-inherit"
            />
          </Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default Modal;
