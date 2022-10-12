import { TextInputRoot } from "./components/TextInputRoot";
import { TextInputIcon } from "./components/TextInputIcon";
import { TextInputInput } from "./components/TextInputInput";

TextInputRoot.displayName = "TextInput.Root";
TextInputIcon.displayName = "TextInput.Icon";
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
