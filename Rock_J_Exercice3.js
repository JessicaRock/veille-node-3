"use strict";
var http = require('http');
http.createServer(function(request, response){

response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"})

response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>')
response.write('<h1>Ça marche et vive le Québec</h1>')

const fs = require("fs");
let oDonnees = {}
let oProvinces = {}
/* La fonction fs.readFile() est asynchrone elle ne bloque pas l'éxécution des instructions suivantes */
fs.readFile('provinces.json', (err, data) => {
 if (err) return console.error(err);
 console.log(data.toString());
  oDonnees = data;
  /*console.log("--------------------------------------------------")
  console.log(JSON.parse(oProvinces))
  console.log("--------------------------------------------------")*/
  oProvinces = JSON.parse(oDonnees)
  genererHtml()
});

let trace = ''

const contenu_objet_json = (o)=>{
   trace += '<table id="exercice">';
   for (let p in o) { 
     trace += '<tr><td>' + p + '</td><td>' + o[p] + '</td></tr>';
     console.log(o + " " + p);
   }

   trace += '</table>';
	return trace;

	response.end()
}
const genererHtml = ()=>{
	
	let sTab = contenu_objet_json(oProvinces)
	//console.log(sTab)
	response.write(sTab)

}


}).listen(3000)