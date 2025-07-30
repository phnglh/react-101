import data from "../../libs/data.json";

const menuItems = data.menuItems;

export default function Navbar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {menuItems.map((item) => (
          <li key={item.label} className="relative group">
            <a
              href={item.href || "#"}
              className="flex h-[60px] items-center justify-center px-4 hover:underline"
            >
              {item.label}
            </a>

            {item.children && (
              <ul className="absolute left-0 top-full z-10 hidden min-w-[160px] flex-col bg-white shadow group-hover:flex">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <a href={child.href} className="block px-4 py-2 hover:bg-gray-100">
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
