import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers';



const router = Router();



router.get('/', (req, res) => {
  return res.send('Hello World!')
});

router.get('/cidades',CidadesController.getAllValidation,CidadesController.getAll); // trazer alguma coisa do backend
router.post('/cidades',CidadesController.createValidation,CidadesController.create); // criar algo novo
router.get('/cidades/:id',CidadesController.getByIdValidation,CidadesController.getById);
router.put('/cidades/:id',CidadesController.updateByIdValidation,CidadesController.updateById); // atualizar um registro
router.delete('/cidades/:id',CidadesController.deleteByIdValidation,CidadesController.deleteById);

export { router };