import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="h-[80px] w-full border-b border-gray">
            <div className="relative mx-auto flex h-full max-w-[1920px] items-center px-6 pl-[160px]">
                {/* 로고 */}
                <h1 className="font-bold text-[24px] text-primary">
                    CERTICOS BOOKS
                </h1>

                {/* 메뉴 - 중앙 배치 */}
                <nav className="absolute left-1/2 flex  -translate-x-1/2 gap-[56px] pl-[400px]">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center border-b-[3px] font-medium text-[16px] transition-colors ${
                                isActive
                                    ? "border-ui-primary"
                                    : "border-transparent text-primary"
                            }`
                        }
                    >
                        도서 검색
                    </NavLink>
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            `flex items-center border-b-[3px] font-medium text-[16px] transition-colors ${
                                isActive
                                    ? "border-ui-primary"
                                    : "border-transparent text-primary"
                            }`
                        }
                    >
                        내가 찜한 책
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
