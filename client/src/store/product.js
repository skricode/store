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
    fetchProducts: async () => {
        const res = await fetch('/api/products');
        const data = await res.json();
        sett({ products: data.data});
    },
    deleteProduct: async (prod_id) => {
        const res = await fetch(`/api/products/${prod_id}`,{
            method:'DELETE',
        });
        const data = await res.json();
        if(!data.success) return {success: false, message: data.message};

       // update ui immidittely without refresh page
        sett(state => ({products: state.products.filter(product => product._id !== prod_id)}));
        return { success:true, message: data.message};
    },
    updateProduct: async (pid, updatedProduct) => {
        const res = await fetch(`/api/products/${pid}`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        });
        const data = await res.json();
        if(!data.success) return { success: false, message: data.message};
        sett(state => ({
            products: state.products.map(product => product._id === pid ? data.data: product),
        }));
        return {success:true, message:data.message};
    },
}));
export default useProductStore;
