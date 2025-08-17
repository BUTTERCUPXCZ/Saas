import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();
const prisma = new PrismaClient();

//Token
const signToken = (user) => {
      const payload = { userId: user.id, role: user.role};
      return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN});
}


export const register = async (req, res) => {
    try{
    const { name, email, password, role } = req.body;
 
    const roleNormalized = role ? String(role).toLowerCase() : undefined;
    if(!name || !email || !password || !roleNormalized){
        res.status(400).json({success:false, message: "All fields are required"});
        return;
    }
    
    //check if the email exist
    const existing = await prisma.user.findUnique({where: {email}});
     if(existing){
      res.status(400).json({success: false, message: "Email already exist"});
      return;
     }

     // hashed the password
     const hashpassword = await bcrypt.hash(password, 10);
     
     const user = await prisma.user.create({
        data: {
                name,
                email,
                password: hashpassword,
                role,
        }
    });
     const { password: _, ...userSafe} = user;
     const token = signToken(user);

      res.status(201).json({success: true, user:userSafe, token});

    }catch(err){
      res.status(500).json({success: false, error: err.message});
    }
};

export const login = async (req, res) => {
    try{
    const { email, password } = req.body;

    //check if the email and password exist
    if( !email || !password){
        res.status(400).json({success:false, message: "All fields are required"});
        return;
    }
    
    //check if the email exist
     const user = await prisma.user.findUnique({where: { email}});
       if(!user){
        return res.status(401).json({success: false, message: "Invalid credentials"});
       }
    // check also the password if correct 
     const valid = await bcrypt.compare(password, user.password);
     if(!valid){
        return res.status(401).json({ success: false, message: "Invalid credentials"});
     }

    const { password: _, ...userSafe } = user;
    const token = signToken(user);
    
    return res.status(200).json({success: true, user: userSafe, token});
    }catch(err){
      res.status(500).json({success: false, error: err.message});
    }
};