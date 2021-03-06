import express from 'express'
import ClassesControllers from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionsControler = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControler.index)
routes.post('/connections', connectionsControler.create)

export default routes;