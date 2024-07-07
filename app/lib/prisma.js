import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'development') {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
} else {
  prisma = new PrismaClient();
}

export default prisma;

export async function POST(req) {
  try {
      const post = await req.json();
      const newPost = await prisma.Post.create({
          data: {
              name: post.name
          }
      });
      return new Response(JSON.stringify({ message: "Başarı ile kayıt edildi", post: newPost }), {
          headers: {
              "Content-Type": "application/json"
          },
          status: 201
      });
  } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to create post' }), {
          headers: {
              "Content-Type": "application/json"
          },
          status: 500
      });
  } finally {
      await prisma.$disconnect();
  }
}