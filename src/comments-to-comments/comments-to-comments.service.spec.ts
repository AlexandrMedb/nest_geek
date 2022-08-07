import { Test, TestingModule } from '@nestjs/testing';
import { CommentsToCommentsService } from './comments-to-comments.service';

describe('CommentsToCommentsService', () => {
  let service: CommentsToCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsToCommentsService],
    }).compile();

    service = module.get<CommentsToCommentsService>(CommentsToCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
