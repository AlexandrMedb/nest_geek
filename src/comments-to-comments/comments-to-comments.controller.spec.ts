import { Test, TestingModule } from '@nestjs/testing';
import { CommentsToCommentsController } from './comments-to-comments.controller';
import { CommentsToCommentsService } from './comments-to-comments.service';

describe('CommentsToCommentsController', () => {
  let controller: CommentsToCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsToCommentsController],
      providers: [CommentsToCommentsService],
    }).compile();

    controller = module.get<CommentsToCommentsController>(CommentsToCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
