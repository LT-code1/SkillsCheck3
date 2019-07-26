///function calls to database sql functions

module.exports = {


};




// module.exports = {
  
//     create: (req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const { name, price, url } = req.body;
    
//         dbInstance.addProduct([name, price, url])
//           .then(() => res.sendStatus(200))
//           .catch(err => {
//             res.status(500).send({ errorMessage: "Oops! Something went wrong." });
//             console.log(err)
//           });
//       },
  
//     getOne: (req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const { id } = req.params;        //get /:id
    
//         dbInstance.getProduct(id)
//           .then(product => res.status(200).send(product))
//           .catch(err => {
//             res.status(500).send({ errorMessage: "Oops! Something went wrong." });
//             console.log(err)
//           });
//       },
      
//     getAll: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');     //gives access to sql commands
  
//       dbInstance.getProducts()
//         .then( products => res.status(200).send( products ) )
//         .catch( err => {
//           res.status(500).send({errorMessage: "Oops! Something went wrong."});
//           console.log(err)
//         } );
//     },

//     update: (req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const { id } = req.params;        //get /:id
//         const { name, price, url } = req.body;
//         console.log(res);
       
//         dbInstance.updateProduct([id, name, price, url])
//           .then((response) => res.status(200).send(response) )
//           .catch(err => {
//             res.status(500).send({ errorMessage: "Oops! Something went wrong." });
//             console.log(err)
//           });
          
//       },

//     delete: (req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const { id } = req.params;        //get /:id
    
//         dbInstance.deleteProduct(id)
//           .then((response) => res.status(200).send(response))
//           .catch(err => {
//             res.status(500).send({ errorMessage: "Oops! Something went wrong." });
//             console.log(err)
//           });
//       }

//   };



