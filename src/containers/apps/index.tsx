import React from 'react';
interface HelloProps{
    name:string,
    age:number
}
let a : number = 1;
export class Hello extends React.Component<HelloProps,{}>{
   render(){
       console.log(this.props.name);
       return (
           <div></div>
       )
   };
}