import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Prabesh Bikram Shahi',
    email: 'prabesh@prabesh.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Prabase Bikram Shahi',
    email: 'prabase@prabase.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users
