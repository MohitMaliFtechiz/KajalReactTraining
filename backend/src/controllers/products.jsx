
exports.signup = async(req, res) => {
    try{
        res.status(200).json({msg:"I am signup"});
    }catch(error){
        res.status(400).json({msg:"not signup"});
    }
  
}
exports.signin = async(req, res) => {
    try{
        console.log(req.body)
        res.status(200).json({msg:"request body"});
    }catch(error){
        res.status(400).json({msg:"not signin"});
    }
  
}

// module.exports  = {signup, signin};