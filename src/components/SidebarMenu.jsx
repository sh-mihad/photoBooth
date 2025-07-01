import { NavLink } from 'react-router-dom';

export default function SidebarMenu({ navData, index }) {
    const { title, href, d } = navData;
    return (
        <NavLink to={href}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-rose-500 stroke-rose-500 flex flex-row items-center gap-2" : "text-zinc-500 stroke-zinc-800 flex flex-row items-center gap-2" 
            }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d={d} />
                {index === 3 && <circle cx="12" cy="7" r="4" />}
            </svg>
            <span className="text-sm ">{title}</span>
        </NavLink>
    )
}
