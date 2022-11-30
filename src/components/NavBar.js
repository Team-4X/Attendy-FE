import "bulma/css/bulma.min.css";
 export const NavBar = () => {

    
    return (
      <nav class="navbar is-dark is fixed-top">
        
        <div id="navbar" class="navbar-menu">
       
        <div class="navbar-start">
            <a class="navbar-item">
                Home
             </a>
            <a class="navbar-item">
                About
            </a>
            <a class="navbar-item">
                Us
            </a>

            
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
                More
            </a>

         <div class="navbar-dropdown">
            <a class="navbar-item">
                Contact
            </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            Logout
          </a>
             </div>
          </div>
        </div>
       
   
         <div class="navbar-end">
         <div class="navbar-item">
         <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
                Languages
            </a>

         <div class="navbar-dropdown">
         
            <a class="navbar-item ">
                English
            </a>
            <a class="navbar-item">
                Sinhala
            </a>
            <a class="navbar-item">
                Tamil
            </a>
          </div>
      </div>
        <div class="buttons">
          <a class="button is-white">
            <strong>Sign up</strong>
          </a>
          <a class="button is-dark">
            Log in
          </a>
        </div>
      </div>
    </div>
   
  </div>
 
 </nav>

 
        

    )
     
 }

   

