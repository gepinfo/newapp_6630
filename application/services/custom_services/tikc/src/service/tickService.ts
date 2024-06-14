import { Request, Response } from 'express';
import {tickDao} from '../dao/tickDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let tick = new tickDao();

export class tickService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into tickService.ts: Delete')
     let  tickId = req.params.id;
     tick.Delete(tickId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from tickService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into tickService.ts: Search')
     let  tickData = req.query;
     tick.Search(tickData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from tickService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into tickService.ts: SearchForUpdate')
     let  tickData = req.body;
     tick.SearchForUpdate(tickData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from tickService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into tickService.ts: Update')
     let  tickData = req.body;
     tick.Update(tickData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from tickService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into tickService.ts: GetEntityById')
     let  tickId = req.params.id;
     tick.GetEntityById(tickId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from tickService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into tickService.ts: GetAllValues')
     
     tick.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from tickService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into tickService.ts: Create')
     let  tickData = req.body;
     tick.Create(tickData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from tickService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into tickService.ts: GetNounCreatedBy')
     let  tickData = { created_by: req.query.createdby };
     tick.GetNounCreatedBy(tickData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from tickService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}