import { Navbar, TextInput, Button } from "flowbite-react";
import { Link , useLocation} from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
const Header = () => {
    const path=useLocation().pathname;
  return (
    <>
      <div>
        <Navbar className="border-b-2">
          <Link
            to={"/"}
            className="self-center whitespace-nowrap test-sm sm:text-xl font-semibold dark:text-white"
          >
            <span
              className="px-2 py-1 
          bg-gradient-to-r from-pink-500
           via-pink-300 text-white"
            >
              Rupe
            </span>
            Blog
          </Link>
          <form>
            <TextInput
            
              type="text"
              placeholder="search.."
              rightIcon={AiOutlineSearch}
              className="hidden lg:inline "
            />
          </form>
          <Button className="w-10 h-10 rounded-full lg:hidden" color="gray">
            <AiOutlineSearch className="text-black " />
          </Button>

          <div className="flex md:order-2 gap-2">
            <Button className="w-10 h-10 rounded-full" color="gray">
              <FaMoon className="text-black" />
            </Button>
            <Link to={"/sign-in"}>
              <Button
                className="text-black border-none
                 hover:bg-pink-300 ease-in-out transition-all
                 
                 "
                color="pink"
              >
                Sign In
              </Button>
            </Link>
            <Navbar.Toggle/>
          </div>
          <Navbar.Collapse className="" color="pink">
            <Navbar.Link active={path==="/"}>
              <Link to={"/"}>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/about"}>
              <Link to={"/about"}>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/projects"}>
              <Link to={"/projects"}>Projects</Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
