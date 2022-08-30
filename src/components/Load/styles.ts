import styled from 'styled-components'

export const Loader = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 10rem;
  border: 3px solid white;
  background: linear-gradient(#eb31b0, #e4c352, #7df8d6);
  box-shadow: 0px 0px 100px -50px black;
  animation: animate 1s linear infinite;
  left: 200%;

  &:before {
    position: absolute;
    content: '';
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 10rem;
    border: 3px solid white;
    box-shadow: inset 0px 0px 100px -70px #111;
  }

  @keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
