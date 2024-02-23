import { randomUUID } from 'node:crypto'

export class UniqueEntityId {
  protected value: string
  toString() {
    return this.value
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }
}
