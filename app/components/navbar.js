import accountIcon from "../../public/account-icon.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	function NavbarButton(props) {
		return (
			<Link
				href={"/" + props.text.toLowerCase()}
				className="text-white text-[20px] md:text-[35px] font-bold font-['Rowdies'] mx-4 drop-shadow-md"
			>
				{props.text}
			</Link>
		);
	}

	return (
		<div className="absolute top-0 left-0 bg-transparent overflow-hidden z-50 bg-gradient-to-t from-transparent to-[#ff5100]">
			<div className="flex flex-col md:flex-row md:flex-wrap justify-between items-center w-[100vw]">
				<div>
					<Link href="/" className="p-0 md:pl-5 text-white text-[60px] font-PacificoHeading drop-shadow-md">
						Crunchies
					</Link>
				</div>

				<div className="flex flex-wrap justify-center items-center p-0 md:pr-10">
					<NavbarButton text={"Menu"}></NavbarButton>
					<NavbarButton text={"Location"}></NavbarButton>
					<NavbarButton text={"Cart"}></NavbarButton>
					<Link href="login">
						<Image alt="accountIcon" className="w-[50px] h-[50px]" src={accountIcon}></Image>
					</Link>
				</div>
			</div>
		</div>
	);
}
