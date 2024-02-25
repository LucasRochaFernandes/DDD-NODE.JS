import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Question } from '../../enterprise/entities/question'

export interface QuestionsRepository {
  create(data: Question): Promise<void>
  findById(id: UniqueEntityId): Promise<Question | null>
}
