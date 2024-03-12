import {Router} from 'express'
import { authMiddlewareUser } from './Custom/authMiddleware.js  ';

const router = Router();

router.get("/login", (req,res)=>{
    res.render('login')
})

router.get("/register", (req,res)=>{
    res.render('register')
})

router.get("/",authMiddlewareUser, (req,res)=>{
    res.render('profile', {user:req.session.user})
})

export default router