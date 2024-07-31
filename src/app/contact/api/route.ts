import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import path from "path";

export interface IContact {
    id:number,
    name:string,
    email:string,
    message:string
}
interface Database {
  contacts: IContact[];
}
const defaultData = { contacts: [] }
const dbPath = path.join(process.cwd(), 'server', 'db.json');
console.log(dbPath);
const adapter = new JSONFile<Database>(dbPath);
const db = new Low<Database>(adapter,defaultData);

const initDb = async () => {
  await db.read();
  db.data = db.data || { contacts: [] };
  await db.write();
};

export async function POST(request:Request){
    try{
        await initDb();
        const formData = await request.json();
        const newEnquiry = {
            id:db.data.contacts.length + 1,
            name:formData.name,
            email:formData.email,
            message:formData.message
        }
        db.data!.contacts.push(newEnquiry);
    await db.write(); 
        return new Response("Comment Sent");
    }catch(err){
        return new Response("Error Occured");
    }
}