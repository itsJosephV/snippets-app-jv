import { useContext } from "react";
import { SnippetsContext } from "./snippetsContext";

export default function useSnippetsContext() {
  const context = useContext(SnippetsContext);
  if (!context)
    throw Error(
      "useSnippetsContext can only be used within a SnippetsProvider"
    );
  return context;
}
