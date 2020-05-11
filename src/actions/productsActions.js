import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS, 
    DOWNLOAD_PRODUCTS_SUCCESS, 
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    DELETED_PRODUCT_SUCCESS,
    DELETED_PRODUCT_ERROR,
    GET_PRODUCT_EDIT,
    START_PRODUCT_EDIT,
    EDITED_PRODUCT_SUCCESS,
    EDITED_PRODUCT_ERROR
} from '../types';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

export function createNewProductAction(product){
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            await axiosClient.post('/products', product);
            dispatch( addProductSuccess(product) );
            Swal.fire(
                'Correct',
                'The product was successfully added',
                'success'
            );
        } catch (error) {
            dispatch( addProductError(true) );

            Swal.fire({
                icon: 'error',
                title: 'There was an error',
                text: 'There was an error, try again'
            });
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT
});

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});




export function getProductsAction(){
    return async (dispatch) => {
        dispatch( downloadProducts() );

        try {
            const response = await axiosClient.get('/products');
            dispatch( downloadProductsSuccess(response.data) );
        } catch (error) {
            dispatch( downloadProductsError() );
        }
    }
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
});

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
});

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
});




export function deleteProductAction(id){
    return async (dispatch) => {
        dispatch( getProductDelete(id) );
        try {
            await axiosClient.delete(`/products/${id}`);
            dispatch( deleteProductSuccess() );
            Swal.fire(
                '¡Removed!',
                'The product was successfully removed',
                'success'
            )
        } catch (error) {
            dispatch( deleteProductError() );
        }
    }
}

const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

const deleteProductSuccess = () => ({
    type: DELETED_PRODUCT_SUCCESS
});

const deleteProductError = () => ({
    type: DELETED_PRODUCT_ERROR,
    payload: true
});



export function getProductEdit(product){
    return (dispatch) => {
        dispatch( getProductEditAction(product) );
    }
}

const getProductEditAction = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
})



export function editProductAction(product){
    return async (dispatch) => {
        dispatch( editProduct() )

        try {
            await axiosClient.put(`/products/${product.id}`, product);
            dispatch( editProductSuccess(product) );
        } catch (error) {
            dispatch( editProductError() );
        }
    }
}

const editProduct = () => ({
    type: START_PRODUCT_EDIT
})

const editProductSuccess = product => ({
    type: EDITED_PRODUCT_SUCCESS,
    payload: product
});

const editProductError = () => ({
    type: EDITED_PRODUCT_ERROR,
    payload: true
});