import { readFile } from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'Nuno-Tamada-CV.pdf');
  const buffer = await readFile(filePath);

  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Nuno-Tamada-CV.pdf"',
      'Content-Length': buffer.byteLength.toString(),
    },
  });
}
