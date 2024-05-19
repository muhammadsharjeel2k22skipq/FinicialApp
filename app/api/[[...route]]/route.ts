import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';

export const runtime = 'edge';

const app = new Hono().basePath('/api');
app.use('*', clerkMiddleware());

app
    .get('/hello', (c) => {
        const auth = getAuth(c);
        if(!auth?.userId) return c.json({
            error: 'Unauthorized',
        })
        return c.json({
            message: 'Hello nextjs!',
            userId: auth?.userId,
        });
    })


export const GET = handle(app);
export const POST = handle(app);
