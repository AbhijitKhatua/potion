"use client"

interface NavbarProps {
    isCollapsed: boolean;
    onResetWidth: ()=> void;
};

export const Navbar = ({
    isCollapsed,
    onResetWidth
}: (NavbarProps)) => {
    return (
        <div>
            navbar!
        </div>
    )
}