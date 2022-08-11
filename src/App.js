import PostsList from "./features/posts/postsList";
import AddPostForm from "./features/AddPostForm";
function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
