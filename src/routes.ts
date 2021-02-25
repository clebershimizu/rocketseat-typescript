import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Cleber', 
    email: 'cleberlives@helsinki.com', 
    password: '1@3$5^',
    techs: [
      'Node.js',
      'ReactJS',
      'ReactNative',
      { title: 'JavaScript', experience: 100 },
    ],
  });
  
  return response.json({ message: 'Hello Helsinki!' });
}