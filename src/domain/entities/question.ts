import { randomUUID } from 'node:crypto'
import { Slug } from './value-objects/slug'

interface QuestionProps {
  title: string
  content: string
  authorId: string
  slug: Slug
}

export class Question {
  private slug: Slug
  private id: string
  private title: string
  private content: string
  private authorId: string

  constructor({ title, content, slug, authorId }: QuestionProps, id?: string) {
    this.title = title
    this.content = content
    this.id = id ?? randomUUID()
    this.authorId = authorId
    this.slug = slug
  }

  getTitle(): string {
    return this.title
  }

  getContent(): string {
    return this.content
  }

  getAuthorId(): string {
    return this.authorId
  }
}
