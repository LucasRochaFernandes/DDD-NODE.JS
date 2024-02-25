import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../respositories/answers-repository'
import { QuestionsRepository } from '../respositories/questions-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from './errors/resource-not-found'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

type AnswerQuestionUseCaseResponse = Either<ResourceNotFoundError, object>

export class AnswerQuestionUseCase {
  constructor(
    private answersRepository: AnswersRepository,
    private questionsRepository: QuestionsRepository,
  ) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
      createdAt: new Date(),
    })

    const question = await this.questionsRepository.findById(
      new UniqueEntityId(questionId),
    )
    if (!question) {
      return left(new ResourceNotFoundError())
    }

    await this.answersRepository.create(answer)

    return right({})
  }
}
