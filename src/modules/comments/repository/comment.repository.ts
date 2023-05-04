/* eslint-disable prettier/prettier */
import { CreateCommentDto } from '../dto/create-comment.dto';
import { Comment } from '../entities/comment.entity';

export abstract class CommentRepository {
  abstract createComment(data: CreateCommentDto): Promise<Comment>;
  abstract deleteComment(id: string): Promise<void>;
}
