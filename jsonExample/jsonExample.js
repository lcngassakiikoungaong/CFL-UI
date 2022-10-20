"use strict";

/*
//To retrieve a remote JSON file:
async function remoteJSON () //'async' neccessary for the await, fetch, etc. keywords to work
{
    const requestURL = 'https://URL path to remote JSON file';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const categories = await response.json(); //Categories will be used as the json file object
}
*/


/* 
* Below is basic functionality for reading a JSON text variable and creating a JSON object file to use.
* Javascript uses a Web API to access files. Therefore, local files cannot be directly accessed. I think. 
* Therefore, we either use a web server to store all of the JSON content, or we have the local machine host a local web server to pull the file. 
* Or we use a different code base to create and read the JSON file -- but the reason Javascript cant read local is for security reasons. So consider this first. 
*/
let selection = document.getElementById('category');

function readJSON()
{
    let data = '{"name": "All Categories or something","category": [{ "name": "Housing", "other_stuff_etc": "yada_yada" },  {  "name": "Entertainment","other_stuff_etc": "yada_yada" },{ "name": "Yep","other_stuff_etc": "yada_yada"},{"name": "Yuh", "other_stuff_etc": "yada_yada"}]}';
    
    let jsonFile = JSON.parse(data);
    console.log(jsonFile.category[0].name);
    populateSelection(jsonFile);
   
}
readJSON();

function populateSelection(jsonFile)
{
    for (let i = 0; i < jsonFile.category.length; i++)
    {
        let htmlContent = document.createElement("option");
        let text = document.createTextNode(jsonFile.category[i].name);
        htmlContent.appendChild(text);
        selection.appendChild(htmlContent);
    }
}