import { db } from "@/lib/prisma"
import {cache} from '@/lib/cache'

// export const getProductsByCategory = cache(
//   () => {
//     const products = db.category.findMany({
//       include: {
//         products: {
//           include: {
//             sizes: true,
//             extras: true,
//           },
//         },
//       },
//     });
//     return products;
//   },
//   ["products-by-category"],
//   { revalidate: 3600 }
// );
export const getProductsByCategory =cache(()=>{
  const products= db.category.findMany({
    include:{
      products:{
        include:{
          sizes:true,
          extras:true
        },
      },
    },
  });
  return products;
},["products-by-category"], { revalidate: 3600 })
export const getProductData = cache(()=>{
    const products =  db.product.findMany({
      where:{
        orders:{
          some:{}
        },
      },
      orderBy:{
        orders:{
          _count:'desc',
        },
      },
       include: {
         sizes: true,
         extras:true
       }
     }) 
     return products
     
},
["best-sellers"],
{revalidate:3600})