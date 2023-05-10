/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentRepository } from './repository/comment.repository';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CommentsService {
  constructor(
    private commentRepository: CommentRepository,
    private prisma: PrismaService,
  ) {}
  async create(createCommentDto: CreateCommentDto) {
    const { carId, userId } = createCommentDto;

    const findCar = await this.prisma.car.findUnique({ where: { id: carId } });
    if (!findCar) {
      throw new NotFoundException('Car id not found');
    }

    const findUser = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!findUser) {
      throw new NotFoundException('User id not found');
    }

    const newComment = await this.commentRepository.createComment(
      createCommentDto,
    );
    return newComment;
  }

  async remove(id: string) {
    const findCommentId = await this.prisma.comment.findUnique({
      where: { id },
    });
    if (!findCommentId) {
      throw new NotFoundException('Comment not found');
    }

    return this.commentRepository.deleteComment(id);
  }

  async updated(payload: UpdateCommentDto, id: string) {
    const findComment = await this.prisma.comment.findUnique({ where: { id } });
    if (!findComment) {
      throw new NotFoundException('comment id not found');
    }
    return this.commentRepository.updateComment(payload, id);
  }
}
