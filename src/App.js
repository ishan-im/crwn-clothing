import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

import SignIn from './routes/auth/sign-in';

import Navigation from './routes/navigation/navigation.component';


const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Fragment>
      
    <Routes>
    <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
    </Fragment>
  );
};

export default App;