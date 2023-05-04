import react, {useEffect, useState} from "react"
import NavigationBar from "../NavigationBar/NavigationBar";

const Cart = () => {

    const [cartList, setCartList] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [customerMobile, setCustomerMobile] = useState('')
    const loadCartItems = () => {
        const cartItems = localStorage.getItem("cart_items")
        const cartArray = JSON.parse(cartItems)
        setCartList(cartArray)
    }

    useEffect(() => {
        loadCartItems()
    }, []);

    const checkOutFormHandler = async (event) => {
        event.preventDefault()
        loadCartItems()
        const cartItems = localStorage.getItem("cart_items")


        const response = await fetch('http://localhost:8080/checkout/add', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                "checkOutDetails": cartItems,
                "customerName": customerName,
                "customerMobile": customerMobile,
            })
        });
        const data = await response.json();
    }

    const customerNameChangeHandler = (event) => {
        setCustomerName(event.target.value)
    }

    const customerMobileChangeHandler = (event) => {
        setCustomerMobile(event.target.value)
    }


    return <>
        <NavigationBar/>

        <div className={`mt-5`}>
            <div className={`row`}>
                <div className={`col-12 m-1 mb-3`}>
                    <h4>Cart</h4>
                </div>
            </div>

            <div className={`row g-3`}>
                {cartList.map((packages, index) => {

                        return <div key={index} className={` col-12 `}>
                            <div className={`card m-1`}>
                                <div className="card-body">
                                    <h5 className="card-title mb-4">{packages.packageName}</h5>
                                    <p>Duration : {packages.duration}</p>

                                    <p>Destination : {packages.destination}</p>

                                    <p>
                                        Package Starting from (per Person) : <strong>Rs.{packages.pricePerPerson}</strong>
                                    </p>

                                    <p>Speciality : {packages.speciality}</p>


                                </div>
                            </div>
                        </div>
                    }
                )}
            </div>


            <div className={`card mt-5 ring m-1 mb-5`}>
                <div className={`card-body`}>
                   <form onSubmit={checkOutFormHandler}>
                       <div className={`row`}>


                           <div className={`col-12 col-lg-6 mb-3`}>
                               <label htmlFor="customer" className="form-label">Customer</label>
                               <input
                                   type="text"
                                   className="form-control"
                                   id="customer"
                                   onChange={customerNameChangeHandler}
                                   required
                               />
                           </div>


                           <div className={`col-12 col-lg-6 mb-3`}>
                               <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                               <input
                                   type="number"
                                   className="form-control"
                                   id="mobile"
                                   onChange={customerMobileChangeHandler}
                                   required
                               />
                           </div>


                           <div className={`col-12 mt-3`}>
                               <div className="d-grid gap-2">
                                   <button type="submit" className="btn btn-dark">Checkout</button>
                               </div>
                           </div>
                       </div>
                   </form>
                </div>
            </div>
        </div>

    </>
}

export default Cart
