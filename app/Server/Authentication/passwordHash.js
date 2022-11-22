const bcrypt = require("bcrypt");           // hashes the password to turn plaintext into an unintelligible series of numbers and letters that is only revealed when unhashed for security purposes.
const salt = bcrypt.genSalt(10);

async function hashing(userPassword) {
  password = bcrypt.hash(userPassword, parseInt(salt));
  return password;
}
module.exports = hashing;
