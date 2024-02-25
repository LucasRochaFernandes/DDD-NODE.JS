import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { QuestionsRepository } from '@/domain/forum/application/respositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRespository implements QuestionsRepository {
  public items: Question[] = []
  async create(question: Question): Promise<void> {
    this.items.push(question)
  }

  async findById(id: UniqueEntityId): Promise<Question | null> {
    const quetion = this.items.find((item) => item.id === id)
    if (!quetion) {
      return null
    }
    return quetion
  }
}
