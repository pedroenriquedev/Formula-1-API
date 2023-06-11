import { NextFunction, Request, Response } from "express"
import AppError from "./appError"
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientRustPanicError, PrismaClientValidationError } from "@prisma/client/runtime/library"

const handle_uncaught_prisma_known_error = (err: PrismaClientKnownRequestError, res: Response) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('Uncaught Prisma known request error');
        return res.status(500).json({
            status: 'Fail',
            message: 'Not caught by error handler.',
            errorCode: err.code,
            stack: err.message,
            error_meta: err.meta || 'n/a',
            error_stack: err.stack || 'n/a'
        })
    }
    return res.status(500).json({
        status: 'Fail',
        message: 'Something went wrong on your side.',
        stack: err.message,
    })
}

const handle_unknown_prisma_known_error = (err: PrismaClientUnknownRequestError, res: Response) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('Unknown Prisma request error');
        return res.status(500).json({
            status: 'Error',
            message: "Unkown Prisma error. Try again later.",
            stack: err.message
        })
    }
    return res.status(500).json({
        status: 'Error',
        message: 'Something went wrong with Prisma. Try again later.',
        stack: err.message,
    })
}

const handle_prisma_panic_rust_error = (err: PrismaClientRustPanicError, res: Response) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('Prisma panic rust error.');
        return res.status(500).json({
            status: 'Error',
            message: "Something went very wrong. Prisma Client or the whole Node process must be restarted.",
            stack: err.message
        })
    }
    return res.status(500).json({
        status: 'Error',
        message: 'Something went very wrong. Try again later.'
    })
}

const handle_uncaught_error = (err: AppError | Error, res: Response) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('---Uncaught error---');
        res.status(500).json({
            status: 'Error',
            message: 'Uncaught error. Check terminal for directions.'
        })
    }
    return res.status(500).json({
        status: 'Error',
        message: 'Something went very wrong. Try again later.'
    })
}

const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('--ERROR IN DEVELOPMENT---')
        console.log(err)
    }
    // code, meta, message, clientVersion
    if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
            case 'P2000':
            return res.status(400).json({
                status: 'Error',
                message: "The provided value for the column is too long for the column's type.",
                fields: [err.meta?.target] || 'n/a'
            })
            
            case 'P2001':
            return res.status(400).json({
                status: 'Error',
                message: "The record searched for in the where condition does not exist.",
                fields: [err.meta?.target] || 'n/a'
            })
            
            case 'P2002':
            return res.status(400).json({
                status: 'Error',
                message: "Record already exists in the database.",
                constrained_fields: [err.meta?.target] || 'n/a'
            })
            
            case 'P2003':
            return res.status(400).json({
                status: 'Error',
                message: "Foreign key constraint failed on the field.",
                fields: [err.meta?.target] || 'n/a'
            })
            
            
            
            default:
            handle_uncaught_prisma_known_error(err, res);
        }
    }
    
    // message, clientVersion
    if (err instanceof PrismaClientUnknownRequestError) {
        handle_unknown_prisma_known_error(err, res);
    }
    // message, clientVersion
    if (err instanceof PrismaClientRustPanicError) {
        handle_prisma_panic_rust_error(err, res);
    }
    // message, clientVersion
    if (err instanceof PrismaClientValidationError) {
        return res.status(400).json({
            status: 'Error',
            message: 'Missing or invalid fields when creating record. Please refer to the API documentation for reference.'
        })
    }
    // check if it is a generated app error
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })
    }
    // uncaught errors:
    handle_uncaught_error(err, res);
}

export default ErrorHandler;