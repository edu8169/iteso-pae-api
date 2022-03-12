const User = require("./user.model");

const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const user = new User();
        const body = req.body;
        user.create(body).then(result =>{
            //console.log(result);
            //body.id = result.insertedId
            res.json(result);
        })
        .catch(err => {
            res.sendStatus(409);
        })
    },
    //verificar que sea solo un mail registrado dentor de create,checar que la contraseña ingresada seala misma que la que esta guardada
    validate: (req, res,next) => {
        const user = new User();
        const body = req.body;
        user.getbyEmail(body.email).then(result => {
            if(result){
                next();
            } else {
                res.sendStatus(409)
            }
        })
        
    }
    

}

module.exports = UsersController;