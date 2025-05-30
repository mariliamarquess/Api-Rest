import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { CidadesProvider } from '../../database/providers/cidades';
import { ICidade } from '../../database/models';
import { validation } from '../../shared/middlewares';


interface IParamProps {
  id?: number;
}

interface IBodyProps extends Omit<ICidade, 'id'> { }

export const updateByIdValidation = validation(getSchema => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  if (!req.params.id) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.'
      }
    });

    return;
  }

  const result = await CidadesProvider.updateById(req.params.id, req.body);
  if (result instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });

    return;
  }

  res.status(StatusCodes.NO_CONTENT).json(result);
};