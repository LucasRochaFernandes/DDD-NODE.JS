import { Slug } from './value-objects/slug'
import { Entity } from '../../core/entities/entity'

interface QuestionProps {
  title: string
  content: string
  authorId: string
  slug: Slug
}

export class Question extends Entity<QuestionProps> {
  get title(): string {
    return this.props.title
  }

  get content(): string {
    return this.props.content
  }

  get authorId(): string {
    return this.props.authorId
  }
}
