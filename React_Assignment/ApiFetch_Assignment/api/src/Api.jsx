
import React, { useState, useEffect } from "react";
import axios from "axios";

function API() {
  const [fetchData, setFetchData] = useState([]);
  const [addData, setAddData] = useState({ pName: "", pPrice: "", pDesc: "" });
  const [editData, setEditData] = useState({
    _id: "",
    pName: "",
    pPrice: "",
    pDesc: "",
  });

  useEffect(() => {
    apiFetch();
  }, []);

  const apiFetch = async () => {
    try {
      const res = await axios.get(
        "https://p-9x7e.onrender.com/products/products"
      );
      setFetchData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteApi = async (deleteId) => {
    try {
      const res = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${deleteId}`
      );
      apiFetch();
      alert(res.data.message);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const addApi = async () => {
    try {
      const res = await axios.post(
        "https://p-9x7e.onrender.com/products/add-product",
        addData
      );
      alert(res.data.message);
      apiFetch();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const editApi = async (editId) => {
    try {
      const res = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${editId}`,
        editData
      );
      alert(res.data.message);
      apiFetch();
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const takeAddButtonRequest = (event) => {
    const { name, value } = event.target;
    setAddData({ ...addData, [name]: value });
  };

  const takeEditDataAndUpdate = (event) => {
    const { name, value } = event.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (

          <>
   
          <div>
            <h1 >
              API OPERATIONS
            </h1>
            <div >
              <h3 >
                ADD
              </h3 >
              <div>
            <input
              type="text"
             placeholder="Product Name"
              name="pName"
              value={addData.pName}
              onChange={takeAddButtonRequest}
            />
            <input
              type="text"
              placeholder="Product Price"
              name="pPrice"
              value={addData.pPrice}
              onChange={takeAddButtonRequest}
            />
            <input
              type="text"
              placeholder="Product Description"
              name="pDesc"
              value={addData.pDesc}
              onChange={takeAddButtonRequest}
            />
            <br></br>
            <button onClick={addApi}>
              Add Product
            </button>
          </div>
        </div>

        <div>
          <br></br>
          <h2>EDIT</h2>
          <div>
            <input
              type="text"
              placeholder="Product ID to Edit"
              name="_id"
              value={editData._id}
              onChange={takeEditDataAndUpdate}
            />
            <input
              type="text"
              placeholder="New Product Name"
              name="pName"
              value={editData.pName}
              onChange={takeEditDataAndUpdate}
            />
            <input
              type="text"
              placeholder="New Product Price"
              name="pPrice"
              value={editData.pPrice}
              onChange={takeEditDataAndUpdate}
            />
            <input
              type="text"
              placeholder="New Product Description"
              name="pDesc"
              value={editData.pDesc}
              onChange={takeEditDataAndUpdate}
            />
            <br></br>
            <button
              onClick={() => editApi(editData._id)}
            >
              Update
            </button>
          </div>
        </div>

        <br></br>

        <div >
          <h2>Products</h2>
          <table>
            <thead>
              <tr>
                <th >Product ID</th>
                <th >
                  Product Name
                </th>
                <th >Price</th>
               
                <th >Actions</th>
              </tr>
            </thead>
            <tbody>
              {fetchData.map((product) => (
                <tr
                  key={product._id}
                 
                >
                  <td >{product._id}</td>
                  <td >{product.pName}</td>
                  <td >${product.pPrice}</td>
              
                  <td >
                    <button
                     
                      onClick={() => deleteApi(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>



          </>
  );
}

export default API
;
