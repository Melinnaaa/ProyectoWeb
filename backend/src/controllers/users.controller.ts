import {Request, Response} from 'express';
import User from '../models/users.model';

export const getUsers = async (req:Request, res:Response) =>{
    const listUsers = await User.findAll();

    res.json(listUsers)
}

export const getUser = async (req:Request, res:Response) =>{
    const {id} = req.params;
    const user = await User.findByPk(id);

    if (user)
    {
        res.json(user);
    }
    else{
        res.status(404).json({
            msg: `No existe un usuario con rut ${id}`
        })
    }
}

export const deleteUser = async (req:Request, res:Response) =>{
    const {id} = req.params;
    const user = await User.findByPk(id);

    if(user)
    {
        await user.destroy();
        res.json({
            msg: 'El usuario fue eliminado con exito'
        })
    }
    else
    {
        res.status(404).json({
            msg: `No existe un usuario con rut ${id}`
        })
    }
    
}

export const putUser = async (req: Request, res: Response) => {
    const { id } = req.params; 
    const { body } = req;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                msg: 'Usuario no encontrado'
            });
        }

        await user.update(body);

        res.json({
            msg: 'Usuario actualizado correctamente',
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            msg: 'Error al actualizar el usuario',
            error
        });
    }
};