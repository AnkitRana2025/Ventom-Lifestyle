import jwt from "jsonwebtoken"
import { config } from "../config/config.js"

export const createAccessToken = ({userId, role})=>{
  const accessToken =  jwt.sign({userId,role},config.ACCESS_SECRET_TOKEN,{expiresIn:"15M"});
  return accessToken;
}

export const readAccessToken = (accessToken)=>{
 return jwt.verify(accessToken, config.ACCESS_SECRET_TOKEN);
}

export const createRefreshToken = ({userId, role}) =>{
  const refreshToken = jwt.sign({userId,role}, config.REFRESH_SECRET_TOKEN, {expiresIn:"7d"});
  return refreshToken;
}

export const readRefreshToken = (refreshToken)=>{
  return jwt.verify(refreshToken, config.REFRESH_SECRET_TOKEN);
}