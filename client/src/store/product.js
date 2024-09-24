import { create } from "zustand";

const useProductStore = create((sett) => ({
    products: [],
    setProducts: (products) => sett({products}),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false, message:"pelase fill all fields.."}
        }
        const res = await fetch('/api/products',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        sett((prod) => ({products: [...prod.products, data.data]})) //data getting from backend so data.data
        return {success:true, message:"New Product Added..!"}
    },
}));
export default useProductStore;
