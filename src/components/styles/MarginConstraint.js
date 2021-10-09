import styled from "styled-components";

/**
 * Ici on peut par exemple placer des éléments qui doivent s'étaler sur
 * toute la largeur,mais ne doivent pas être juste au bord de l'écran
 *  (certaines décorations, éventuellement certains éléments de menu...)
 */

export const MarginConstraint = styled.div`
  /*On règle ensuite la largeur utile puis on centre*/

  /* width: 1170px; */
  /* max-width: 100%; */

  /* Is the same as */
  /* max-width: 1170px; */
  max-width: 800px;
  margin: 0 auto;

  /* An important thing to consider is to add padding 
  for the left and right sides. When the viewport size is less than
   the maximum width of the wrapper, 
   this will cause the wrapper edges to stick to the viewport. */
  /* padding-left: 16px;
  padding-right: 16px; */
`;
