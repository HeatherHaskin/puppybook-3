const db = require('./db');
const Puppy = db.model('puppy')
const Owner = db.model('owner')




db.sync({force:true}) // //bulkCreate return an array of instances
  .then(()=>{
  	return Promise.all(  //takes an array, array can contain other promises
          [
            Puppy.bulkCreate([
         		{name:'cici', imageUrl: "https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584", likes: 8},
         		{name:'momo', imageUrl: "http://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/puppy-2_0.jpg", likes: 11},
         		{name:'kiki', imageUrl: "https://www.askideas.com/media/19/Papillon-Puppy-Looking.jpg", likes: 5}

    		    ])
      ]
   )
  
  // .then(()=>{
  	// return 
    // Promise.all(
    //     Owner.bulkCreate([
    //   		{name: 'coco'},
    //   		{name: 'anna'}

    //   		], {returning: true})    //individualHook: true
    // )
  
  .then(()=>{
  	db.close()
  })
  .catch(err=>{
  	console.error(err, ' something went wrong!!!')
  	db.close()
  })
