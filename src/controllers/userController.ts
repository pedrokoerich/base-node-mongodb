import { Request, Response } from 'express';
import User from '../models/User';

export const upsertUser = async (req: Request, res: Response) => {
    // Se o campo de interesses estiver vazio, usa o backup
    let interestsString = req.body.interests && req.body.interests.trim() !== ''
        ? req.body.interests
        : req.body.originalInterests || '';

    const filter = req.body.id ? { _id: req.body.id } : { email: req.body.email };
    const update = {
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
        email: req.body.email,
        age: parseInt(req.body.age),
        interests: interestsString
            ? interestsString.split(',').map((i: string) => i.trim()).filter((i: string) => i)
            : []
    };

    await User.findOneAndUpdate(filter, update, { upsert: true, new: true, setDefaultsOnInsert: true });
    res.redirect('/');
};

export const editUser = async (req: Request, res: Response) => {
    let user = await User.findById(req.params.id);
    res.render('pages/userEdit', { user });
}

export const deleteUser = async (req: Request, res: Response) => {
    await User.findByIdAndDelete(req.params.id);

    res.redirect('/');
};

