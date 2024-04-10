import React from "react";
import { useState } from "react";
const Swipe = () => {
  const[scrollPosition,setScrollPosition] = useState(0)
  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery")
    const scrollAmount = 700;

    if(direction === "left"){
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth"
      })
    }else if(direction === 'right'){
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth"
      })
    }
  }
  return (
    <div className="container">
        <div className="btnSection">
          <button onClick={()=>handleScroll("left")}>Left</button>
          <button onClick={()=>handleScroll("right")}> Right </button>
        </div>

      <div className="slider-wrapper">
        <div className="image-list" id="chainGallery" onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
          <img src="../images/apple.png" alt="image" className="image-item" />
          <img
            src="../images/courseera.png"
            alt="image"
            className="image-item"
          />
          <img src="../images/dell.png" alt="image" className="image-item" />
          <img src="../images/google.png" alt="image" className="image-item" />
          <img src="../images/ibm.png" alt="image" className="image-item" />
          <img src="../images/intel.png" alt="image" className="image-item" />
          <img
            src="../images/simplilearn.png"
            alt="image"
            className="image-item"
          />
          <img src="../images/sony.png" alt="image" className="image-item" />
          <img src="../images/vivo.png" alt="image" className="image-item" />
        </div>
      </div>

      <div className="slider-scrollbar">
        <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  );
};

export default Swipe;
