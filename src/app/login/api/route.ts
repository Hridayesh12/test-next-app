import { cookies } from "next/headers";

export async function POST(request:Request){
    try{
        console.log(request);
        const userData = await request.json();
        cookies().set('userData',JSON.stringify(userData));
        return new Response("Login Successful");
    }catch(err){
        return new Response("Error Occured");
    }
}