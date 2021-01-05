import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sahil Kumar',
    email: 'Sahil@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Chiku',
    email: 'Chiku@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
