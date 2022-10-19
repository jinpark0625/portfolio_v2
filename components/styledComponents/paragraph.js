import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.paragraph}rem;
  color: ${({ theme: { color }, fontColor }) => fontColor || color.white};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.paragraph};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Paragraph = ({ children, ...props }) => {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export default Paragraph;
