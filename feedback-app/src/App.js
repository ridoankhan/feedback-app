function App() {
  const title = 'Blog post';
  const body = 'This is the paragraph of the above title';

  const comments = [
    { id: 1, text: 'comment 1' },
    { id: 2, text: 'comment 2' },
    { id: 3, text: 'comment 3' },
  ];

  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{body}</p>

      <div className='conmmets'>
        <h3>Comments ({comments.length})</h3>

        <ul>
          {comments.map((comment, index) => (
            <li>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
