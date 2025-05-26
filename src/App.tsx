import { BrowserRouter } from 'react-router-dom';

import Sidebar from '@/components/Sidebar';

import FrontendRoutes from '@/components/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <div className='md:min-h-screen bg-gray-50 flex flex-col md:flex-row'>
        <Sidebar />
        <main className='flex-1 overflow-auto'>
          <FrontendRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
