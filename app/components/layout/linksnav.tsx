
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
      <div className={`flex flex-wrap gap-8 w-full justify-center `} > 
      { rlinks.map(( linka , index) => 
        (
          <div key={linka.id} className= {`hover:text-violet-600 p-1  w-1/${rlinks.length}`}>
        <Link key={linka.id} href={linka.url} >
          {linka.text}    
        </Link> 
        </div>
        
      ))}
      </div>
    );
  };

export default Linksnav;