import styled, { css } from 'styled-components';

const MainPane = styled.div`
  height: max-content;
  width: 100%;
  @media (min-width: 431px) {
    position: relative;
    margin-right: 1rem;
    max-width: calc(100% - 80px - 0.5rem);
    min-height: 100vh;
    ${({ theme: { border } }) =>
      css`
        border-left: 1px solid ${border};
        border-right: 1px solid ${border};
      `}
  }
  @media (min-width: 1004px) {
    min-width: 600px;
    max-width: 600px;
    margin-right: auto;
  }
  @media (min-width: 1280px) {
    min-width: 632px;
    flex: 1;
  }
`;

const SecondaryPane = styled.div`
  display: none;
  @media (min-width: 1004px) {
    padding: 1rem;
    position: relative;
    padding-left: 2rem;
    display: unset;
    flex: 1;
    margin-right: 1rem;
  }
  .pageRightStickyBox {
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
  }
`;

export { MainPane, SecondaryPane };
