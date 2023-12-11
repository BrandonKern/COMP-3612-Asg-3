const data = require('./dataProvider.js'); 
const paintings = data.paintingData;
const artists = data.artistData;
const galleries = data.galleryData;

const handlePaintingAll = app => {
    app.get('/api/paintings', (req,resp) => { resp.json(paintings) } ); 
};

const handlePaintingById = app => {app.get('/api/painting/:id', (req, resp) => {
    const match = paintings.find((p) => p.paintingID == req.params.id);
    if (match)
    resp.json(match);
    else
    resp.json({"message": "no paintings for provided id"});
  });
};

const handlePaintingByGalleryId = app => {
    app.get('/api/painting/gallery/:id', (req,resp) => {  
        const galleryId = req.params.id;
        const matches = paintings.filter(p => p.gallery.galleryID == galleryId);
        if (matches.length > 0) 
        resp.json(matches); 
        else 
        resp.json({"message": "no paintings for provided gallery id"}); 
    });
};

const handlePaintingByArtistId = app => {
    app.get('/api/painting/artist/:id', (req, resp) => {
        const artistId = req.params.id;
        const matches = paintings.filter(p => p.artist.artistID == artistId);
        if (matches.length > 0) 
        resp.json(matches); 
        else 
        resp.json({"message": "no paintings for provided artist id"}); 
    });
};

const handlePaintingByYear = app => {
    app.get('/api/painting/year/:min/:max', (req, resp) => {
        const minYear = req.params.min;
        const maxYear = req.params.max;
        const matches = paintings.filter(p => p.yearOfWork >= minYear && p.yearOfWork <= maxYear);
        if (matches.length > 0) 
        resp.json(matches); 
        else 
        resp.json({"message": "no paintings for provided years"}); 
    });
};

const handlePaintingByText = app => {
    app.get('/api/painting/title/:text', (req, resp) => {
        const text = (req.params.text).toUpperCase();
        const matches = paintings.filter(p => ((p.title).toUpperCase()).includes(text));
        if (matches.length > 0)
        resp.json(matches); 
        else 
        resp.json({"message": `no paintings found with ${text} in the title`}); 
    });
}

const handlePaintingByName = app => {
    app.get('/api/painting/color/:name', (req, resp) => {
        const name = (req.params.name).toUpperCase();
        const matches = paintings.filter((p) => {
            for (let c of p.details.annotation.dominantColors) {
                if (c.name.toUpperCase() == name) {
                    return true;
                }
            }
        });
        if (matches.length > 0) 
        resp.json(matches); 
        else 
        resp.json({"message": `no painting for provided color name`}); 
    });
}

const handleArtistAll = app => {
    app.get('/api/artists', (req,resp) => { resp.json(artists) } );
}

const handleArtistByCountry = app => {
    app.get('/api/artists/:country', (req, resp) => {
        const country = req.params.country;
        const matches = artists.filter(p => p.Nationality.toUpperCase() == country.toUpperCase());
        if (matches.length > 0) 
        resp.json(matches); 
        else 
        resp.json({"message": "no artist for provided country"}); 
    });
}

const handleGalleryAll = app => {
    app.get('/api/galleries', (req,resp) => { resp.json(galleries) } ); 
}

const handleGalleryByCountry = app => {
    app.get('/api/galleries/:country', (req, resp) => {
        const country = req.params.country;
        const matches = galleries.filter(p => p.GalleryCountry.toUpperCase() == country.toUpperCase());
        if (matches.length > 0) 
        resp.json(matches); 
        else 
        resp.json({"message": "no galleries for provided country"}); 
    });
}


module.exports = { 
    handlePaintingAll, handlePaintingById, handlePaintingByGalleryId,
    handlePaintingByArtistId, handlePaintingByYear, handlePaintingByText,
    handlePaintingByName, handleArtistAll, handleArtistByCountry,
    handleGalleryAll, handleGalleryByCountry
    
};
