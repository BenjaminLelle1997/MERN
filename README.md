0. Intro to MERN
- node-modules folders are deleted
-full stack

- frontend layer: React -modern frontend   
  framework

- application layer: Node and Express -  
  powerful modules for req,res + Mongo library

- database layer: MongoDB - NOSQL, JSON object 
                  send via Express,
                - stored JSON/BSON data MongoDB
                - MQL - JSON+JS
                - Atlas: auto-scaling Mongo 
                  manipulations


Architecture: 3 layer
JS+JSON+DB

Express: - server-side functions,req and res with
React: interactive interface + remote server

JSON -> Front -> Back

Feautures:
-web stack
-JSON-heavy
-cloud-native
-dynamic web interfaces

Usage:
-TODO,workflow managements,interactive forums

CRUD - create,read,update,delete -> for 
students of form stored as JSON 


1. Config server and client side

at server side: install body-parser ->send req
                         cors 
                        moongose -> modules
                        nodemon -> reserve the server if any change

at client side:
    axios -> API req
    moment -> library time,date
    base64 -> converting images
    redux -> performing async task

React folder: 
    node-modules
    public - images,index.html
    src - development 
        -> App.js, index.js, other css-s
        
2. Connect to MongoDB
MongoDB Atlas Cloud: our database will host in the cloud


connection is defined in server/index.js

3. Set up Routes
new folder in server -> create router

4. Controllers
add to the routes as callback

5. Schema, Model
- create a DB schema and make modell

6. School Managment System -> to CRUD
- add POST route -> data will passed through 
  our request's bodyS
-> create student with the model and save it 
   to MongoDB 

   (httpstatuses.com)

7. Frontend

install CSS libraries -> material ui/core and import
create components -> folder

 - 1.Container -> bring the container and in this create AppBar
 - 2.AppBar -> React components already have done
   -> related to create CSS class -> styles.js
  - add characteristics features
- Grow for container, Grid for tables, student tag + create form
- material-ui.com -> Components, Data Display, Table + Inputs Text Field


v4 -> v5

imports....

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));   // ----> this is changed  to -> remove

export default function ButtonAppBar() {
  const classes = useStyles(); // ----> this is changed to -> remove and all className

  return (
    <div className={classes.root}>  // ----> this is changed to  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          // ----> this is changed to add this in IconButton <IconButton sx={{ mr: 2 }}>
            <MenuIcon />  
          </IconButton>
          <Typography variant="h6" className={classes.title}> News
          // ----> this is changed to add  sx={{ flexGrow: 1 }}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div> // ----> this is changed to  </Box>
  );
} 


------------------------------------------------------------------------

change createStudent

Material UI -> Inputs - Button
add a new h2 tag -> need emtpy tag <></>
first letter is big CreateStudents,Create
dynamic data -> useState -> updates data in textfields
onclick -> the result will fire on screen to create student
axios post

back to see backend -> index.js -> routes/students -> controllers
user send req with /student to backend using 5000 port 
-> req.body -> data is client sending assigned to student
-> get processes and storing,saving in DB

and need the same names in Model and createStudent frontend -> changing in Model

try to create student -> + watch on 5000 -> error -> fix imports -> copy student from routes/student to controllers -> reload get []-> change StudentData
fetch
automatic reload -> at post
delete -> extra cbutton,column
->material-icons

Material-UI Button Sizes -> Iconbutton

delete function on server at routes and controllers