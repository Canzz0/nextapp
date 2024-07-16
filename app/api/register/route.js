import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
  
export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    //Kullanıcı e-posta sorgulama
   const userExists= await prisma.User.findFirst({
    where: {
      email: email,
    },
   })

    if (userExists) {
      return new Response(
        JSON.stringify({ message: "E-Mail Daha Önce Kullanılmıştır" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    //Şifre hashleme
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.User.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
      },
    });
    return new Response(
      JSON.stringify({
        message: "Kullanıcı başarıyla oluşturuldu",
        user: newUser,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Bir hata oluştu", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
