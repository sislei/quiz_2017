var express = require('express');
var router = express.Router();
var models = require("../models");

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Pagina de creditos
router.get('/author', function(req, res, next) {
    res.render('author');
});

//Pagina de ayuda
router.get('/help', function(req, res, next) {
    res.render('ayuda');
});


// Autoload de rutas que usen :quizId
router.param('quizId', quizController.load);

//Randomplay
router.get('/quizzes/randomplay', quizController.randomplay);

//Randomcheck

router.get('/quizzes/randomcheck/:quizId(\\d+)', quizController.randomcheck);

// Definición de rutas de /quizzes
router.get('/quizzes',                     quizController.index);
router.get('/quizzes/:quizId(\\d+)',       quizController.show);
router.get('/quizzes/new',                 quizController.new);
router.post('/quizzes',                    quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  quizController.edit);
router.put('/quizzes/:quizId(\\d+)',       quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    quizController.destroy);

router.get('/quizzes/:quizId(\\d+)/play',  quizController.play);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);


module.exports = router;
