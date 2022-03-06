import 'bootstrap/dist/css/bootstrap.min.css';
import Homapage from "./components/HomePage"
import CategoriesProductPage from "./components/danhMucSanPham/CategoriesProductPage"
import DetailProductPage from "./components/detailproduct/DetailProductPage"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from "./components/LoginPage"
import { useEffect, useState } from 'react';
import { auth, googleProvider } from './firebase';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((result) => { // khi refesh kiểm tra xem đã đăng nhập hay chưa, nếu rồi thì trả kết quả trước đó
    setUser(result); // set lại giống giá trị khi vừa đăng nhập
    console.log(result)
    })
}, [])
  return (
    <>

      <Routes>
        <Route exact path="/categoriesproductpage" element={<CategoriesProductPage user={user}/>}></Route>
        <Route exact path="/login" element={<LoginPage user={user} setUser={setUser}/>}></Route>
        <Route exact path="/detail-product/:id/:name" element={<DetailProductPage user={user}/>}></Route>
        <Route exact path="/" element={<Homapage user={user}/>}></Route>
        <Route exact path="*" element={<Homapage user={user}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
