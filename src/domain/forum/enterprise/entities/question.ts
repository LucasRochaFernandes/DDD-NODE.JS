import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Slug } from './value-objects/slug'

import dayjs from 'dayjs'
import { Optional } from '@/core/types/optional'
import { Entity } from '@/core/entities/entity'

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
    props: Optional<QuestionProps, 'createdAt' | 'slug'>,
    id?: UniqueEntityId,
  ) {
    if (props.content.length > 2400) {
      throw new Error('Invalid conten length')
    }
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createdAt: new Date(),
      },
      id,
    )
    return question
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  get title(): string {
    return this.props.title
  }

  get content(): string {
    return this.props.content
  }

  set title(title: string) {
    this.props.title = title
    this.touch()
  }

  set content(content: string) {
    if (content.length > 2400) {
      throw new Error('Invalid conten length')
    }
    this.props.content = content
    this.touch()
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt, 'days') <= 3
  }

  get authorId(): UniqueEntityId {
    return this.props.authorId
  }
}
