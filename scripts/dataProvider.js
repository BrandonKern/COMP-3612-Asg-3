const path = require('path');
const fs = require('fs');

const paintingPath = path.join(__dirname, '../data', 'paintings-nested.json');
const paintingJsonData = fs.readFileSync(paintingPath, 'utf8'); 
const paintingData = JSON.parse(paintingJsonData); 


const galleryPath = path.join(__dirname, '../data', 'galleries.json');
const galleryJsonData = fs.readFileSync(galleryPath, 'utf8'); 
const galleryData = JSON.parse(galleryJsonData); 


const artistPath = path.join(__dirname, '../data', 'artists.json');
const artistJsonData = fs.readFileSync(artistPath, 'utf8'); 
const artistData = JSON.parse(artistJsonData); 

 
module.exports = {paintingData, galleryData, artistData}; 