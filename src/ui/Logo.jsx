import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const H2 = styled.h2`
  color: var(--color-brand-700);
`;

function Logo() {
  return (
    <StyledLogo>
      <H2>Book a hotel</H2>
    </StyledLogo>
  );
}

export default Logo;
