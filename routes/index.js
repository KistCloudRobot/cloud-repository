var express = require('express');
var router = express.Router();
const rdf = require('rdf');
const reasoner = require('../internal_module/skill-capacity-reasoner')

const ISRO_PREFIX = rdf.ns('http://www.robot-arbi.kr/ontologies/isro.owl#')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/capability', (req, res, next) => {
  let agents = req.body.agents
  agents.forEach(agent => {
    
  });
})

reasoner.getOwlInDirectory('./isro/')

module.exports = router;
