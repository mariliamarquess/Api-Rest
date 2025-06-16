"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const middlewares_1 = require("../shared/middlewares");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.get('/cidades', middlewares_1.ensureAuthenticated, controllers_1.CidadesController.getAllValidation, controllers_1.CidadesController.getAll); // trazer alguma coisa do backend
router.post('/cidades', middlewares_1.ensureAuthenticated, controllers_1.CidadesController.createValidation, controllers_1.CidadesController.create); // criar algo novo
router.get('/cidades/:id', middlewares_1.ensureAuthenticated, controllers_1.CidadesController.getByIdValidation, controllers_1.CidadesController.getById);
router.put('/cidades/:id', middlewares_1.ensureAuthenticated, controllers_1.CidadesController.updateByIdValidation, controllers_1.CidadesController.updateById); // atualizar um registro
router.delete('/cidades/:id', middlewares_1.ensureAuthenticated, controllers_1.CidadesController.deleteByIdValidation, controllers_1.CidadesController.deleteById);
router.get('/pessoas', middlewares_1.ensureAuthenticated, controllers_1.PessoasController.getAllValidation, controllers_1.PessoasController.getAll);
router.post('/pessoas', middlewares_1.ensureAuthenticated, controllers_1.PessoasController.createValidation, controllers_1.PessoasController.create);
router.get('/pessoas/:id', middlewares_1.ensureAuthenticated, controllers_1.PessoasController.getByIdValidation, controllers_1.PessoasController.getById);
router.put('/pessoas/:id', middlewares_1.ensureAuthenticated, controllers_1.PessoasController.updateByIdValidation, controllers_1.PessoasController.updateById);
router.delete('/pessoas/:id', middlewares_1.ensureAuthenticated, controllers_1.PessoasController.deleteByIdValidation, controllers_1.PessoasController.deleteById);
router.post('/entrar', controllers_1.UsuariosController.signInValidation, controllers_1.UsuariosController.signIn);
router.post('/cadastrar', controllers_1.UsuariosController.signUpValidation, controllers_1.UsuariosController.signUp);
