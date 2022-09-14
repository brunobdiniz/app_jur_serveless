// converting list of notes to string //

import notes from "../notes";

export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify(notes, null, "  "),
  };
}

// needs to be async with AWS Lambda //
