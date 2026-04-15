const mongoose=require('mongoose')

const connectDB=async ()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database Connected ${connect.connection.host}`)
    }catch(error){
        console.log(`Database failed to connect ${error.message}`)      
    }
}

module.exports=connectDB