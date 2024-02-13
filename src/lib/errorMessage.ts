export function errorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message
  } else {
    return "An unknown error occurred, please try again."
  }
}
