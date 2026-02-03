import { useState } from "react";
import EmptyIcon from "@/assets/icons/empty.svg?react";
import FillIcon from "@/assets/icons/fill.svg?react";
import { searchBooks } from "@/api/kakao";

function App() {
    const [result, setResult] = useState<string>("");
    const [loading, setLoading] = useState(false);

    async function handleTestApi() {
        setLoading(true);
        setResult("");
        try {
            const data = await searchBooks({
                query: "미움받을 용기",
                target: "title",
            });
            setResult(JSON.stringify(data, null, 2));
        } catch (err) {
            setResult(err instanceof Error ? err.message : String(err));
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex items-center gap-6">
                <EmptyIcon width={22} height={20} aria-hidden />
                <FillIcon width={24} height={24} aria-hidden />
            </div>
            <div className="flex flex-col gap-2">
                <button
                    type="button"
                    onClick={handleTestApi}
                    disabled={loading}
                    className="w-fit rounded-lg bg-ui-primary px-4 py-2 text-white disabled:opacity-50"
                >
                    {loading ? "요청 중..." : "Kakao 책 검색 API 테스트"}
                </button>
                {result && (
                    <pre className="max-h-80 overflow-auto rounded-lg bg-light-gray p-4 text-primary text-sm">
                        {result}
                    </pre>
                )}
            </div>
        </div>
    );
}

export default App;
