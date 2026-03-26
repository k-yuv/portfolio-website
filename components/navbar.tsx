import React from 'react';

export const Navbar = (): React.ReactElement => {
  return (
    <nav className="flex fixed top-0 z-50 w-full items-center px-8 h-[60px] bg-(--background)/75 shadow-[0_2px_0px_rgba(0,0,0,0.12)]" style={{ fontFamily: 'var(--font-itim)', fontSize: '1.25em' }}>

      {/* Left: favicon */}
      <div className="flex items-center">
        <a href="/">
          <img src="/favicon.ico" alt="favicon" className="w-8 h-8" />
        </a>
      </div>

      {/* Center: nav links */}
      <div className="flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
        <a href="/" className="text-(--forground) px-[0.85rem] py-[0.4rem] rounded-md no-underline transition-colors hover:bg-(--yellow)/75">
          Home
        </a>
        <a href="/about" className="text-(--forground) px-[0.85rem] py-[0.4rem] rounded-md no-underline transition-colors hover:bg-(--yellow)/75">
          About
        </a>
        <a href="/fun" className="text-(--forground) px-[0.85rem] py-[0.4rem] rounded-md no-underline transition-colors hover:bg-(--yellow)/75">
          ^_^
        </a>
      </div>

      {/* Right: name */}
      <div className="flex items-center gap-2 px-2 py-1.5 rounded-full ml-auto">
        <span className="font-medium text-(--forground) px-[10px]">✶</span>
        <span className="font-medium text-(--forground)">Keyura Valalla</span>
      </div>

    </nav>
  );
};