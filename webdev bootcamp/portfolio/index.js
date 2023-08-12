/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    console.log(1)
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    console.log(2)
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }






const express= require("express")

const app=express();
const path = require('path'); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, '.\\'));

function start(){
    console.log("Running server...");
}

function home(req,res){
    res.render("index");
}
function about(req,res){
    res.render("about");
}
function contact(req,res){
    res.render("contact");
}


app.get("/home",home);
app.get("/aboutme",about);
app.get("/contact",contact);

app.all('*', (req, res) => {
    res.status(404).render("404");
  });
app.listen(5000,start());