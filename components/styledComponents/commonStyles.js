import styled from "styled-components";

export const LostWay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    color: #fff;
    font-size: ${({ theme: { fontSize } }) => fontSize.tagline}rem;
  }
`;

export const StyledProjectFooter = styled.div`
  height: auto;

  .footer_container {
    height: 100vh;
    z-index: 1;
  }

  .footer_empty_height {
    height: 100vh;
  }

  .footer_image_wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .footer_text_container {
    position: fixed;
    top: 50%;
    left: 50%;
    color: #fff;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .footer_text_wrap {
    position: relative;
    width: 100%;
  }

  .footer_percentage {
    position: absolute;
    right: -24px;
    top: -10px;
  }

  .footer_title {
    font-family: SomeTimes;
    font-size: 1.875rem;
    margin-bottom: 12px;
  }
`;
