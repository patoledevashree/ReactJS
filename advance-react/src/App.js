import React from 'react';
import logo from './logo.svg';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import RefsDemo from './components/RefsDemo';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <PostList></PostList> */}
      <PostForm></PostForm>
    </div>
  );
}

export default App;
