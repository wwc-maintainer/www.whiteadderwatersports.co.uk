export function checkHttpUrl(candidate: string): boolean {
  try {
    const candidateUrl = new URL(candidate);

    return (
      candidateUrl.protocol === "http:" || candidateUrl.protocol === "https:"
    );
  } catch (error) {
    console.debug(`Invalid URL format: ${candidate}`, error);
    return false;
  }
}
