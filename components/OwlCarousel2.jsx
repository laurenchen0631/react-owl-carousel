"use strict";

import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel";

const Owl_Carousel_Options = [
    //The number of items you want to see on the screen.
    "items", // Type: Number

    // margin-right(px) on item.
    "margin",// Type: Number 

    "",

    "",
    
    "",
    
    "",
    
    "",
    
    "",
    
    "",
    
    "",
    
    "",
    
    "",
    
    "",
    
]

class OwlCarousel extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.owlCarousel = $(this.owlCarousel);
        this.owlCarousel.owlCarousel({
            random: 321,
        });
    }

    render() {
        return (
            <div 
                className="owl-carousel owl-theme"
                ref={inst => this.owlCarousel = inst}
            >
                <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
            </div>
        );
    }
}

export default OwlCarousel;