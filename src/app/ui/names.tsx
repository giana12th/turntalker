import { Members } from "../lib/definitions";
import { shuffleArray } from "../lib/shuffleArray";

export function ShowNames({member}:{member:Members}) {
  const shuffledData = shuffleArray(member); 
  return ( 
    <h1> 
      {shuffledData.map((item, index) => ( 
        <span key={index}>
          {item}
          {index < shuffledData.length - 1 && ' ⇒ '}
        </span> 
      ))} 
    </h1> 
  ); 
}