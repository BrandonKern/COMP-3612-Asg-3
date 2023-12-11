const express = require('express');
const app = express();

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'static')));

const router = require('./scripts/routerPainting.js');

router.handlePaintingAll(app);
router.handlePaintingById(app);
router.handlePaintingByArtistId(app);
router.handlePaintingByGalleryId(app);
router.handlePaintingByYear(app);
router.handlePaintingByText(app);
router.handlePaintingByName(app);
router.handleArtistAll(app);
router.handleArtistByCountry(app);
router.handleGalleryAll(app);
router.handleGalleryByCountry(app);

let port = 8080;
app.listen(port, () => {
    console.log("server running at port = " + port);
})
