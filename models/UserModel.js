const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, "This field is Mandatory"]
    },
    email:{
        type:String,
        required:[true,"Add the email"],
        unique:[true,"This email is taken"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },

},
{timestamps: true

},
)
module.exports =mongoose.model('User', userSchema)