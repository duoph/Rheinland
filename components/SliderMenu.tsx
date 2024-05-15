import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeFill } from 'react-icons/ri';

const SliderMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
            <div className="flex items-center justify-center w-full">
                {isMenuOpen ? (
                    <RiCloseLargeFill
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-rheinland-red z-10'
                        size={28}
                    />
                ) : (
                    <GiHamburgerMenu
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-rheinland-red z-10'
                        size={28}
                    />
                )}
                <div
                    className={`absolute right-0 top-[80px] flex items-start justify-start flex-col gap-3  px-5 py-3 bg-rheinland-yellow w-full h-[calc(100vh-80px)]  transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'
                        }`}
                >
                    <div>
                        <h1>RheinLand</h1>
                    </div>
                    <div>
                        <h1>RheinLand</h1>
                    </div>
                    <div>
                        <h1>RheinLand</h1>
                    </div>
                    <div>
                        <h1>RheinLand</h1>
                    </div>
                </div>
            </div>

        </ClickAwayListener>
    );
};

export default SliderMenu;