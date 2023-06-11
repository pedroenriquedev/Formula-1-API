import {Request, Response, NextFunction } from 'express'
import { QueryParser } from './queryHandler';



export const getAllRecords = (prisma: any) => async (req: Request, res: Response, next: NextFunction) => {
    const query = QueryParser.parse(req);
    try {
        const records = await prisma.findMany(query);

        return res.status(200).json({ 
            message: 'success',
            results: records.length,
            records
         });
    } catch (error) {
        next(error);
    }
}

export const getOneRecord = (prisma: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        
        const record = await prisma.findUnique({
            where: {id}
        })

        return res.status(200).json({
            message: 'success',
            record
        })
    } catch (error) {
        next(error);
    }
}

export const createRecord = (prisma: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const record_input = req.body;
        
        const new_record = await prisma.create({
            data: record_input
        })

        return res.status(201).json({
            message: 'success',
            new_record
        })
    } catch (error) {
        next(error);
    }
}

export const updateRecord = (prisma: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        
        const record = await prisma.update({
            where: {id},
            data: req.body
        })

        return res.status(200).json({
            message: 'success',
            record
        })
    } catch (error) {
        next(error);
    }
}

export const deleteRecord = (prisma: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await prisma.delete({
            where: { id }
        })

        return res.status(204).json({
            message: 'success'
        })
    } catch (error) {
        next(error)
    }
}