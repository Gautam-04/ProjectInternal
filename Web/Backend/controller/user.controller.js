import {User} from "../model/user.model.js"
import {generateToken} from "../db/generateToken.js";

const registerUser = async(req,res) => {
    const {name,employerId,role,password} = req.body;


    if([name,employerId,role,password].some((field)=>field?.trim === '')){
        return res.status(400).json({message: "Please fill all the necessary details",errorData: "Please fill all the necessary details"})
    }

    const existedUser = await User.findOne({employerId})

    if(existedUser){
        return res.status(400).json({message: "User already exists with this employer id",errorData: "User already exists pls use different email or username"})
    }


const user = await User.create({
    name,employerId,role,
    password,
})

const createdUser = await User.findById(user._id).select(
    "-password"
);

if(!createdUser){
    return res.status(400).json({message: 'User not created',errorData: 'User not created'});
}

const options = {
        httpOnly: true,
        secure: true,
    };

const accessToken = generateToken(user._id);


return res.status(200).cookie("accessToken",accessToken,options).json({message: "User created succesfully",createdUser})

}

const loginUser = async(req,res)=>{
const {employerId,password} = req.body;


const existedUser = await User.findOne({employerId})

if(!existedUser){
    return res.status(400).json({message: "User does not exist by this username/email", errorData: "User does Not exist"})
}

const isPasswordValid = await existedUser.isPasswordCorrect(password);

if(!isPasswordValid){
    return res.status(400).json({message: "Password is incorrect", errorData: "Password is incorrect"})
}

const options = {
        httpOnly: true,
        secure: true,
}

const loggedInUser = await User.findById(existedUser._id).select("-password")

const accessToken = generateToken(loggedInUser._id);

return res.status(200).cookie("accessToken",accessToken,options).json({message: "User Found Successfully",loggedInUser})
}

const logout = async(req,res)=>{
const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .json({message: "LoggedOut Successfully"});
}

export {registerUser,loginUser,logout}