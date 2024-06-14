import { Request, Response, NextFunction } from "express";
import { tickController } from '../controller/tickController';


export class Routes {
    private tick: tickController = new tickController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/tick/:id').delete(this.tick.Delete);
app.route('/tick/get/search').get(this.tick.Search);
app.route('/tick/get/update').put(this.tick.SearchForUpdate);
app.route('/tick').put(this.tick.Update);
app.route('/tick/:id').get(this.tick.GetEntityById);
app.route('/tick').get(this.tick.GetAllValues);
app.route('/tick').post(this.tick.Create);
app.route('/tick/userid/created_by').get(this.tick.GetNounCreatedBy);
     }

}