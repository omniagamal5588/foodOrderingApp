import { RootState } from "@/redux/store";
import { Extra, Size } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export type cartItem={
    name:string,
    id:string,
    image:string,
    basePrice:number,
    quantity?:number,
    size?:Size,
    extras?:Extra[]
}

type CartState={
    items:cartItem[]
}
const initialCartItem = localStorage.getItem("cartItems")
const initialState:CartState ={
    items: initialCartItem ?JSON.parse(initialCartItem): [] 
}


export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCartItem:(state,action:PayloadAction<cartItem>)=>{
            const existingItem = state.items.find(
                (item)=> item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity = (existingItem.quantity  || 0) +1;
                existingItem.size=action.payload.size;
                existingItem.extras=action.payload.extras
            }else{
                state.items.push({...action.payload,quantity:1})
            }
         },
        lessQuanOfItem:(state,action:PayloadAction<{id:string}>)=>{
            const item = state.items.find((item)=> item.id === action.payload.id)
            if(item){
                if(item.quantity === 1){
                    state.items.filter((item)=> item.id !== action.payload.id)
                }else{
                    item.quantity! -=1 
                }
            }
            },
        removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
            state.items = state.items = state.items.filter(
              (item) => item.id !== action.payload.id
            );
          },
        clearCart: (state) => {
            state.items = [];
          },
    }
})

export const {addToCartItem, lessQuanOfItem,removeItemFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
export const selectCartItems = (state:RootState)=> state.cart.items 