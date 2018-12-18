var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ads', function(req, res, next) {
  let ads = fs.readFileSync('./database/ads.json');
  let adsArray = JSON.parse(ads);
  res.render('ads', { title: 'Ads', ad: adsArray });
});

router.get('/ad-create', function(req, res, next) {
  res.render('ad-create', { title: 'Create Ad' });
});

router.post('/db/create-ad', (req, res) => {
  let ads = fs.readFileSync('./database/ads.json');
  let adsArray = JSON.parse(ads);
  adsArray.push(req.body);
  fs.writeFileSync('./database/ads.json', JSON.stringify(adsArray));
  res.redirect('/ads');
});

router.get('/ad-details/:id', (req, res) => {
  let id = req.params.id;

  let ads = fs.readFileSync('./database/ads.json');
  let adsArray = JSON.parse(ads);
  res.render('ad-details', { title: adsArray[id].title, ad: adsArray[id] });

});

module.exports = router;
