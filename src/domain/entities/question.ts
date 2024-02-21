import { randomUUID } from 'node:crypto'

export class Question {
  private id: string
  private title: string
  private content: string
  constructor(title: string, content: string, id?: string) {
    this.title = title
    this.content = content
    this.id = id ?? randomUUID()
  }

  getTitle(): string {
    return this.title
  }

  getContent(): string {
    return this.content
  }
}
