const Todo = require(`../models/todolist.js`); // uncomment for mongoose
const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res, next) => {
  Todo.find((err,docs)=>{
    if (err){
      return res.json({error:err})
    }
    res.json({payload:docs})
  })
});

router.post('/', (req,res)=>{
  let todo = new Todo(req.body);

  todo.save((err,doc) => {
    if(err){
      return res.json({error: err});
    }
    res.json({payload: doc})
  })
})

router.put('/',(req,res) => {
  Todo.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,doc) =>{
    if(err){
      return res.json({error:'nope'})
    }
    res.json({payload:doc})
  })
})

router.delete('/',(req,res)=>{
  Todo.findOneAndRemove({_id:req.body._id},(err,doc)=>{
    if (err){
      return res.json({error:err})
    }
    res.end()
  })
})
module.exports = router;
