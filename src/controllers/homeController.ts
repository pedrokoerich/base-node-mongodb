import { Request, Response } from 'express';
;
import  User  from '../models/User';

export const home = async (req: Request, res: Response) => {
    const users = await User.find();

    res.render('pages/home', {
        users
    });
}
