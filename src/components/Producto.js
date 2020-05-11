import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEdit } from '../actions/productosActions';

const Product = ({product}) => {
    const { name, price, id } = product;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDeleteProduct = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "A product that is removed cannot be recovered",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove!',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.value) {
                dispatch( deleteProductAction(id) )
            }
          })

    }

    const redirectEdition = product => {
        dispatch( getProductEdit(product) );
        history.push(`/products/edit/${product.id}`);
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={ () => redirectEdition(product) }
                    to={`/products/edit/${id}`} 
                    className="btn btn-primary mr-2">
                    Edit
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteProduct(id)}
                >Remove</button>
            </td>
        </tr>
    );
}

export default Product;