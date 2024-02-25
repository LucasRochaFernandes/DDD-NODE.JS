import { AnswersRepository } from '@/domain/forum/application/respositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRespository implements AnswersRepository {
  public answers: Answer[] = []
  async create(answer: Answer): Promise<void> {
    this.answers.push(answer)
  }
}
