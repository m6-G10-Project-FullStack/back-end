/* eslint-disable prettier/prettier */
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { Comment } from '../entities/comment.entity';

export abstract class CommentRepository {
  abstract createComment(data: CreateCommentDto): Promise<Comment>;
  abstract deleteComment(id: string): Promise<void>;
  abstract updateComment(data: UpdateCommentDto, id: string): Promise<Comment>;
}
