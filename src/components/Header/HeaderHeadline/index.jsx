import { Container, Description, Title } from "./HeaderHeadline.styles";

export function HeaderHeadline({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
