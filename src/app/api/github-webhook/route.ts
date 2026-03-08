import { getPayload } from 'payload';
import configPromise from '@payload-config';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const payload = await getPayload({ config: configPromise });
  const rawBody = await req.text();
  const signature = req.headers.get('x-hub-signature-256');

  // 1. Verify the signature from Github
  const hmac = crypto.createHmac('sha256', process.env.GITHUB_WEBHOOK_SECRET!);;
  const digest = 'sha256=' + hmac.update(rawBody).digest('hex');

  if (signature !== digest) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // 2. Update or Insert

  const body = JSON.parse(rawBody);

  const { repository } = body;

  if (repository) {

    const existingProject = await payload.find({
      collection: 'projects',
      where: {
        githubId: {
          equals: repository.id
        }
      }
    });

    const projectData = {
      title: repository.name,
      slug: repository.name.toLowerCase().replace(/ /g, '-'),
      githubId: repository.id,
      description: repository.description,
      repositoryUrl: repository.html_url,
      stargazers: repository.stargazers_count,
      lastUpdated: new Date().toISOString(),
    }

    if (existingProject.docs.length > 0) {
      await payload.update({
        collection: 'projects',
        id: existingProject.docs[0].id,
        data: projectData,
      })
    } else {
      await payload.create({
        collection: 'projects',
        data: projectData,
      })
    }

  }

  return NextResponse.json({ received: true }, { status: 200 });

}