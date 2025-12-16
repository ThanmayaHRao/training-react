// import React, { useEffect, useState } from 'react'

// const Effect = () => {
// const[count,setcount] = useState(0)

//     useEffect(()=>{
//         setInterval(()=>{
//             setcount(count+1);
//         },2000)
//     },[])

//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default Effect
// import React, { useEffect, useState } from "react";

// const Effects = () => {
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUser(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div>
//       {user.map((u) => (
//         <p key={u.id}>{u.login}</p>
//       ))}
//     </div>
//   );
// };

// export default Effects;


// import React, { useEffect, useState } from "react";

// const Effects = () => {
// const[detail,setdetail] = useState([])

// useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res=>{res.json()
//           .then((data)=>{
//             setdetail(data)
//             console.log(data)
//           })})
//         .catch(err=>{console.log(err)})
// },[])


//   return (
//         <div style={{ padding: "20px" }}>
//       <table border="1" cellPadding="10" cellSpacing="0" width="100%">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>City</th>
//             <th>Phone</th>
//             <th>Website</th>
//           </tr>
//         </thead>

//         <tbody>
//           {detail && detail.length > 0 && detail.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.address.city}</td>
//               <td>{user.phone}</td>
//               <td>{user.website}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Effects




