const CRUDOptions = () => {
  return <div>CRUDOptions</div>;
};

export default CRUDOptions;

/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";

// interface Item {
//   id: number | string;
//   name: string;
//   age: number | string;
// }

// const App = () => {
//   const tableHeadStyles = `border-r-amber-500 border-r`;
//   const [items, setItems] = useState<Item[]>([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState<Item>({
//     id: "",
//     name: "",
//     age: "",
//   });

//   const [itemToEdit, setItemToEdit] = useState<Item | null>(null);

//   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const { name, value } = e.currentTarget;
//     setUser({ ...user, [name]: value } as Item);
//   };

//   const handleAddEdit = () => {
//     if (isEditing) {
//       const updateItems = items.map((item) =>
//         item?.id == itemToEdit?.id
//           ? {
//               ...item,
//               name: user?.name,
//               age: user?.age,
//             }
//           : item
//       );
//       setItems(updateItems);
//       setIsEditing(false);
//       setUser({
//         id: "",
//         name: "",
//         age: "",
//       });
//       setItemToEdit(null);
//     } else {
//       setItems([
//         ...items,
//         {
//           id: crypto.randomUUID() as any,
//           name: user.name,
//           age: user.age,
//         },
//       ]);
//       setUser({
//         id: "",
//         name: "",
//         age: "",
//       });
//     }
//   };

//   const handleDelete = (id: number | string) => {
//     const updatedItems = items.filter((item) => item?.id != id);
//     setItems(updatedItems);
//   };

//   const handleEdit = (id: number | string) => {
//     setIsEditing(true);
//     const foundItem = items.find((item) => item?.id == id);

//     if (foundItem) {
//       setItemToEdit(foundItem);
//       setUser({
//         id: foundItem?.id,
//         name: foundItem?.name,
//         age: foundItem?.age,
//       });
//     }
//   };

//   // console.log(user);

//   return (
//     <div className="bg-red-50 w-full h-screen">
//       <h1 className="text-3xl font-bold text-center">PODS</h1>
//       <input
//         type="text"
//         placeholder="Enter Name"
//         name="name"
//         value={user.name}
//         onChange={handleOnChange}
//       />
//       <input
//         type="number"
//         placeholder="Enter Age"
//         name="age"
//         value={user.age}
//         onChange={handleOnChange}
//       />
//       <button onClick={handleAddEdit}>{isEditing ? "Edit" : "Add"}</button>
//       <table className="w-full bg-blue-50">
//         <thead>
//           <tr className="bg-gray-300">
//             {/* <th className={tableHeadStyles}>ID</th> */}
//             <th className={tableHeadStyles}>Tri</th>
//             <th className={tableHeadStyles}>POD</th>
//             <th className={tableHeadStyles}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items?.length > 0 ? (
//             items?.map((item: Item) => (
//               <tr key={item.id}>
//                 {/* <td >{item.id}</td> */}
//                 <td className="text-center">{item.name}</td>
//                 <td className="text-center">{item.age}</td>
//                 <td className="text-center">
//                   <div className="gap-2">
//                     <button
//                       className="bg-green-300 px-2 py-2 rounded"
//                       onClick={() => handleEdit(item?.id)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="bg-red-300 px-2 py-2 rounded"
//                       onClick={() => handleDelete(item.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={4} className="text-center py-6">
//                 No Items
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;
