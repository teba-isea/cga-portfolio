import styled from "@emotion/styled"

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;

  a,
  a:link,
  a:visited,
  a:active,
  a:focus {
    color: rgb(246, 73, 167);
    text-decoration: none;
    font-weight: 800;
    background-color: transparent;
  }
  a svg {
    display: block;
    margin: 0px auto;
    height: 4rem;
    width: 4rem;
    transition: all 0.3s ease;
    border-radius: 25%;
  }
  a svg:hover {
    transform: scale(1.05);
    box-shadow: var(--rose-bonbon) 0px 0px 4px;
  }

  a svg path {
    fill: #f89406;
  }
`
export const SocialItem = styled.a`
  display: block;
  flex-shrink: 0;
  z-index: 1000;
  position: relative;
  transition: all 0.4s ease;
  -moz-box-flex: 1;
  flex-grow: 1;
  text-align: center;
  padding: 5px 3px;
`
