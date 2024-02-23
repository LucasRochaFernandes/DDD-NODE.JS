import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'

interface AnswerProps {
  content: string
  authorId: UniqueEntityId
  questionId: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  static create(
    props: Optional<AnswerProps, 'createdAt'>,
    id?: UniqueEntityId,
  ): Answer {
    if (props.content.length > 2400) {
      throw new Error('Invalid conten length')
    }
    const answer = new Answer(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )
    return answer
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  get content(): string {
    return this.props.content
  }

  set content(content: string) {
    if (content.length > 2400) {
      throw new Error('Invalid conten length')
    }
    this.content = content
    this.touch()
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat('...')
  }

  get createdAt(): Date {
    return this.createdAt
  }

  get updatedAt(): Date | undefined {
    return this.updatedAt
  }
}
