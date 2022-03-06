import Shouldrender  from "./utils/Shouldrender"

const ProductItem = ({ Products, onadd }) => {


    const onaddclick = () => {
        onadd(Products)
    }





    return <div className="col-md-3">
        <div className="card">
            <img className="card-img-top" src={Products.img}></img>
            <div className="card-body">
                <h1 className="card-title">{Products.model}</h1>
                <b>${Products.price}</b>
                <h6>
                    <lable>Instock </lable>
                    <input disabled type="checkbox" checked={Products.instock}></input>
                </h6>
            </div>
            <Shouldrender cond ={Products.instock}>

            <div calssName="card-footer">
                <button disabled={!Products.instock} className="btn btn-danger btn-sm" onClick={onaddclick}>
                    Add to card
                    <i className="fa fa-shopping-cart"></i>
                </button>
            </div>
            </Shouldrender>
        </div>
    </div>
}

export default ProductItem