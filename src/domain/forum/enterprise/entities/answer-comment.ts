import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface AnswerCommentProps {
  authorId: UniqueEntityId
  content: string
  createdAt: Date
  updatedAt?: Date | null
}

export class AnswerComment extends Entity<AnswerCommentProps> {
  static create(
    props: Optional<AnswerCommentProps, 'createdAt' | 'updatedAt'>,
    id?: UniqueEntityId,
  ) {
    const answerComment = new AnswerComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )
    return answerComment
  }
}
