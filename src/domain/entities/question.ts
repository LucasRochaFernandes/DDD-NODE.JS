import { randomUUID } from 'node:crypto'

interface QuestionProps {
  title: string
  content: string
  authorId: string
}

export class Question {
  private id: string
  private title: string
  private content: string
  private authorId: string

  constructor({ title, content, authorId }: QuestionProps, id?: string) {
    this.title = title
    this.content = content
    this.id = id ?? randomUUID()
    this.authorId = authorId
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
