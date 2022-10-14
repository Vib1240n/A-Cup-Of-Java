import React, {Component} from "react";
import axios from "axios";
import { useEffect, useState } from "react";


class object extends Component{

    constructor(props){
        super(props)
        this.state ={
            data: []
        }
        
    }

    get getData(){
        return fetch("http://localhost:5500/api/profile")
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
    }
}
  

export default object;