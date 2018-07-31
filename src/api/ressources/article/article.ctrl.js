import Article from "./article.model";
import ArticleService from "./article.service";

export default {
    async create(req, res) {
        try {
            const { value, error } = ArticleService.validateBody(req.body);
            if (error && error.details) {
                return res.json(error);
            }
            console.log(req.user);

            const article = await Article.create({
              title : req.body.title,
              author: req.user.firstName,
              body : req.body.body
            })
            return res.json(article);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    }, 
    async findAll(req, res){
        try {
            const article = await Article.find({})
            if(!article){
              return res.status(404).json({err: 'could not find the article'})
            }
            return res.json(article)
          } catch(err){
            console.error(err)
            return res.status(500).send(err)
            }
    },
    async findOne(req, res){
        try{
          const{ id } = req.params
          const article = await Article.findById(id);
          if(!article){
            return res.status(404).json({err:'could not find this article'})
          }
          return res.json(article)
        }catch (err){
          console.error(err)
          return res.status(500).send(err)
        }
      },
      async update(req, res){
        try {
          const { id } = req.params;

          const { value, error } = ArticleService.validateBody(req.body);
          if(error && error.details){
            return res.status(400).json(error)
          }
          const article = await Article.findOneAndUpdate({_id: id}, value, {new: true})
          if(!article){
            return res.status(404).json({err: 'could not find the article'})
          }
          return res.json(article)
        } catch(err){
          console.error(err)
          return res.status(500).send(err)
        }
      },
      async delete(req, res){
        try {
          const { id } = req.params
          const article = await Article.findOneAndRemove({_id:id})
          if(!article){
            return res.status(404).json({err: 'could not find the article'})
          }
          return res.json(article)
        } catch(err){
          console.error(err)
          return res.status(500).send(err)
          }
      }
}