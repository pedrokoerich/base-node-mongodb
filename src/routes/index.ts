import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);
router.post('/users', UserController.createUser);
router.put('/users', UserController.updateUser);
router.delete('/users', UserController.deleteUser);

export default router;