const { prisma } = require("@/db")

exports.getProducts = async()=>{
    const products = await prisma.products.findMany()  
    return products
}

exports.getProductById = async(id)=>{
    const product = await prisma.products.findUnique({where:{id:id}})
    return product
}