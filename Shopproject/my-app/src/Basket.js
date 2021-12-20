import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
const Basket = ({ carto, setCarto, kayit, setkayit }) => {
  const removeFromCart = (productToRemove) => {
    setCarto(carto.filter((product) => product !== productToRemove));
  };
  const getTotalSum = () => {
    return carto.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  return (
    <div>
      <div class="basketholder">
        <div class="basketholdone">
          <p class="sepettxt">Sepetim ({carto.length} Ürün)</p>
          {kayit.username === "" || kayit.password === "" ? (
            <div class="shouldlogin">
              <p>
                Alışverişini daha hızlı tamamlamak için{" "}
                <Link to="/login">Giriş Yap</Link>
              </p>
            </div>
          ) : null}
          {carto.map((item) => {
            return (
              <div class="basketholdonedon">
                <table>
                  <tr>
                    <td>
                      <img
                        src={`../uploads/${item.photoname}`}
                        width="50px"
                        height="50px"
                      />
                    
                    </td>
                    <td>
                      {" "}
                      <p>{item.title}</p>
                      <p>{item.text}</p>
                    </td>
                    <td>
                      <p>{item.price} TL</p>
                    </td>
                    <td>
                      <button onClick={() => removeFromCart(item)}>
                        delete
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}
        </div>
        <div class="basketholdto">
          <table>
            <tr>
              <td colSpan="2">
                <h3>Seçilen Ürünler</h3>
              </td>
            </tr>
            <tr>
              <td>Total Price : </td>
              <td>{getTotalSum()} TL</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button >Buy</button>{" "}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Basket;
