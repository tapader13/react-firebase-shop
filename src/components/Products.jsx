import React, { useEffect, useState } from 'react';
import { useFirebase } from '../Firebase';
import ReactPaginate from 'react-paginate';
import style from './product.module.css';
import { useCartUser } from './CartProvider';

function Products() {
  const user = useFirebase();
  const { state, dispatch } = useCartUser();
  //   console.log(userCart);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [pageShow, setPageShow] = useState('01');
  const totalPages = Math.ceil(user.getLength() / limit);
  useEffect(() => {
    const fetchData = async () => {
      const result = await user.getData(page, limit);
      setProducts(result);
    };
    fetchData();
  }, [page]);
  //   console.log(products);
  const handlePage = (data) => {
    setPage(data.selected + 1);
    const res = data.selected + 1;
    if (res < 10) {
      setPageShow(`0${res}`);
    } else {
      setPageShow(res);
    }
  };
  return (
    <>
      <div className={style.container}>
        {products &&
          products.map((prd, i) => {
            {
              return (
                <div className={style.product} key={i}>
                  <div>
                    <img className={style.img} src={prd.img} alt='' />
                  </div>
                  <div className={style.product_content}>
                    <h4>{prd.name.slice(1, 15)}</h4>
                    <h4>{prd.category}</h4>
                    <h4>{prd.price}tk</h4>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        dispatch({ type: 'ADD_TO_CART', id: prd.id, prd });
                      }}
                      className={style.btn}
                    >
                      Add
                    </button>
                  </div>
                  <div className={style.stocke}>
                    <p>Stock: {prd.stock}</p>
                  </div>
                </div>
              );
            }
          })}
      </div>
      <div className={style.paginate}>
        <p style={{ textAlign: 'center' }}>Page_ {pageShow}</p>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePage}
          containerClassName='pagination justify-content-center'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          activeClassName='active'
        />
      </div>
    </>
  );
}

export default Products;
