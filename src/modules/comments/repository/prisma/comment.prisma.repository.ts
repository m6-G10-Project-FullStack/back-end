/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../comment.repository';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { Comment } from '../../entities/comment.entity';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateCommentDto } from '../../dto/update-comment.dto';

@Injectable()
export class CommentPrismaRepository implements CommentRepository {
  constructor(private prisma: PrismaService) {}

  async createComment(data: CreateCommentDto): Promise<Comment> {
    const comment = new Comment();
    Object.assign(comment, { ...data });

    const newComment = await this.prisma.comment.create({
      data: { ...comment },
    });

    return newComment;
  }
  async deleteComment(id: string): Promise<void> {
    await this.prisma.comment.delete({ where: { id } });
  }

  async updateComment(data: UpdateCommentDto, id: string): Promise<Comment> {
    return await this.prisma.comment.update({
      where: { id },
      data: { ...data },
    });
  }
}
