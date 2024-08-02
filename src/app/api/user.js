const pool = require('../../config/configDB');
const bcrypt = require('bcrypt');

const createUser = async (user) => {
  const { fullname, username, email, password, id_number, dob, country, profile_pic, card_number, card_owner, expiry_date, cvc } = user;
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    'INSERT INTO users (fullname, username, email, password, id_number, dob, country, profile_pic, card_number, card_owner, expiry_date, cvc) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
    [fullname, username, email, hashedPassword, id_number, dob, country, profile_pic, card_number, card_owner, expiry_date, cvc]
  );
  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
};
