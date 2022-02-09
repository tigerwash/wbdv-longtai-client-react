import CourseManger from "./components/course-manager";
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <CourseManger/>
          </div>
      </BrowserRouter>

  );
}

export default App;
