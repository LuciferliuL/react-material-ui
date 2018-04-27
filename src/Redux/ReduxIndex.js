import {createStore, combineReducers} from 'redux';

const ADD_TO_CART= 'ADD_TO_CART';
//初始化一个state
const initialState = {
    cart: [
        {
            product: '700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}
/**
 * 创建Reducer 作为容器
 * @param {传入的状态} state 
 * @param {描述状态发生了什么改变} action 
 * 返回一个新的state，不会改变原来的state
 */
const ProductsReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_TO_CART: {
            return {
                cart: action.payload
            }
        }
        default: 
        return state;
    }
};
const cartReducer = (state=initialState,action)=>{
    switch (action.type){
        case ADD_TO_CART: {
            return {
                cart: [...state.cart, action.payload]
            }
        }
        default: 
        return state;
    }
}
//定义的action
function addToCart(product, quantity, unitCost){
    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

/**
 * 创建一个Reduces来包含所有的分支Reducer
 */
const AllReduces = {
    Products : ProductsReducer,
    cart: cartReducer 
}
//融合所有Reducer函数
const rootReducer = combineReducers(AllReduces)
//把所有的Reducer组合在一个人store里面
let store = createStore(rootReducer);

let unsubscribe =store.subscribe(()=>console.log(store.getState()))

console.log('initial state:', store.getState())

//dispatch()调用action来改变state
store.dispatch(addToCart('Coffee 500gm',1,250))
unsubscribe()