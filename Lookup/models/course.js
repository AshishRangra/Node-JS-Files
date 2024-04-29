const mongoose=require("mongoose");
const course_schema=new mongoose.Schema({
    course_name:{
        type:String
    }
})
const course_data=mongoose.model('course_data',course_schema);
module.exports=course_data;