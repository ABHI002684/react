import "./Product.css";

//1st method for using props
// function Product(props){     
//     return(
//         <div className="Product">
//         <h3>{props.title}</h3>
//         <h5>price:{props.price}</h5>
        
//         </div>
//     );
// }

// 2nd method for using props
function Product({title,price,features,quality}){ 
    // const list=features.map((feature)=><li>{feature}</li>); 
    // let isDiscount= price>3000?"discount:5%":null; 
    //dynamic component styling
    let style = { backgroundColor: price > 3000 ? "yellow" : "green" };
    return(
        <div className="Product" style={style}>
        <h2>{title}</h2>
        <h3>price:{price}</h3>
        {/* <p>{isDiscount}</p>  it will create empty node for other product */}
        {/* for not get the empty node for others */}
        {/* {price>3000?<p>discount:5%</p>:null} */}
        {price>3000 && <p>discount:5%</p>}
        {/* <h4>features:{list}</h4>
        <h4>quality:{quality}</h4> */}
        </div>
    );
}
export default Product;