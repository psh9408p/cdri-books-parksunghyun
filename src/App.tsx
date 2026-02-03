import EmptyIcon from "@/assets/icons/empty.svg?react";
import FillIcon from "@/assets/icons/fill.svg?react";

function App() {
    return (
        <div className="flex items-center gap-6 p-6">
            <EmptyIcon width={22} height={20} aria-hidden />
            <FillIcon width={24} height={24} aria-hidden />
        </div>
    );
}

export default App;
