import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CircularProgress, Typography } from '@mui/material'
import TopNavigation from '../components/TopNavigation'
import HomeLayout from '../layouts/Home.layout'
import { getUserOrders, updateUserOrder } from '../redux/order/order.action'
import ReviewModal from '../components/ReviewModal'

function OrdersPage() {
    const orders = useSelector((state) => state.orders.userOrders)
    const allOrders = useSelector((state) => state.orders)
    const [reviewModal, setReviewModal] = useState(false)
    const [activeOrder, setActiveOrder] = useState("")
    let data = ""

    if (orders || orders?.length === 0) {
        data = <p className='text-gray-600 flex items-center justify-center' style={{ height: '50vh' }}>No Orders Found</p>
    }
    const handleReviewModal = (order) => {
        setActiveOrder(order)
        setReviewModal(true)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOrders())
    }, [dispatch])
    if (allOrders.loading) {
        return (
            <div className='w-full flex items-center justify-center' style={{ height: '50vh' }}>
                <CircularProgress />
            </div>
        )
    }
    const breadcrumbs = [
        <Link to='/' underline="hover" key="1" color="inherit" className='hover:underline'>
            Home
        </Link>,
        <Typography key={'2'}>
            Orders
        </Typography>
    ];
    const handleCancel = (order) => {
        dispatch(updateUserOrder({ _id: order._id, status: "Cancelled", user: order.user, provider: order.provider, food: order.food, quantity: order.quantity }))
    }
    return (
        <div className="md:px-8 px-1 py-4">
            <ReviewModal open={reviewModal} setOpen={setReviewModal} order={activeOrder} />
            <TopNavigation breadcrumbs={breadcrumbs} />
            <h1 className="text-3xl font-bold mb-4">My Orders</h1>
            {orders && orders?.length !== 0 ? (
                <div className="grid gap-6">
                    {orders.map((order, idx) => (
                        <div className="grid md:grid-cols-3 gap-6 items-center border rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" key={idx}>
                            <div className="w-32 md:w-full h-62 md:h-auto overflow-hidden rounded-lg mb-4 md:mb-0">
                                <img src={order?.food?.image} alt={order?.food?.name} className="w-72 object-contain m-auto rounded-md h-full" />
                            </div>
                            <div className="md:col-span-2">
                                <div>
                                    <p className="text-lg font-semibold">{order?.food?.name}</p>
                                    <p className="text-gray-600">Quantity: <span className="font-semibold">{order?.quantity}</span></p>
                                    <p className="text-gray-600">Price: <span className="font-semibold">₹{order?.totalAmount}</span></p>
                                    <p className="text-gray-600">Order Status: <span className="font-semibold">{order?.orderStatus}</span></p>
                                    <p className="text-gray-600">Ordered Date: <span className="font-semibold">{order?.date}</span></p>
                                </div>
                                <div className="mt-2">
                                    {order?.orderStatus === "Ordered" && (
                                        <button className=" btn-grad text-white " onClick={() => handleCancel(order)}>Cancel Order</button>
                                    )}
                                    {order?.orderStatus === "Delivered" && (
                                        <button className=" btn-grad text-blue-800 hover:underline" onClick={() => handleReviewModal(order)}>Write a Review</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-600">No orders found.</div>
            )}
        </div>

    )
}

export default HomeLayout(OrdersPage)