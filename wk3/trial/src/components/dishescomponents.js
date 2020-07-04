import React, { Component } from 'react';
import { Card,CardTitle,CardBody,CardText,CardImg } from 'reactstrap';


function Renderdish ({dish})
{
    return(
          <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                 <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                 <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            )
}
function RenderComments({comments})
{
    if(comments !=null)
    {
        const comm =comments.map(co =>
         {
        return(
               <React.Fragment>
                    <li>{co.comment}</li>
                    <li>{co.author}</li>
                </React.Fragment>

                )
        }
        );
        return(
            <ul>
                {comm}
            </ul>
        )
        
}
}

class Dishdetail extends Component
{
    render()
    {
        const {dish}=this.props;
        const {comments}=this.props;
        if(dish != null)
        {
        return ( 
        
             
            <div className="container">
                <div className="row">

                <div className="col-12">
                    <h3>{dish.name}</h3>
                      <hr />
               
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                             <Renderdish dish={dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                                <RenderComments comments={comments} />
                        </div>
                    </div>
                </div>
             </div>
             </div>
            );
        }
            else{
                return(<div></div>)
            }
        }
                
}
        
    



export default Dishdetail;