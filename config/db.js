// getting-started.js
const mongoose = required('mongoose');



const monggoDB =  async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log('DB connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


module.exports = monggoDB