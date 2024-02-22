import { Answer } from '../entities/answer'
import { AnswersRepository } from '../respositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}
interface AnswerQuestionUseCaseResponse {
  answer: Answer
}

export class AnswerQuestionUseCase {
  constructor(private asnwersRepository: AnswersRepository) {}
  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = new Answer({ content, authorId: instructorId, questionId })
    await this.asnwersRepository.create(answer)
    return { answer }
  }
}
