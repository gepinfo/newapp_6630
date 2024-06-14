import * as mongoose from 'mongoose';
import tickModel from '../models/daomodels/tick';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class tickDao {
    private tick = tickModel;

    

    constructor() { }
    
    public async Delete(tickId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into tickDao.ts: Delete');

    

    
    
    
    this.tick.findByIdAndRemove(tickId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from tickDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(tickData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into tickDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(tickData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.tick.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from tickDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(tickData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into tickDao.ts: SearchForUpdate');

    

    
    
    
    this.tick.findOneAndUpdate({ _id: tickData._id }, tickData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from tickDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(tickData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into tickDao.ts: Update');

    

    
    
    
    this.tick.findOneAndUpdate({ _id: tickData._id }, tickData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from tickDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(tickId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into tickDao.ts: GetEntityById');

    

    
    
    
    this.tick.findById(tickId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from tickDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into tickDao.ts: GetAllValues');

    

    
    
    
    this.tick.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from tickDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(tickData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into tickDao.ts: Create');

    let temp = new tickModel(tickData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from tickDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(tickData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into tickDao.ts: GetNounCreatedBy');

    

    
    
    
    this.tick.aggregate(([
                        { $match: { $and: [{ created_by: tickData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from tickDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}