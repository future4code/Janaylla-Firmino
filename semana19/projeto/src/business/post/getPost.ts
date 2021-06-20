
import { Request, Response } from "express"
import { selectPost } from "../../data/post/selectPost";

export const getPost = async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { id } = req.params

      const post = await selectPost(id)

      if (!post.id) {
         res.statusCode = 404
         message = "Post not found"
         throw new Error(message)
      }
      res.status(200).send({ message, post })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
 }