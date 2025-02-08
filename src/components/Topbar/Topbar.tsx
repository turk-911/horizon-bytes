import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import Timer from "../Timer/Timer";
import { useRouter } from "next/router";

const tabs = [
	{ name: "Explore", path: "/explore" },
	{ name: "Problems", path: "/all-problems" },
	{ name: "Contests", path: "/contests" },
	{ name: "Discuss", path: "/discuss" },
	{ name: "Interview", path: "/interview" },
	{ name: "Store", path: "/store" },
];

const Topbar: React.FC<{ problemPage?: boolean }> = ({ problemPage }) => {
	const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
	const router = useRouter();
	const [activeTab, setActiveTab] = useState("problems");

	useEffect(() => {
		const pathWithoutParams = router.pathname;
		const matchedTab = tabs.find((tab) => tab.path === pathWithoutParams);
		if (matchedTab) setActiveTab(matchedTab.name.toLowerCase());
	}, [router.pathname]);

	useEffect(() => {
		if (router.pathname === "/") {
			router.replace("/all-problems");
		}
	}, [router.pathname]);

	return (
		<nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
			<div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
				<Link href="/" className="h-[22px] flex-1">
					<Image src="/logo-full.png" alt="Logo" height={100} width={100} />
				</Link>

				<div className="flex gap-6 flex-1 justify-center">
					{tabs.map(({ name, path }) => (
						<Link href={path} key={name}>
							<div
								className={`cursor-pointer transition-all duration-200 ${
									activeTab === name.toLowerCase()
										? "text-brand-orange font-semibold border-brand-orange"
									: "text-dark-gray-7 hover:text-white"
							}`}
							>
								{name}
							</div>
						</Link>
					))}
				</div>

				<div className="flex items-center space-x-4 flex-1 justify-end">
					<div>
						<a
							href="/buy-me-a-coffee"
							target="_blank"
							rel="noreferrer"
							className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
						>
							Premium
						</a>
					</div>
					{!user && (
						<Link
							href="/auth"
							onClick={() => setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))}
						>
							<button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">Sign In</button>
						</Link>
					)}
					{user && problemPage && <Timer />}
					{user && (
						<div className="cursor-pointer group relative">
							<Image src="/avatar.png" alt="Avatar" width={30} height={30} className="rounded-full" />
							<div
								className="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out"
							>
								<p className="text-sm">{user.email}</p>
							</div>
						</div>
					)}
					{user && <Logout />}
				</div>
			</div>
		</nav>
	);
};

export default Topbar;
