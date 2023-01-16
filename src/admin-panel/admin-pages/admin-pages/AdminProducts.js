import { useContext, useState } from 'react';
import { ContextData } from '../../../context/Context';
import './AdminProducts.css';
import { AdminProductCards } from '../../../components/Cards/Cards';
import NextPage from '../../../assets/pagination/next-paging.png';
import PrevPage from '../../../assets/pagination/prev-paging.png';
import Next from '../../../assets/pagination/next.png';
import Prev from '../../../assets/pagination/prev.png';
function AdminProducts() {
    const { productlist, allowed, priceAfterDiscount } =
        useContext(ContextData);
    const [value] = useState(1000);
    const [page, setPage] = useState(1);
    const [blank, setBlank] = useState(false);
    const listLenght = productlist.filter((item) =>
        priceAfterDiscount(item.discount, item.originalPrice) < value
            ? item
            : priceAfterDiscount(item.discount, item.originalPrice) < value,
    ).length;
    const lastPage = Math.ceil(listLenght / allowed);
    const pageNumbers = [];
    const [range, setRange] = useState({
        beginnig: 0,
        ending: listLenght > 6 ? 6 : listLenght,
    });
    for (let i = 0; i < lastPage; i++) {
        pageNumbers.push(i + 1);
    }
    function settingPage(item) {
        setTimeout(() => setBlank(false), 100);
        setBlank(true);
        setPage(item);
        if (item >= 4) {
            if (item < lastPage - 2) {
                setRange({ beginnig: item - 1, ending: item + 3 });
                console.log(pageNumbers);
            } else if (item === lastPage - 2) {
                setRange({ beginnig: item - 1, ending: item + 3 });
            } else if (item === lastPage - 1) {
                setRange({ beginnig: item - 2, ending: item + 2 });
            } else if (item === lastPage) {
                setRange({ beginnig: item - 3, ending: item + 1 });
            }
        } else if (item < 4) {
            if (item === 3) {
                setRange({ beginnig: item - 1, ending: item + 3 });
            } else if (item === 2) {
                setRange({ beginnig: item - 1, ending: item + 4 });
            } else {
                setRange({ beginnig: item, ending: item + 5 });
            }
        }
    }
    return (
        <>
         {blank ? (
                <div style={{ height: '100vh' }}></div>
            ) : (
        <div className="AdminProductsPage">
            <div className="AdminProductsSide">
                <div
                    className="AdminProductsList" >
                    {productlist.length !== 0 ? (
                        productlist
                            .slice((page - 1) * allowed, allowed * page)
                            .map((item, index) => (
                                <div key={index} className="AdminProductCard">
                                    <AdminProductCards
                                        product={item}
                                        pic={item.picture[0]}
                                        title={item.title}
                                        originalPrice={item.originalPrice}
                                        discount={item.discount}
                                        currentPrice={priceAfterDiscount(
                                            item.discount,
                                            item.originalPrice,
                                        ).toFixed(2)}
                                    />
                                </div>
                            ))
                    ) : (
                        <div className="ProductsListEmpty">
                            <p>There is no product</p>
                        </div>
                    )}
                </div>
                <div className="pagination-section">
                    {page !== 1 ? (
                        <div onClick={() => settingPage(1)} className="paging">
                            <img src={PrevPage} alt="prev-page" />
                        </div>
                    ) : (
                        <></>
                    )}
                    <div className="pagination">
                        {page !== 1 ? (
                            <div
                                onClick={() => settingPage(page - 1)}
                                className="paging">
                                <img src={Prev} alt="prev" />
                            </div>
                        ) : (
                            <></>
                        )}
                        {range.beginnig >= 3 ? (
                            <>
                                <div
                                    onClick={() => settingPage(1)}
                                    className="paging">
                                    <span className="page-number">{1}</span>
                                </div>
                                <div className="paging">
                                    <p>...</p>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                        {pageNumbers.map((item) =>
                            item > range.beginnig - 2 && item < range.ending ? (
                                <div
                                    onClick={() => settingPage(item)}
                                    className={
                                        item === page
                                            ? 'paging Active'
                                            : 'paging'
                                    }
                                    key={item}>
                                    <span className="page-number">{item}</span>
                                </div>
                            ) : (
                                <></>
                            ),
                        )}
                        {page < lastPage - 2 && lastPage > 5 ? (
                            <>
                                <div className="paging">
                                    <p>...</p>
                                </div>
                                <div
                                    onClick={() => settingPage(lastPage)}
                                    className="paging">
                                    <span className="page-number">
                                        {lastPage}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                        {page !== lastPage ? (
                            <div
                                onClick={() => settingPage(page + 1)}
                                className="paging">
                                <img src={Next} alt="next" />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    {page !== lastPage ? (
                        <div
                            onClick={() => settingPage(lastPage)}
                            className="paging">
                            <img src={NextPage} alt="next-page" />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
)}
        </>
    );
}
export default AdminProducts;
