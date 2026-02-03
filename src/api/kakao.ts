const KAKAO_BASE = "https://dapi.kakao.com/v3/search/book";

function getApiKey(): string {
    const key = import.meta.env.VITE_KAKAO_REST_API_KEY;
    if (!key) {
        throw new Error("apikey 에러");
    }
    return key;
}

export type KakaoBookSearchParams = {
    /** 검색 질의어 (필수) */
    query: string;
    /** 결과 정렬: accuracy(정확도순) | latest(발간일순), 기본 accuracy */
    sort?: "accuracy" | "latest";
    /** 결과 페이지 번호, 1~50, 기본 1 */
    page?: number;
    /** 한 페이지 문서 수, 1~50, 기본 10 */
    size?: number;
    /** 검색 필드: title | isbn | publisher | person */
    target?: "title" | "isbn" | "publisher" | "person";
};

export async function searchBooks(params: KakaoBookSearchParams) {
    const { query, sort = "accuracy", page, size, target } = params;
    const url = new URL(KAKAO_BASE);
    url.searchParams.set("query", query);
    url.searchParams.set("sort", sort);
    if (page != null) url.searchParams.set("page", String(page));
    if (size != null) url.searchParams.set("size", String(size));
    if (target != null) url.searchParams.set("target", target);

    const res = await fetch(url.toString(), {
        method: "GET",
        headers: {
            Authorization: `KakaoAK ${getApiKey()}`,
        },
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`${text}`);
    }

    return res.json() as Promise<{ documents: unknown[]; meta: unknown }>;
}
