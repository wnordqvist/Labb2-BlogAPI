module.exports={
  getComments(req, res){
    res.status(200).send(store.comments)
},

addComments(req, res){

  let newComments = req.body
  let id = store.comments.length
  store.comments.push(newComments)
  res.status(201).send({id: id})
},

updateComment(req, res){

  store.comments[req.params.id] = req.body
  res.status(200).send(store.comments[req.params.id])
},

deleteComment(req, res){

  store.comments.splice(req.params.id, 1)
  res.status(204).send()
},
