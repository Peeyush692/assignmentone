import React, { Component } from "react";
import scp from "./data.json";
import scp_six from "./second.json";

const SCP = scp.map(
    (scp) => 
    {
        return(
                <div key={scp}>
                <h2>{scp.item}</h2>
                
                <b><p>Object: {scp.object}</p></b>
                
            <p>Procedure:{scp.procedure}</p>
            <p>Description:{scp.description}</p>
            <p>Reference:{scp.reference}</p>
           </div>
            );
        }
    );
    
    const scpsix = scp_six.map(
        (scp_six) => 
        {
            return(
                    <div key={scp_six}>
                    <h2>{scp_six.item}</h2>
                    <b><p>Object: {scp_six.object}</p></b>
                <p>Procedure:{scp_six.procedure}</p>
                <ol>
                        <li>{scp_six.first}</li>
                        <li>{scp_six.second}</li>
                        <li>{scp_six.third}</li>
                        <li>{scp_six.fourth}</li>
                </ol>
                <p>Description:{scp_six.description}</p>
               </div>
                );
            }
        );

class Content extends Component {
    render() {
        return (
            <div className="row">
                   {SCP}
                    <h1>{scp.title}</h1>
                    <h2 className="card-title"> {scp.image}</h2>
                   {scpsix}
                   
            </div>
        );
    }
}

export default Content;
