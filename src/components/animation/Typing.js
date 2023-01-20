import { TypeAnimation } from 'react-type-animation';

export default function Typing(props) {
  return (
    <TypeAnimation
      sequence={[
        'DATA SCIENTIST', // Types 'One'
        2000, // Waits 1s
        'DATA GEEK', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'DATA LOVER', // Types 'Three' without deleting 'Two'
        2000,
        // () => {
        //   ; // Place optional callbacks anywhere in the array
        // }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize:70,  color:"#5afae4", fontWeight:650 }}
    />
  );
};