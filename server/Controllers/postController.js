const bcrypt = require('bcrypt');

module.exports = {
        getPost: (req, res) => {
          res.status(200).send({ email: "", user_id: [] });
        },
      };