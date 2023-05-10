/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@ApiTags('Comments')
@Controller('api/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Criação de um comentário',
    type: Comment,
  })
  @UseGuards(JwtAuthGuard)
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Atualização de um comentário',
    type: Comment,
  })
  @UseGuards(JwtAuthGuard)
  update(@Body() updateCommentDto: UpdateCommentDto, @Param('id') id: string) {
    return this.commentsService.updated(updateCommentDto, id);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Deleta um comentário' })
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commentsService.remove(id);
  }
}
