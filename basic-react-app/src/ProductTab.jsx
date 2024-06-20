import Product from "./Product";

// passing array by this all values of array display in a single line without comma in between them
function ProductTab(){
  // let options=[<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];// by this all value of array comes in separate line(1st method)
  let options=["hi-tech","durable","fast"];
  let options2={a:"pure",b:"impure",c:"classic"};
   return(
    <>
    <Product title="laptop" price="10000" features={options} quality={options2.b}/>
    <Product title="phone" price="2000" features={options} quality={options2.a}/>
    <Product title="charger" price={100/2} features={options} quality={options2.c}/>
  </>
   );
}

export default ProductTab;