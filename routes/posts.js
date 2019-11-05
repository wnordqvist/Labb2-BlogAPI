module.exports={

  getPost(req, res){

    res.status(200).send(store.post)
},

addPosts(req, res){
  req.store.posts.push(req.body)
  res.status(201).send({id : req.store.posts.length-1})
},

updatePost(req, res){
  store.post[req.params.id] = req.body
  res.status(200).send(store.post[req.params.id])
},

deletePost(req, res){

  store.post.splice(req.params.id, 1)
  res.status(204).send()
},
