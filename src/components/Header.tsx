import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="h-20 w-full border-b border-gray">
            <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between px-6">
                {/* 로고 */}
                <h1 className="font-bold text-[24px] text-primary mt-6 mb-6">
                    CERTICOS BOOKS
                </h1>

                {/* 메뉴 */}
                <nav className="flex gap-2">
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
