export class ConnpassApiError extends Error {
  constructor(message: string, public status: number, public body?: string) {
    super(message);
    this.name = "ConnpassApiError";
  }
}
export class ConnpassTimeoutError extends Error {
  constructor(message = "Upstream timeout") {
    super(message);
    this.name = "ConnpassTimeoutError";
  }
}
