// // import React, { useEffect, useState } from "react";
// // import Sidepanel from "./Sidepanel";
// // import { Link,useLocation } from "react-router-dom";

// // function Chat_admin() {

// //     const [view,setView] = useState([])
// //     const [message,setMessage] = useState('')
// //     const location = useLocation()


// //     const clicking_sent = () => {
// //         let data = {
// //             message: message,
// //             messagedby: 1
// //         }
// //         fetch('http://localhost:5000/main/chatsent',{
// //             method: 'post',
// //             headers: {
// //                 Accept: 'application/json',
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(data)

// //         }).then((res) => res.json()).then((result) => {
// //             console.log('inserted')
// //         })
// //     }


// //     useEffect(() => {
// //         fetch('http://localhost:5000/main/viewcompanies').then((res) => res.json()).then((result) => {
// //             // console.log(result)
// //             setView(result)
// //         })
// //     },[])
// //     return(
// //     <>
// //     <Sidepanel/>
// //     <div className="position_admin">
// //         <h1>Chat with companies</h1>
// //         <div className="d-flex">
// //             <div className="Display_company">
// //                 <table>
// //                     <tr>
// //                         <th className="m-3">Select company to Chat</th>
// //                     </tr>

// //                 <div className="m-5">
// //                     {view.map((item,index) => {
// //                         return(
// //                            <tr className="tr2 active">
// //                             <Link to={'/chating'} state={{id1:item._id}}><th className="trr">{item.companyname}</th></Link>
// //                             </tr>
// //                         )
// //                     })}
    
// //                     </div>
                    
// //                 </table>
// //             </div>
            

// //                         <div className="chat_area ms-5">
// //                             <h1 className='heading'>Select a Company to chat!</h1>
// //                         </div>

                    

// //         </div>
        

// //     </div>
// //     </>
// //     )
// // }

// // export default Chat_admin

// import React, { useEffect, useState } from "react";
// import Sidepanel from "./Sidepanel";
// import { Link } from "react-router-dom";
// import imgurl from "./imgurl";

// function Chat_admin() {
//   const [view, setView] = useState([]);
//   const [selectedCompanyId, setSelectedCompanyId] = useState(null); // Store selected company ID
//   const [message, setMessage] = useState('');

//   // Fetch companies
//   useEffect(() => {
//     fetch('http://localhost:5000/main/viewcompanies')
//       .then((res) => res.json())
//       .then((result) => {
//         setView(result);
//         console.log(result)
//       });
//   }, []);

//   // Handle company row click
//   const handleCompanyClick = (companyId) => {
//     setSelectedCompanyId(companyId);
//   };

//   return (
//     <>
//       <Sidepanel />
//       <div className="position_admin">
//         <h1>Chat with companies</h1>
//         <div className="d-flex">
//           <div className="Display_company">
//             <table>
//               <thead>
//                 <tr>
//                 <input type="text" className="form-control input_form" placeholder="Search or start a new chat"></input>
//                 </tr>
//               </thead>
//               <tbody>
//                 <div className="m-5">
//                   {view.map((item) => {
//                     // Determine if the current item is the selected company
//                     const isActive = item._id === selectedCompanyId;
//                     return (
//                       <tr
//                         key={item._id}
//                         className={isActive ? 'tr2 active1' : 'tr2'}
//                         onClick={() => handleCompanyClick(item._id)} // Set selected company ID on click
//                       >
//                         <Link to={'/chating'} state={{ id1: item.companyid._id }}>
//                           <li className={isActive ? 'trr active1' : 'trr'}><img src={imgurl+item.companyid.file} className="img_size"></img>
//                             {item.companyid.companyname}
//                           </li>
//                         </Link>
//                       </tr>
//                     );
//                   })}
//                 </div>
//               </tbody>
//             </table>
//           </div>

//           <div className="chat_area ms-5">
//             <h1 className="heading">Select a Company to chat!</h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Chat_admin;
