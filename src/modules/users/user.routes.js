const router = require('express').Router();
const controller = require('./users.controller');

/**
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *       - Users
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Array with a list of users
 */
router.get('/', controller.getAll);

/**
 * @swagger
 *   /api/users/{id}:
 *     get:
 *       tags:
 *       - Users
 *       description: Get one user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
router.get('/:id', controller.getOne);


/**
 * @swagger
 *   /api/users/{New User}:
 *     get:
 *       tags:
 *       - Users
 *       description: Create user by inserting data
 *       parameters:
 *         - in: path
 *           name: User
 *           required: true
 *           description: The user's info
 *       responses:
 *         200:
 *           description: Create a user with a post
 */
router.post('/',controller.validate,controller.create);

module.exports = router;

