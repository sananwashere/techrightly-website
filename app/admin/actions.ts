'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';

const DRAFTS_DIR = path.join(process.cwd(), 'content', 'drafts');
const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export async function approveDraft(filename: string) {
  // Strip the leading date prefix (YYYY-MM-DD-) from the filename for cleaner post URLs
  const postFilename = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  await fs.mkdir(POSTS_DIR, { recursive: true });
  await fs.rename(
    path.join(DRAFTS_DIR, filename),
    path.join(POSTS_DIR, postFilename)
  );
  revalidatePath('/blog');
  revalidatePath('/admin');
}

export async function rejectDraft(filename: string) {
  await fs.unlink(path.join(DRAFTS_DIR, filename));
  revalidatePath('/admin');
}
