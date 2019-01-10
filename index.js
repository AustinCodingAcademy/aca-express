var http = require('http');
let products = require("./products");
let rest = {
  "GET":{}
};
let server = http.createServer(messageReceived);
//call setupREST as many times as you need to 
setupREST("GET","");
setupREST("","");
server.listen(8080);

function setupREST(arg1, arg2, arg3){ //what should arg1, arg2 & arg3 be?
  //what should you do with these arguments
  
}

function messageReceived(request, response) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   handleMessage(request,response);
   res.end();
}

function handleMessage(request, response){

}
