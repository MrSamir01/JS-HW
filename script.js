//Задача-1 & Задача-2

// const posts = {
//   name: "posts",
//   isLoading: true,

//   byId: {
//     post1: {
//       id: "post1",
//       author: "user1",
//       body: "......",
//       comments: ["comment1", "comment2"],
//     },
//     post2: {
//       id: "post2",
//       author: "user2",
//       body: "......",
//       comments: ["comment3", "comment4", "comment5"],
//     },
//   },
//   allIds: ["post1", "post2"],
// };

//Поверхности:
// const copyOfPosts = { ...posts };
// console.log(copyOfPosts);

//Глубокий:
// const deep = JSON.parse(JSON.stringify(posts));
// console.log(deep);

//Задача-3

// const post = {
//   name: "posts",
//   isLoading: true,
//   id: "post1",
//   author: "user1",
//   body: "......",
//   comments: ["comment1", "comment2"],
// };
// const { comments: color, hello, ...rest } = post;
// console.log(post);

// color = "commment1", "comment2"; (comments переименуют в color)
// hello = undefined
// rest = post (без comments, потому что над coments поработали)

//Задача-4

// const comments = ["comment3", "comment4", "comment5", "comment1"];

// const [undefined, comment1, ...rest] = comments;

//undifined = "comment3"
//comment1 = "comment4"
//rest = comments (но без comment3 и comment4, так как над ними поработали)
