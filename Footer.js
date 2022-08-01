import React from "react";

const Footer=()=>{
    return(
        <>
         <section className="contact">
            <h1>Contact Us</h1>
            <div className="form">
               <input type="text" name="name"id="name" placeholder="Name"></input>
               <br></br>
               <input type="text" name="phone"id="phone" placeholder="Contact No."></input> 
               <br></br>
               <input type="email" name="email"id="text" placeholder="Email"></input> 
               <br>
               </br>
               <textarea name="text" id="text"placeholder="Describe Your Product Idea"></textarea>
               <button>Submit</button>
            </div>
        </section>    
        <footer>
           <p>copyright © 2027 www.odaninfotech.com - All rights reserved from .</p> 
        </footer>    
        </>
    )
}

export default Footer;