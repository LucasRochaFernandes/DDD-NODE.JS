import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../respositories/questions-repository'

interface CreateQuestionUseCaseResponse {
  question: Question
}
interface CreateQuestionUseCaseRequest {
  authorId: string
  content: string
  title: string
}

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}
  async execute({
    authorId,
    content,
    title,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityId(authorId),
      content,
      title,
    })
    await this.questionsRepository.create(question)
    return {
      question,
    }
  }
}
