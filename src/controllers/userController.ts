import { Request, Response } from 'express';
import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
    let user = new User();

    user.name.firstName = req.body.firstName;
    user.name.lastName = req.body.lastName;
    user.email = req.body.email;
    user.age = parseInt(req.body.age);
    user.interests = req.body.interests ? req.body.interests.split(',') : [];
    await user.save();
    
    res.redirect('/');
};

export const updateUser = async (req: Request, res: Response) => {
    let user = await User.findById(req.body.id);

    if (user) {
        user.name.firstName = req.body.firstName;
        user.name.lastName = req.body.lastName;
        user.email = req.body.email;
        user.age = parseInt(req.body.age);
        user.interests = req.body.interests ? req.body.interests.split(',') : [];
        await user.save();
    }

    res.redirect('/');
}

export const deleteUser = async (req: Request, res: Response) => {
    await User.findByIdAndDelete(req.body.id);

    res.redirect('/');
};

