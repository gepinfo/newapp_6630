import { Request, Response } from 'express';
import { tickService } from '../service/tickService';
import { CustomLogger } from '../config/Logger'
let tick = new tickService();

export class tickController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tick.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into tickController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from tickController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tick.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into tickController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from tickController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tick.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into tickController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from tickController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tick.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into tickController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from tickController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tick.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into tickController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from tickController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tick.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into tickController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from tickController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tick.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into tickController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from tickController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tick.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into tickController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from tickController.ts: GetNounCreatedBy');
    })}


}