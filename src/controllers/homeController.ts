import { Request, Response } from 'express';

import { Product } from '../models/Product';
import  User  from '../models/User';

export const home = async (req: Request, res: Response)=>{
    //primeira forma
    await User.create({
        name: {
            firstName: 'Bonieky',
            lastName: 'Lacerda'
        },
        email:'teste@teste.com.br',
        age: 30,
        interests: ['programação', 'futebol', 'música']
    })

    //segunda forma 
    let newUser = new User()

    newUser.name = {
        firstName: 'Bonieky',
        lastName: 'Lacerda 2'
    };
    newUser.email = 'lalalatralalelo@email.com'
    newUser.age = 30;
    newUser.interests = ['programação', 'futebol', 'música'];

    await newUser.save();

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};