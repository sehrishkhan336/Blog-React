// import React from 'react';
// import Blog from './pages/blog'; 

// const Router = () => {
//   return (
//     <div>
//       <Blog />
//     </div>
//   );
// };

// export default Router;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/blog'; 

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;