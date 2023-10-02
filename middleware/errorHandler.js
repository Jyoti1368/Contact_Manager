const errorHandler= (err,req,res,next) =>{
const statusCode = res.statusCode ? res.statusCode :500
const constant = require('../constants/constant')
switch (statusCode) {
    case constant.Bad_Request:
        res.json({title:"Validation Fail", message: err.message, stacktrace :err.stack})
        
        break;
case constant.Unauthorized:
    res.json.status(401)({title:"not found", message: err.message, stacktrace :err.stack})

    case constant.Forbidden:
        res.json({title:"forbidded", message: err.message, stacktrace :err.stack})


        case constant.Internal_Server:
            res.json({title:"server error", message: err.message, stacktrace :err.stack})

    default:
        console.log("all ok good to go")
        break;
}




res.json({title:"not found", message: err.message, stacktrace :err.stack})
}

module.exports = errorHandler