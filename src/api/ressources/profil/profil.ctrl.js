import Profil from "./profil.model";
import ArticleService from "./profil.service";

export default {
    async findOne(req, res){
        try{
          const profil = await Profil.findOne({user: req.user.id});
          if(!profil){
            return res.status(404).json({err:'could not find this a user'})
          }
          return res.json(profil)
        }catch (err){
          console.error(err)
          return res.status(500).send(err)
        }
      },
      async findAll(req, res){
        try{
          const profil = await Profil.find({})
          .populate('users', ['firstName', 'avatar']);
          if(!profil){
            return res.status(404).json({err:'could not find this a user'})
          }
          return res.json(profil)
        }catch (err){
          console.error(err)
          return res.status(500).send(err)
        }
      },
      async create(req, res) {
          try {
            const { errors, isValid } = ArticleService.validateProfileInput(req.body);
            if (!isValid) {
                return res.status(400).json(errors);
              }
            const profileFields = {};
            profileFields.user = req.user.id;
            if (req.body.handle) profileFields.handle = req.body.handle;
            if (req.body.company) profileFields.company = req.body.company;
            if (req.body.website) profileFields.website = req.body.website;
            if (req.body.location) profileFields.location = req.body.location;
            if (req.body.bio) profileFields.bio = req.body.bio;
            if (req.body.status) profileFields.status = req.body.status;
            Profil.findOne({ user: req.user.id }).then(profil => {
                if (profil) {
                  // Update
                  Profil.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                  ).then(profil => res.json(profil));
                } else {
                  // Create
                  // Check if handle exists
                  Profil.findOne({ handle: profileFields.handle }).then(profil => {
                    if (profil) {
                      errors.handle = 'That handle already exists';
                      res.status(400).json(errors);
                    }
                    // Save Profil
                    new Profil(req.body).save().then(profil => res.json(profil));
                  });
                }
            })
        } catch (err){
            console.error(err)
            return res.status(500).send(err)
          }
    }
}