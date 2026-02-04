import prisma from "@/lib/prisma";


const authSeller = async (userId) =>{
    try {
        // check if user is a seller 
        const user = await prisma.user.findUnique({
            where: {userId: userId},
            include: {store: true},
        })
        
        if(user.store){
            if(user.store.status === 'approved'){
                return store.id
            }
        } else {
            return false
        }
    } catch (error) {
        console.error(error);
        return false
    }
}

export default authSeller;