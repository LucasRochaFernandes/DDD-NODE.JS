import { randomUUID } from 'node:crypto'
interface AnswerProps {
  content: string
  authorId: string
  questionId: string
}

export class Answer {
  private id: string
  private content: string
  private authorId: string
  private questionId: string

  constructor({ authorId, content, questionId }: AnswerProps, id?: string) {
    this.content = content
    this.id = id ?? randomUUID()
    this.authorId = authorId
    this.questionId = questionId
  }

  getContent(): string {
    return this.content
  }
}
