const db = require('../database/models');
const Users = db.Users;

// get all employees as users
const index = async (req, res) => {
    try {
        const result = await Users.findAndCountAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};

// add a new employee as user
const store = async (req, res) => {
    try {
        const save = await Users.create(req.body);
        res.status(201).json({ message: 'Employee added successfully', user: save });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};

// get employee by ID
const show = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Users.findByPk(id);
        
        if (!data) {
            return res.status(404).json({ message: `User with ID ${id} not found` });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};

// update employee by ID
const update = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id);
        
        if (!user) {
            return res.status(404).json({ message: `User with ID ${req.params.id} not found` });
        }

        await user.update(req.body);
        res.status(200).json({ message: 'Employee updated successfully', updatedUser: user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete employee by ID
const destroy = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id);
        
        if (!user) {
            return res.status(404).json({ message: `User with ID ${req.params.id} not found` });
        }

        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    index,
    store,
    show,
    update,
    destroy
};
