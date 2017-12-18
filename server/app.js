const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express()
const PORT = 3000
const Puppy = db.model('puppy')
const Owner = db.model('owner')

// Logging middleware
app.use(morgan('dev'))

// Body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// If you want to add routes, they should go here!
// You can either write them here, or organize them into
// a separate router!

// - GET /api/puppies
//   - note: when we get all puppies, we should *include* each puppy's owner!
//   - responds with all of the puppies from the database
app.get('/api/puppies', (req, res, next)=>{
  Puppy.findAll({include:[Owner]})
       .then(results=>{
        res.send(results)
       })
       .catch(next)
})

// - POST /api/puppies 
//   - responds with the newly created puppy
//   - the new puppy should also include it's owner (see the hint below for some more guidance)

app.post('/api/puppies', (req, res, next)=>{  //create a new puppy
  Puppy.create(req.body)
      .then(puppy=>
        Puppy.findById(puppy.id, {include:[Owner]})
      )
      .then(created=>{
        res.json(created)
      })
      .catch(next);
})



// - GET /api/puppies/:id
//   - responds with the puppy with the matching id
app.get('/api/puppies/:id', (req, res, next)=>{
  //Puppy.findById(req.params.id)
  Puppy.findById(req.params.id)
    .then(foundPuppies=>
      res.json(foundPuppies)
    )
    .catch(next)
})




// - PUT /api/puppies/:id
//   - responds with the updated puppy
//   - the updated puppy should also include it's owner
app.put('/api/puppies/:id', (req, res, next)=>{
  Puppy.update(req.body,
    {where:{id:req.params.id},include:[{model:Owner}],
    returning: true
  })                                                  //where to include owner?????
      .then(updatedPuppy=>
        res.json(updatedPuppy)
      )
      .catch(next);
})
    // Puppy.findById(req.params.id)
    //     .then(puppy=>puppy.update(req.body))
    //     .then(updated=>res.json(updated))
    //     .catch(next)
// })
// - DELETE /api/puppies/:id
//   - responds with a 204 status code
app.delete('/api/puppies/:id',(req, res, next)=>{
  Puppy.destroy({
    where: {id: req.params.id}
  })
  .then(()=>{
    res.status(204).send();
  })
  .catch(next)
})

// - GET /api/owners
//   - responds with all of the owners
app.get('/api/owners',(req, res, next)=>{
  Owner.findAll()
      .then(results=>{
        res.json(results)
      })
      .catch(next)
})






// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})

db.sync()                                              //need to {force:true}?????
  .then(() => console.log('The database is synced'))
  .then(() =>
    app.listen(PORT, () =>
      console.log(`
        Listening on port ${PORT}
        http://localhost:3000/
      `)
    )
  )
