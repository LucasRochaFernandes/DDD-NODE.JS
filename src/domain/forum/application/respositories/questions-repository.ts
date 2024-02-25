import { Question } from '../../enterprise/entities/question'

export interface QuestionsRepository {
  create(data: Question): Promise<void>
}
