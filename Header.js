import React from "react";



const Header=()=>{
    return(
        <>
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>Odan infotech</span>
                </h2>
                <div className="menu-link">
                    <ul>
                        <li>
                           <a href="#">Home</a> 
                        </li>
                        <li>
                           <a href="#">About Us</a> 
                        </li><li>
                           <a href="#">Services</a> 
                        </li><li>
                           <a href="#">Contact Us</a> 
                        </li>
                    </ul>
                    <div className="inp">
                        <input type= "text" name="Search"></input>
                        <button className="btn1">Search</button>

                        <p>Odan Infotech</p>
                        <p>Building a digital intelligence for the next-generation product.</p>
                      <div className="btn2">
                         <button>Book A Free Consultation </button>
                         <button>Get A Quote</button>
                       <section>
                          <div className="para1">
                              <p>App Development</p>
                           <div className="para2">
                              <p>Getting the right mobile app development partner is no easy task. 
                                Getting the right mobile app development partner is no easy task. 
                                Once we partner up, you’ll be able to enjoy our iOS and Android design and development services. Odan Infotech has extensive experience designing, developing, and launching native, hybrid, and cross-platform mobile apps of any level and complexity for hundreds of companies across many industries, like transportation, technology, finance, retail, eCommerce, healthcare, and others. Our mobile development department includes qualified UX designers, visual designers, and software engineers with deep expertise in mobile web development technologies and provides full-cycle development services from business
                                 analysis to delivery, publication, and support.</p>
                            </div> 
                            <div className="img1">
                                <img src=""></img>

                             <section>
                                <div className="para3">
                                   <p>Brand Development</p>    
                                </div>
                               <div className="para4">
                                  <p>We work hard to create beautiful, functional B2B 
                                    Web/Mobile applications while improving their usability. 
                                    Our UI/UX team designs user interfaces for mobile apps
                                    and web products that increase conversion, reduce the cost of 
                                     maintenance and build a consistent user experience. We offer
                                     a  ﬁne-tuned creative aspect to your design requirements
                                     along with adhering to your branding guidelines. We use 
                                     popular technologies like HTML5, CSS, JavaScript, to retain
                                     the visitors to your website. With our best UI/UX Design 
                                     and Development, We can deliver solutions that are
                                     seamless, interactive, flexible, intuitive, and unique.</p>
                               </div>
                            
                             </section>   

                            </div>
                          </div>

                        </section>  
                      </div>
                    </div>
                 </div> 
              </div>
             </nav>

             </>
    );
};







export default Header;