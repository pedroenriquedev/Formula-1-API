import { db } from '../utils/db.server'
import { createRecord, deleteRecord, getAllRecords, updateRecord } from '../utils/handlerFactory'
import {Request, Response, NextFunction } from 'express'

const genAPIKey = () => {
  //create a base-36 string that contains 30 chars in a-z,0-9
  return [...Array(30)]
  .map((e) => ((Math.random() * 36) | 0).toString(36))
  .join('');
};

export const getAllUsers = getAllRecords(db.user);

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {username} = req.body;
    const api_key = genAPIKey();
    const usage = {
      count: 0,
      date: new Date()
    }
    
    await db.user.create({
      data: {
        username,
        api_key,
        usage: {
          create: [
            usage
          ]
        }
      }
    })
    res.status(201).json({
      status: 'success',
      message: 'succesfully sign up',
      username,
      api_key
    })
  } catch (error) {
    next(error)
  }
};

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  const MAX_API_CALLS = 100;
  try {
    // there must be an username and api_key
    const username = req.header('username');
    // api_key must be sent via headers
    const api_key = req.header('x-api-key');

    if (!username || !api_key) throw new Error('Username and API key required.')
    const user = await db.user.findUnique({
      where: {
        api_key
      },
      include: {
        usage: true
      }
    })
    if (!user) throw new Error('Please provide a valid API key.')
    if (user.username !== username) throw new Error('Invalid crendentials. Please try again.')
    
    // if everything is good, update usage
    // if 
    let today = new Date().toISOString().split("T")[0];
    let usageCount = user.usage.findIndex((day) => day.date.toISOString().split("T")[0] === today);
    
    if (usageCount >= 0) {
      // update the count if < MAX
      
      if (user.usage[usageCount].count + 1 <= MAX_API_CALLS) {
        const usage = await db.userApiUsage.update({
          where: {id: user.usage[usageCount].id },
          data: {
            count: user.usage[usageCount].count + 1
          }
        })
      } else {
        // send error if >= MAX
        return res.status(429).json({
          status: 'Failed',
          message: `Number of API calls (${user.usage[usageCount].count}) excedeed the limit ${MAX_API_CALLS}.`
        })
      }
    } else {
      // new usage with date
      const usage = await db.userApiUsage.create({
        data: {
          userId: user.id,
          count: 0,
          date: new Date()
        }
      })
    }
    req.user = user;
    next()
  } catch (error) {
    next(error)
  }
}

export const restrictTo = (...roles: string[]) => (req: Request, res: Response, next: NextFunction) => {

  const role_index = roles.findIndex((role) => role === req.user.role);

  if (role_index === -1) {
    return res.status(401).json({
      status: 'Unauthorized',
      message: `You do not have permission to this route. Please contact our team.`
    })
  }
  next()
}

export const updateUser = updateRecord(db.user);

export const deleteUser = deleteRecord(db.user);

// user will register with username, receive api_key and default role of "user"
// every request, user will need to pass username and api_key
// we're gonna check for username first, then api_key

// "username": "pedrox",
// "api_key": "49ir4k5h4gtbu1kh7j0dbl9171rjt6"


