import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController, PessoasController, UsuariosController } from './../controllers';
import { ensureAuthenticated } from '../shared/middlewares';



const router = Router();



router.get('/', (req, res) => {
  res.send('Hello World!')
});

router.get('/cidades', ensureAuthenticated, CidadesController.getAllValidation,CidadesController.getAll); // trazer alguma coisa do backend
router.post('/cidades', ensureAuthenticated, CidadesController.createValidation,CidadesController.create); // criar algo novo
router.get('/cidades/:id', ensureAuthenticated, CidadesController.getByIdValidation,CidadesController.getById);
router.put('/cidades/:id', ensureAuthenticated, CidadesController.updateByIdValidation,CidadesController.updateById); // atualizar um registro
router.delete('/cidades/:id', ensureAuthenticated, CidadesController.deleteByIdValidation,CidadesController.deleteById);

router.get('/pessoas', ensureAuthenticated,  PessoasController.getAllValidation, PessoasController.getAll);
router.post('/pessoas', ensureAuthenticated,  PessoasController.createValidation, PessoasController.create);
router.get('/pessoas/:id', ensureAuthenticated,  PessoasController.getByIdValidation, PessoasController.getById);
router.put('/pessoas/:id', ensureAuthenticated,  PessoasController.updateByIdValidation, PessoasController.updateById);
router.delete('/pessoas/:id', ensureAuthenticated,  PessoasController.deleteByIdValidation, PessoasController.deleteById);

router.post('/entrar', UsuariosController.signInValidation, UsuariosController.signIn);
router.post('/cadastrar', UsuariosController.signUpValidation, UsuariosController.signUp);


export { router };