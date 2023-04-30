import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BooksProvider } from "./BookContext/BookContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import BookList from "./pages/Booklist";

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <BooksProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:id" element={<Details />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BooksProvider>
      </Router>
    </div>
  );
}

export default App;
