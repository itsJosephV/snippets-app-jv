import * as RPopover from "@radix-ui/react-popover";

type PopoverProps = {
  children: React.ReactNode;
};

export const Popover = ({ children }: PopoverProps) => {
  return <RPopover.Root>{children}</RPopover.Root>;
};

// eslint-disable-next-line react/display-name
Popover.Trigger = ({ children }: { children: React.ReactNode }) => {
  return <RPopover.Trigger asChild>{children}</RPopover.Trigger>;
};

// eslint-disable-next-line react/display-name
Popover.Content = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <RPopover.Portal>
      <RPopover.Content
        className="bg-zinc-900/70 rounded-md p-2 backdrop-blur-md"
        {...props}
      >
        {/* <RPopover.Close /> */}
        {children}
      </RPopover.Content>
    </RPopover.Portal>
  );
};
