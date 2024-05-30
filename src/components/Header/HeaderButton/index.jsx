import { Button } from "./HeaderButton.styles";

export function HeaderButton({ primary, text, action }) {
  return <Button primary={primary} onClick={action}>{text}</Button>;
}
