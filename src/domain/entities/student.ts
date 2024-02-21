import { randomUUID } from 'node:crypto'

export class Student {
  private name: string
  private ra: string
  private cpf: string
  private id: string
  constructor(name: string, ra: string, cpf: string, id?: string) {
    this.name = name
    this.ra = ra
    this.cpf = cpf
    this.id = id ?? randomUUID()
  }

  getName(): string {
    return this.name
  }
}
