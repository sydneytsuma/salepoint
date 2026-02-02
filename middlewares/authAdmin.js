import { clerkClient } from "@clerk/nextjs/server"


const authAdmin = async (userId) => {
    try {
        if(!userId) return false

        const client = await clerkClient()
        const user = await client.users.getUser(userId)

        
        return console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL, "USER_EMAIL:", user.primaryEmailAddress?.emailAddress || user.emailAddresses?.[0]?.emailAddress) || (process.env.ADMIN_EMAIL || "").split(",").map(e=>e.trim().toLowerCase()).includes(((user.primaryEmailAddress?.emailAddress || user.emailAddresses?.[0]?.emailAddress) || "").toLowerCase());

        //return process.env.ADMIN_EMAIL.split(',').includes(user.emailAddresses[0].emailAddress)
    } catch (error){
        console.error(error)
        return false
    }
}

export default authAdmin 