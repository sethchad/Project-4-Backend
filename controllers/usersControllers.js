const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;

// GET USER PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id, {
    
    // include: ArtistModel,
    
    // If you use the code below instead of the code above, only the artist name and ID are returned.
    // You can include addtional models as objects in the structure below

    // include: [
    //   { 
    //     model: ArtistModel, 
    //     attributes: ['id', 'name'] 
    //   },
    // ],

  });
  res.json({ user });
});

module.exports = router;