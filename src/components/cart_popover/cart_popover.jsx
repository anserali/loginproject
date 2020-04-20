import React from "react";
import { Button } from 'react-bootstrap';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import { ReactComponent as Bag } from "./shopingBag.svg"
import "./cart_popover_css.scss"
import { connect } from 'react-redux'


const PopoverPage = ({item}) =>
{
    let quantity = 0;
    item.map(i => { quantity = quantity + i.quantity })
    
    return (

      <div className = "shipping_bag">
            <MDBContainer>
            <div style={{ display: "flex" }} >
                <MDBPopover
                placement="bottom"
                popover
                clickable
                id="popper4"
                >
                <MDBBtn>
                    <div className="bag" >
                        <Bag />
                                <div className="bag_price">{quantity}</div>
                    </div>            
                </MDBBtn>
                <div>
                    <MDBPopoverBody>
                        <div className = "shopping_bag_dropdown">
                                    {
                                        item.map(x => <div className ="upper_div" > <div className ="image_div"><img src={x.imageUrl} alt="" /></div> <div>{x.quantity}X { x.price}</div> </div>)
                                    }
                                    
                                </div>
                        <div style = {{width:"80%",margin:"0 auto",padding:"10px 0px"}}>
                            <Button style = {{width:"100%"}} size="lg" variant="dark">ADD TO CART</Button>
                        </div>
                    </MDBPopoverBody>
                        </div>
               </MDBPopover>
            </div>
            </MDBContainer>
    </div>
  );
}
const mapStateToProps = (state) =>
{

    return { item: state.add_Items.items };
};
export default connect(mapStateToProps)(PopoverPage);

