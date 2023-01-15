import axios from "axios";
import { createContext, useReducer } from "react";
import ProductReducer from "../Reducer/ProductReducer";



const productContext = createContext();


export const ProductContextProvider = ({children}) =>{


    const initialState = {
        products: [],
        categories: [],
        loading: true,
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)


    // Get All the Products from the Backend Endpoint
    const getAllProducts = async () =>{
        try{
            const {data} = await axios.get('https://api.manxho.co.in/api/products/');

            dispatch({
                type :'GET_ALL_PRODUCTS',
                payload: data,
            })
        }catch(error){
            
        }
    }



    // Get All The Categories from the backend API
    const getAllCategories = async ()=>{
        const {data} = await axios.get('https://api.manxho.co.in/api/categories/');
        dispatch({
            type:'GET_ALL_GATEGORIES',
            payload:data,
        })
    }



    return <productContext.Provider value={{

        // Global States
        products:state.products, 
        categories:state.categories,


        // Global Functions
        getAllProducts:getAllProducts,
        getAllCategories:getAllCategories,
    }}>
        {children}
    </productContext.Provider>

}

export default productContext;