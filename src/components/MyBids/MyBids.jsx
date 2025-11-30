import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const MyBids = () => {

    const {user} = use(AuthContext);
    const [myBids, setMyBids] = useState([]);

    useEffect(() => {
      if(user.email) {
        fetch(`http://localhost:5000/bids?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${user?.accessToken}`
          }
        })
        .then(res => res.json())
        .then(data => {
            setMyBids(data)
        });
      }
    }, [user?.email, user?.accessToken]);
    return (
       <div className="w-11/12 mx-auto p-4 md:p-6 mb-10">
        <h1 className="text-4xl font-bold">
          Bids For Your Products:{" "}
          <span className="text-color">{myBids.length}</span>
        </h1>

        {myBids.length === 0 ? (
          ""
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>buyer_name</th>
                  <th>buyar_email</th>
                  <th>Bid Price</th>
                  <th>status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myBids.sort((a, b) => b.bid_price - a.bid_price).map((bid, index) => (
                  <tr key={bid?._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={
                                bid?.buyer_image
                              }
                              alt={bid?.buyer_name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{bid?.buyer_name}</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{bid?.buyer_email}</td>
                    <td>$ {bid?.bid_price}</td>
                    <td><span className="badge badge-secondary text-gray-800 py-2">{bid?.status}</span></td>
                    <th>
                      <button className="btn btn-outline text-primary-content btn-xs">Remove Bid</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
};

export default MyBids;