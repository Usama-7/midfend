import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Notes = () => {
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  // Getting Notes from Server Side
  const getUserData = async () => {
    let result = await fetch("http://localhost:5000/notes");
    result = await result.json();
    setUserData(result);
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Deleting Note on the bases of id

  const deleteUser = async (id) => {
    let res = await fetch(`http://localhost:5000/notes/${id}`, {
      method: "delete",
    });
    res = await res.json();
    console.log(res);
    if (res) {
      getUserData();
    }
  };

  return (
    <>
  

      <div className="py-5" style={{ backgroundColor: "#e9e4db" }}>
        <div className="container bootstrap snippets bootdeys " style={{ backgroundColor: '#eee'}}>
          <h2 style={{color:"#554c86"}} className="pt-3"><span style={{borderBottom:"5px solid #554c86"}}>Your Notes</span></h2>
          <div className="row">
            {userData.length ?
              userData.map((x) => {
                return (
                  <>
                    <div className="col-md-3 col-sm-6 content-card">
                      <div className="card-big-shadow">
                        <div
                          className="card card-just-text rounded"
                          data-background="color"
                          data-color={x.color}
                          data-radius="none"
                        >
                          <div className="content">
                            <h4 className="title">{x.title}</h4>
                            <p className="description">{x.note}</p>

                            <div
                              style={{
                                position: "absolute",
                                top: "7px",
                                right: "10px",
                              }}
                            >
                              <a
                                className="me-3"
                                onClick={() => navigate(`/notes/${x._id}`)}
                              >
                                <img
                                  src="./images/eedit.png"
                                  width={20}
                                  height={20}
                                />
                              </a>
                              <a onClick={() => deleteUser(x._id)}>
                                <img
                                  src="./images/delete.png"
                                  width={20}
                                  height={20}
                                />
                              </a>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end card */}
                      </div>
                    </div>
                  </>
                );
              })
              : <Link to="/addnotes" className="btn  mt-4" style={{backgroundColor:"#554c86",color:"white"}} type="submit">Add Your First Note</Link>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
