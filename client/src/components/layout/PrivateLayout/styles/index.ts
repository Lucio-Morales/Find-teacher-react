import styled from 'styled-components';

const WithNavLayout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  @media (min-width: 431px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 616px) {
    max-width: 720px;
  }
  @media (min-width: 1004px) {
    max-width: 1080px;
    padding-right: 0;
  }
  @media (min-width: 1280px) {
    max-width: 1312px;
  }
`;

const NavigationPane = styled.div`
  height: fit-content;
  @media (min-width: 431px) {
    height: 100%;
    display: flex;
    justify-content: center;
    width: 80px;
  }
  @media (min-width: 1280px) {
    width: 280px;
    justify-content: flex-end;
  }
  .fixedNav {
    padding: 0.5rem 1rem;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 3;
    background: ${({ theme }) => theme.body};
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }) => theme.boxBorder};
    transition: padding-bottom 0.1s;
    @media (min-width: 431px) {
      transition: unset;
      border-top: none;
      display: unset;
      justify-content: unset;
      bottom: unset;
      right: unset;
      left: unset;
      padding: unset;
    }
  }
`;

export { WithNavLayout, NavigationPane };
