// async function submitNewPost(title, mdText, author) {
//   const res = await fetch("/new", {
//     method: "POST",
//     body: JSON.stringify({
//       title: title,
//       author: author,
//       mdText: mdText,
//     }),
//   });

//   if (!res.error) {
//     return { id: res.data.id, message: res.message };
//   } else {
//     return { error: true };
//   }
// }
