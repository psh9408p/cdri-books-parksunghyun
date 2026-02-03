import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import SearchPage from "@/pages/SearchPage";
import FavoritesPage from "@/pages/FavoritesPage";

function App() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </div>
    );
}

export default App;
