import React from "react";
import Particles from "react-particles-js";
import dark_d1 from './Images/Decorations/dark/decoration1.svg';
import dark_d2 from './Images/Decorations/dark/decoration2.svg';
import dark_d3 from './Images/Decorations/dark/decoration3.svg';
import dark_d4 from './Images/Decorations/dark/decoration4.svg';
import dark_d5 from './Images/Decorations/dark/decoration5.svg';
import dark_d6 from './Images/Decorations/dark/decoration6.svg';

import light_d1 from './Images/Decorations/light/decoration1.svg';
import light_d2 from './Images/Decorations/light/decoration2.svg';
import light_d3 from './Images/Decorations/light/decoration3.svg';
import light_d4 from './Images/Decorations/light/decoration4.svg';
import light_d5 from './Images/Decorations/light/decoration5.svg';
import light_d6 from './Images/Decorations/light/decoration6.svg';

export default (props) => (
     <Particles style={{
		width: "100%",
		height: "100%",
		position: "absolute",
		top: "0",
		left: "0"
	  }}
    params={{
	    "particles": {
	        "number": {
	            "value": 8,
	            "density": {
	                "enable": true,
	                "value_area": 200
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": "image",
	            "image": [
	                {
	                    "src": props.color=='light'? light_d1:dark_d1,
	                },
	                {
	                    "src": props.color=='light'? light_d2:dark_d2,
                      "width":1,
                      "height":2,
	                },
	                {
	                    "src": props.color=='light'? light_d3:dark_d3,         
                                              
	                },
	                {
	                    "src": props.color=='light'? light_d4:dark_d4,                  
                                     
	                },
	                {
	                    "src": props.color=='light'? light_d5:dark_d5,                     
                                     
	                },
	                {
	                    "src": props.color=='light'? light_d6:dark_d6,
                      "height":2,
                      "width":5,                   
	                },              
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 5,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
);