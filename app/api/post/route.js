import { PrismaClient } from "@prisma/client";


prisma = new PrismaClient();
export async function GET() {
  let res = await prisma.Post.findMany();
  return new Response(JSON.stringify(res));
}


//POST İŞLEMİ
export async function POST(req) {
  try {
    const post = await req.json();
    const newPost = await prisma.Post.create({
      data: {
        name: post.name,
        descrip: post.descrip,
      },
    });
    return new Response(
      JSON.stringify({ message: "Başarı İle Kayıt Edildi",newPost }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 201,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}


//DELETE İŞLEMİ
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const deletepost = await prisma.Post.delete({
      where: { id: id },
    });
    return new Response(JSON.stringify({ message: "Başarı İle Silindi",deletepost }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}


//UPDATE İŞLEMİ
export async function PUT(req) {
  try {
    const post = await req.json();
    const updatedPost = await prisma.post.update({
      where: { id: post.id },
      data: {
        name: post.name,
        descrip: post.descrip,
      },
    });
    return new Response(JSON.stringify({ message: "Başarı İle Güncellendi",updatedPost }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
