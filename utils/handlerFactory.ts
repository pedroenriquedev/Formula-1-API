import {Request, Response, NextFunction } from 'express'

export const getAllRecords = (prisma: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const records = await prisma.findMany();

        res.status(200).json({ 
            message: 'success',
            records
         });
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

        res.status(201).json({
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

        res.status(200).json({
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

        res.status(204).json({
            message: 'success'
        })
    } catch (error) {
        next(error)
    }
}