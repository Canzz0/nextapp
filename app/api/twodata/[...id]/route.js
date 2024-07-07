import { NextResponse } from 'next/server';
import Posts from '../../../../data2.json'

// export async function GET(req) {
//   const { pathname } = new URL(req.url);
//   console.log(req)
//   const segments = pathname.split('/');
//   const id = segments[segments.length - 1];
//   const post = Posts.posts.find(ps => ps.id === id);

//   if (!post) {
//     return NextResponse.json({ message: "ID Bulunamadı" }, { status: 404 });
//   }

//   return NextResponse.json(post, { status: 200 });
// }


export async function GET(req,{params}){
  const post = Posts.posts.find((c)=>c.id==parseInt(params.id));

  return Response.json(post)
}