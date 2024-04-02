import Link from "next/link";

export default function NavBar() { 
    return ( 
        <nav className="flex bg-slate-900 w-full justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold">Finance Control</h1>
        <ul className="flex gap-6">
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="/">Movimentações</Link></li>
          <li><Link href="/">Categorias</Link></li>
        </ul>
        <div className="w-14 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/300" alt="avatar de usuario" />
        </div>
      </nav>
    )
}