export class Slug {
  private value: string
  constructor(value: string) {
    this.value = value
  }

  getValue(): string {
    return this.value
  }

  /**
   * Receives a string and normalize it as a slug
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')
    return new Slug(slugText)
  }
}
