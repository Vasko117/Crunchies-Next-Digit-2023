import accountIcon from "../../public/account-icon.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	function NavbarButton(props) {
		return (
			<Link href={"/" + props.text} className="text-white text-[43px] font-bold font-['Rowdies'] mx-4">
				{props.text}
			</Link>
		);
	}

	return (
		<div className="absolute top-0 left-0 bg-transparent">
			<div className="flex justify-between items-center w-[100vw]">
				<p className="pl-5 text-white text-[90px] font-PacificoHeading">Crunchies</p>
				<div className="flex justify-center items-center pr-10">
					<NavbarButton text={"Menu"}></NavbarButton>
					<NavbarButton text={"Location"}></NavbarButton>
					<NavbarButton text={"Cart"}></NavbarButton>
					<Image className="w-[50px] h-[50px]" src={accountIcon}></Image>
				</div>
			</div>
		</div>
	);
}
