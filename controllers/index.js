const models = require('../models');

const sendEmail = async (req, res) => {
  try {
    const post = await models.EmailRecords.create(req.body);
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
};

const getAllMessges = async (req, res) => {
    try {
      const posts = await models.EmailRecords.findAll({
        // include: [
        //   {
        //     model: models.User,
        //     as: 'senderName'
        //   }
         
        // ]
      });
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

module.exports = {
  sendEmail,
  getAllMessges
}