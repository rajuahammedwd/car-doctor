import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const ManageOrder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);
  const uri = `http://localhost:5000/order?email=${user?.email}`;
  useEffect(() => {
    // fetch(uri)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setOrders(data);
    //   });
    axios.get(uri,{withCredentials:true})
    .then(res=>{
      setOrders(res.data)
    })
  }, []);

  const handleDelete= id =>{
    console.log(id)
    const proceed = confirm("Are You Sure ?")
    if(proceed){
      fetch(`http://localhost:5000/order/${id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
          alert("Your Order Delete successfully")
          const remain = orders.filter(order => order._id !== id)
        setOrders(remain);
        }
      })
    }
  }

  return (
    <div>
      <div></div>
      <div className="overflow-x-auto">
        <table className="table max-w-7xl mx-auto my-10">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 4 */}
            {orders?.map((order) => (
              <tr key={order._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        {order?.img && (
                          <img
                            src={order?.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.name}</div>
                      <div className="text-sm opacity-50">Order Details</div>
                    </div>
                  </div>
                </td>
                <td>{order?.email}</td>
                <td>$ {order?.price}</td>
                <td>{order?.date}</td>
                <th>
                  <button onClick={()=>handleDelete(order._id)} className="btn btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
