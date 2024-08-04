// inquirer 
// qr-image

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
//  var qr  = require("qr-image");

inquirer
  .prompt([
    {

    message:"What is the URL?",
    name:"URL",

},
])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png')); 

    fs.writeFile("url.txt",url,(err) =>{

        if(err) throw err

        console.log("file was saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });