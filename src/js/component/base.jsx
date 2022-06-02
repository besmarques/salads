import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//include images into your bundle


//create your first component
const Base = props => {

    const { store, actions } = useContext(Context);

	let i = Math.floor(Math.random() * store.base.length);

	console.log(store.base[i]);
       
    return (
        <>
            {
                /*store.base.map((i) => {
                	return(*/<>
						<div className="col-1 border-0 mt-3 mb-3 ms-1 me-1 align-middle"><h1>Base</h1></div>
                        <div className="card col-1 border p-0 mt-3 mb-3 ms-1 me-1">
                            <img src={store.base[i].image} className="card-img-top g-0 m-0 p-0" alt="..." ></img>
                            <div className="card-body ">
								<h5 className="card-title p-2 m-0">{store.base[i].title}</h5>
                            </div>
                        </div> 
						</>
                    /*);
                })*/
            }
        </>
    )



}

export default Base;
