export { auth as middleware } from "auth"

// import { auth } from "@/auth"

// // Or like this if you need to do something here.
// export default auth(async (req) => {
//   console.log(111, req.auth) //  { session: { user: { ... } } }
// })

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
