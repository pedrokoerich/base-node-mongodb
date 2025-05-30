import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);
router.post('/users', UserController.upsertUser);
router.get('/users/new', UserController.editUser);
router.get('/users/edit/:id', UserController.editUser);
router.post('/users/delete/:id', UserController.deleteUser);

export default router;