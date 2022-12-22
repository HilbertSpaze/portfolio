
import styled  from "styled-components";
import {  keyframes } from 'styled-components';
import { bounce } from "react-animations";

export default function Bounce() {
    const bounceAnimation = keyframes`${bounce}`;
    const Bounce = styled.div`
    animation: 1s ${bounceAnimation};
  `;

  return (
    <div>
        <Bounce/>
    </div>
  )
}
