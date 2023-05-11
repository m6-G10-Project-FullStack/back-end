import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CommentRepository } from './repository/comment.repository';
import { CommentPrismaRepository } from './repository/prisma/comment.prisma.repository';

@Module({
  controllers: [CommentsController],
  providers: [
    CommentsService,
    PrismaService,
    { provide: CommentRepository, useClass: CommentPrismaRepository },
  ],
})
export class CommentsModule {}
