"use client";
import { useGetMeQuery } from "@/redux/api/me";
import scss from "./Header.module.scss";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import SearchTracks from "@/components/shared/SearchTracks";

const Header = () => {
  const { data: session } = useGetMeQuery();
  const [modal, setModal] = useState<boolean>(false);
  const [close, setClose] = useState<string>("");

  const handleLogin = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  };

  const handleLogout = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
      "_self"
    );
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href="/">
              <FaSpotify />
            </Link>
          </div>
          <div className={scss.search}>
            <div className={scss.dom}>
              <button className={scss.btn}>
                <GoHome />
              </button>
            </div>

            <div className={scss.input}>
              <div className={scss.ob}>
                <span>
                  <IoMdSearch />
                </span>
                <SearchTracks />
                <div className={scss.span}></div>
                {!close.length ? (
                  <div className={scss.file}>
                    <div className={scss.dev}></div>
                    <span>
                      <IoFileTrayFullSharp />
                    </span>
                  </div>
                ) : (
                  <div className={scss.clos}>
                    <span onClick={() => setClose("")}>
                      <RiCloseLargeFill />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={scss.auth}>
            <div className={scss.lego}>
              <div className={scss.legoo}>
                <span>
                  <HiOutlineArrowCircleDown />
                </span>
                <h3>Установить приложение</h3>
              </div>
              <button>
                <FiBell />
              </button>
            </div>
            {session ? (
              <>
                {
                  <div>
                    <div className={scss.user}>
                      <div className={scss.avto}>
                        <h3 onClick={() => setModal(!modal)}>
                          {session.display_name.slice(0, 1)}
                        </h3>
                      </div>
                    </div>
                    {modal ? (
                      <div className={scss.modal}>
                        <button onClick={handleLogout}>Выйти</button>
                      </div>
                    ) : null}
                  </div>
                }
              </>
            ) : (
              <div className={scss.log}>
                <button onClick={handleLogin}>login</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
