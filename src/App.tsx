import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'antd/dist/antd.css';
import 'antd/dist/reset.css'
import './index.css';
import TaskManager from './components/Engida.Tasks.Manager';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;