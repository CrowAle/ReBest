
import Link from 'next/link';
import React from 'react';

const rlinks  = [
  {
      id: 1,
      url: "/ristrutturazioni",
      text: "Ristrutturazioni",
  },
  {
      id: 2,
      url: "/normative",
      text: "Normative",
  },
  {
      id: 3,
      url: "/convenzioni",
      text: "Convenzioni",
  },
  {
      id: 4,
      url: "/novita",
      text: "Novita",
    
  },
  {
      id: 5,
      url: "/robotica",
      text: "Robotica",
  },
  {
      id: 6,
      url: "/efficienza-energetica",
      text: "Efficienza energetica",
  },
];

const Linksnav = () => {
 
    
    return ( 
    <div className=" align-items-center text-center" >
      { rlinks.map(( linka ) => 
        (
          
        <Link key={linka.id} href={linka.url} >
          {linka.text} &nbsp; &nbsp; &nbsp; &nbsp;   
        </Link>
          
      ))}
      </div>
    );
  };

export default Linksnav;