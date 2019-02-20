class App extends React.Component{
    state={
       shoppingCart:[],
       whatToShow: 0
    }
    addItemToCart = (product)=> {
        this.setState(()=>{
            this.state.shoppingCart.push(product);
            return {shoppingCart:this.state.shoppingCart}
    })
    }
    showCart = ()=>{
        this.setState(()=>{
            return {whatToShow:1}
        })  
    }
    showProducts = ()=>{
        this.setState(()=>{
            return {whatToShow:0}
        })  
    }
    render(){
        return (  
            <Layout 
                shoppingCart={this.state.shoppingCart} 
                addItemToCart={this.addItemToCart}
                products={this.props.products}
                whatToShow={this.state.whatToShow}
                showCart={this.showCart}
                showProducts={this.showProducts}
            >
            </Layout>
        );
    }
}