export function TeamSocialNetwork({ icon, hyperlink }) {
  return (
    <a href={hyperlink} target="_blank">
      <img src={icon} alt="" />
    </a>
  );
}
