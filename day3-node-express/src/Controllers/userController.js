import users from '../Data/fakeUsers.json';

const getUsers = (req, res) => {
    res.json(users);
};

const createUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: 'User created', user: newUser });
};

export { getUsers, createUser };

