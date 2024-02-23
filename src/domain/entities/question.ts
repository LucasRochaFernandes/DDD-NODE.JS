import { Slug } from './value-objects/slug'
import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'

interface QuestionProps {
  title: string
  content: string
  bestAnswerId?: UniqueEntityId
  authorId: UniqueEntityId
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const question = new Question(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )
    return question
  }

  get title(): string {
    return this.props.title
  }

  get content(): string {
    return this.props.content
  }

  get authorId(): string {
    return this.props.authorId.toString()
  }
}
