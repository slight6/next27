
import Link from "next/link";

const MenuBar = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow-md dropshadow-2xl">
      <ul className="flex justify-evenly items-center">
        {["Home", "About", "Services", "Portfolio", "Contact"].map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 border border-black rounded hover:bg-gray-200 transition"
          >
            <Link 
            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            className='text-red-700 font-medium'
            >
              {item}
            </Link>

            
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
