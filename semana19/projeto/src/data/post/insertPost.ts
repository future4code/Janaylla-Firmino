import { connection } from "../../connection";
import {post} from '../../types/posts'
export const insertPost = async(
   {id, photo, description, type, authorId }:any
) => {

   await connection("labook_posts")
   .insert({
      id,
      photo,
      description,
      type,
      author_id: authorId
   })
}