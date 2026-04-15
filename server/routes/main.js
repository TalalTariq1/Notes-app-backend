const express=require('express')
const router=express.Router()
const Note=require('../models/Note.js')


router.get('/',async (req,res)=>{
    try{
        const notes=await Note.find().sort({createdAt:-1})
        res.render('index',{notes})
    }catch(error){
        console.log('Error fetching notes',error)
    }
})


router.get('/note/:id', async (req,res)=>{
    try{
       let id=req.params.id
    const note=await Note.findById({_id:id})
    res.render('note',{note})
    }catch(error){
        console.log(error)
    }   
})

router.get('/delete-note/:id',async (req,res)=>{
  try{
    const id=req.params.id;
    await Note.findByIdAndDelete(id)
    res.redirect('/')
  }catch(error){
    console.log(error)
    res.send('Could not delete the note')
  }
})

router.get('/add-note',(req,res)=>{
    res.render('add_note')
})


router.post('/add-note',async (req,res)=>{
    try{
        const{title,body}=req.body
        const new_note={
            title:title,
            body:body
        }
        await Note.create(new_note)
        res.redirect('/')

    }catch(error){
        console.log(error);

    }
})


router.get('/search', (req,res)=>{
   res.render('search',{data:null,searchTerm:null})
})

router.post('/search',async (req,res)=>{
    const search_term=req.body.searchTerm
    const data=await Note.find({
       $or: [
                { title: { $regex: search_term, '$options': 'i' } },
                { body: { $regex: search_term, '$options': 'i' } }
            ]
    })
    res.render('search',{data,search_term})
})


router.get('/edit-note/:id', async (req,res)=>{
    try{
        const id=req.params.id
    const note=await Note.findById(id);
    res.render('edit-note',{note})
        
    }
    catch(error){
        console.log(error)
    }
})

router.post('/edit-note/:id',async (req,res)=>{
    try{
       await Note.findByIdAndUpdate(req.params.id,{
        title:req.body.title,
        body:req.body.body
    });
    res.redirect(`/note/${req.params.id}`)
    }
    catch(error){
        console.log(error);
    }
  
})

module.exports=router