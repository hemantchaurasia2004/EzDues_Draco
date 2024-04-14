import React from "react";
import styles from "./sidebar.module.css";

export default function Sidebar({ selected = "Home" }) {
	const SidebarData = [
		{
			title: "Home",
			icon: (
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19.4608 8.69904C19.4603 8.69858 19.4599 8.69812 19.4594 8.69766L11.301 0.539551C10.9532 0.19165 10.4909 0 9.9991 0C9.50731 0 9.04497 0.191498 8.69707 0.539398L0.542928 8.69339C0.540182 8.69614 0.537435 8.69904 0.534689 8.70178C-0.179423 9.42001 -0.178202 10.5853 0.538198 11.3017C0.865499 11.6292 1.29778 11.8188 1.75997 11.8387C1.77874 11.8405 1.79766 11.8414 1.81673 11.8414H2.1419V17.8453C2.1419 19.0334 3.10854 20 4.2969 20H7.48873C7.81222 20 8.07467 19.7377 8.07467 19.4141V14.707C8.07467 14.1649 8.51565 13.7239 9.05779 13.7239H10.9404C11.4826 13.7239 11.9235 14.1649 11.9235 14.707V19.4141C11.9235 19.7377 12.1858 20 12.5095 20H15.7013C16.8897 20 17.8563 19.0334 17.8563 17.8453V11.8414H18.1578C18.6495 11.8414 19.1118 11.6499 19.4599 11.302C20.177 10.5844 20.1773 9.41711 19.4608 8.69904Z"
						fill="#757897"
					/>
				</svg>
			),
			link: "/home",
		},
		{
			title: "Generated",
			icon: (
				<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.2745 3.88432H9.05882L7.62353 2.17844C7.57525 2.1204 7.50289 2.08785 7.42745 2.09021H1.60588C0.717059 2.09668 0 2.81903 0 3.70785V14.2C0.00107843 15.0919 0.723823 15.8146 1.61569 15.8157H16.2745C17.1664 15.8146 17.8891 15.0919 17.8902 14.2V5.50001C17.8891 4.60815 17.1664 3.8854 16.2745 3.88432Z"
						fill="#757897"
					/>
					<path
						d="M18.3941 1.79424H11.1765L9.74117 0.0883546C9.69288 0.0303154 9.62053 -0.00223361 9.54509 0.000119332H3.72548C2.91901 0.00144286 2.23705 0.597227 2.12744 1.3962H7.43528C7.71362 1.39551 7.97788 1.51835 8.15685 1.73149L9.38234 3.18835H16.2745C17.5493 3.19051 18.5821 4.2234 18.5843 5.49816V13.7099C19.3925 13.6091 19.9994 12.9225 20 12.108V3.40796C19.9979 2.52066 19.2814 1.80071 18.3941 1.79424Z"
						fill="#757897"
					/>
					<rect x="3" y="11" width="6" height="2" rx="1" fill="white" />
				</svg>
			),
			link: "/home",
		},
		{
			title: "Starred",
			icon: (
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19.9478 7.22916C19.8169 6.82494 19.4577 6.53785 19.0327 6.49962L13.2602 5.97645L10.9776 0.643794C10.8093 0.252979 10.426 0 10.0001 0C9.5742 0 9.19089 0.252979 9.02258 0.644708L6.73996 5.97645L0.966512 6.49962C0.542308 6.53876 0.184023 6.82494 0.0523364 7.22916C-0.0793501 7.63338 0.0422653 8.07674 0.363165 8.35622L4.72652 12.1757L3.43987 17.8328C3.34572 18.2487 3.50747 18.6787 3.85324 18.9282C4.03909 19.0622 4.25654 19.1304 4.47581 19.1304C4.66487 19.1304 4.85241 19.0796 5.02072 18.979L10.0001 16.0086L14.9776 18.979C15.3419 19.1978 15.801 19.1778 16.146 18.9282C16.4919 18.6779 16.6535 18.2478 16.5594 17.8328L15.2727 12.1757L19.6361 8.35698C19.957 8.07674 20.0795 7.63414 19.9478 7.22916Z"
						fill="#757897"
					/>
				</svg>
			),
			link: "/home",
		},
		{
			title: "Verify",
			icon: (
				<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13.0196 3.10751H7.24706L6.09882 1.7428C6.0602 1.69637 6.00231 1.67033 5.94196 1.67221H1.28471C0.573647 1.67739 0 2.25527 0 2.96633V11.3601C0.000862745 12.0735 0.579059 12.6517 1.29255 12.6526H13.0196C13.7331 12.6517 14.3113 12.0735 14.3122 11.3601V4.40006C14.3113 3.68657 13.7331 3.10837 13.0196 3.10751Z"
						fill="#757897"
					/>
					<path
						d="M14.7155 1.43539H8.94136L7.79313 0.0706837C7.7545 0.0242523 7.69662 -0.00178689 7.63627 9.54656e-05H2.98058C2.3354 0.00115429 1.78983 0.477782 1.70215 1.11696H5.94842C6.17109 1.11641 6.3825 1.21468 6.52568 1.38519L7.50607 2.55068H13.0198C14.0396 2.55241 14.8659 3.37872 14.8676 4.39853V10.9679C15.5142 10.8873 15.9997 10.338 16.0002 9.68637V2.72637C15.9985 2.01653 15.4253 1.44057 14.7155 1.43539Z"
						fill="#757897"
					/>
					<rect x="2.3999" y="8.80005" width="4.8" height="1.6" rx="0.8" fill="white" />
					<circle cx="14.3998" cy="9.6" r="5.6" fill="white" />
					<path
						d="M13.4746 8.89692C13.6423 8.89692 13.7824 8.84801 13.8956 8.77208C13.8015 8.86483 13.6965 8.98799 13.608 9.1507C13.4826 9.3812 13.4042 9.66478 13.4042 10.0144C13.4042 10.1825 13.4184 10.4399 13.5801 10.6487C13.3929 10.8301 13.2779 11.0845 13.2779 11.3601C13.2779 11.8782 13.6934 12.3467 14.2581 12.3467C14.8143 12.3467 15.2446 11.8868 15.2446 11.3601C15.2446 11.0879 15.1321 10.84 14.9513 10.6608C15.0929 10.4968 15.1245 10.3075 15.1245 10.1786C15.1245 9.99887 15.1312 9.96006 15.1404 9.935C15.1404 9.93487 15.1405 9.93471 15.1405 9.93453C15.143 9.92758 15.1591 9.88228 15.2858 9.7831C15.3785 9.71105 15.595 9.54016 15.7894 9.29241C15.9827 9.04615 16.186 8.68355 16.186 8.23263C16.186 7.26015 15.31 6.69011 14.3402 6.69011C13.3046 6.69011 12.5955 7.33441 12.5955 8.03677C12.5955 8.31827 12.7217 8.54883 12.9072 8.69843C13.0789 8.83697 13.2878 8.89692 13.4746 8.89692ZM14.0523 8.63306C14.0874 8.59285 14.1145 8.555 14.1329 8.52863C14.1488 8.50567 14.1576 8.49258 14.1645 8.48228C14.1724 8.47061 14.1778 8.46253 14.1886 8.44773C14.1987 8.43384 14.2047 8.42689 14.2077 8.42382C14.2166 8.4203 14.2489 8.41039 14.3212 8.41039C14.3235 8.41039 14.3257 8.41041 14.3279 8.41043C14.2939 8.44328 14.2516 8.4782 14.1965 8.521C14.1849 8.53004 14.1716 8.54027 14.1572 8.55132C14.1252 8.57584 14.088 8.6044 14.0523 8.63306ZM14.3914 8.33113C14.3916 8.33108 14.3914 8.3323 14.3903 8.33491C14.3906 8.33248 14.3912 8.33117 14.3914 8.33113ZM14.2099 8.42174C14.2099 8.42178 14.2095 8.42222 14.2086 8.42283L14.2099 8.42174ZM10.1001 9.60005C10.1001 7.22301 12.0233 5.30005 14.4001 5.30005C16.7771 5.30005 18.7001 7.22322 18.7001 9.60005C18.7001 11.9771 16.7769 13.9 14.4001 13.9C12.0231 13.9 10.1001 11.9768 10.1001 9.60005Z"
						fill="#757897"
						stroke="#757897"
					/>
				</svg>
			),
			link: "/home",
		},
		{
			title: "Deleted",
			icon: (
				<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.6875 2.5H11.25V1.875C11.25 0.839453 10.4105 0 9.375 0H6.875C5.83945 0 5 0.839453 5 1.875V2.5H1.5625C0.69957 2.5 0 3.19957 0 4.0625V5.3125C0 5.6577 0.279805 5.9375 0.625 5.9375H15.625C15.9702 5.9375 16.25 5.6577 16.25 5.3125V4.0625C16.25 3.19957 15.5504 2.5 14.6875 2.5ZM6.25 1.875C6.25 1.53047 6.53047 1.25 6.875 1.25H9.375C9.71953 1.25 10 1.53047 10 1.875V2.5H6.25V1.875Z"
						fill="#757897"
					/>
					<path
						d="M1.18603 7.1875C1.0745 7.1875 0.985637 7.2807 0.990949 7.39211L1.50657 18.2141C1.55423 19.2156 2.37689 20 3.37923 20H12.8706C13.873 20 14.6956 19.2156 14.7433 18.2141L15.2589 7.39211C15.2642 7.2807 15.1754 7.1875 15.0638 7.1875H1.18603ZM10.6249 8.75C10.6249 8.40469 10.9046 8.125 11.2499 8.125C11.5952 8.125 11.8749 8.40469 11.8749 8.75V16.875C11.8749 17.2203 11.5952 17.5 11.2499 17.5C10.9046 17.5 10.6249 17.2203 10.6249 16.875V8.75ZM7.49993 8.75C7.49993 8.40469 7.77962 8.125 8.12493 8.125C8.47025 8.125 8.74993 8.40469 8.74993 8.75V16.875C8.74993 17.2203 8.47025 17.5 8.12493 17.5C7.77962 17.5 7.49993 17.2203 7.49993 16.875V8.75ZM4.37493 8.75C4.37493 8.40469 4.65462 8.125 4.99993 8.125C5.34525 8.125 5.62493 8.40469 5.62493 8.75V16.875C5.62493 17.2203 5.34525 17.5 4.99993 17.5C4.65462 17.5 4.37493 17.2203 4.37493 16.875V8.75Z"
						fill="#757897"
					/>
				</svg>
			),
			link: "/home",
		},
	];

	return (
		<div className={styles.Sidebar}>
			<svg width="103" height="22" viewBox="0 0 103 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.7 9C0.7 7.62667 1.00667 6.4 1.62 5.32C2.24667 4.22667 3.09333 3.38 4.16 2.78C5.24 2.16667 6.44667 1.86 7.78 1.86C9.34 1.86 10.7067 2.26 11.88 3.06C13.0533 3.86 13.8733 4.96667 14.34 6.38H11.12C10.8 5.71333 10.3467 5.21333 9.76 4.88C9.18667 4.54667 8.52 4.38 7.76 4.38C6.94667 4.38 6.22 4.57333 5.58 4.96C4.95333 5.33333 4.46 5.86667 4.1 6.56C3.75333 7.25333 3.58 8.06667 3.58 9C3.58 9.92 3.75333 10.7333 4.1 11.44C4.46 12.1333 4.95333 12.6733 5.58 13.06C6.22 13.4333 6.94667 13.62 7.76 13.62C8.52 13.62 9.18667 13.4533 9.76 13.12C10.3467 12.7733 10.8 12.2667 11.12 11.6H14.34C13.8733 13.0267 13.0533 14.14 11.88 14.94C10.72 15.7267 9.35333 16.12 7.78 16.12C6.44667 16.12 5.24 15.82 4.16 15.22C3.09333 14.6067 2.24667 13.76 1.62 12.68C1.00667 11.6 0.7 10.3733 0.7 9ZM27.0316 10.22C27.0316 10.62 27.0049 10.98 26.9516 11.3H18.8516C18.9182 12.1 19.1982 12.7267 19.6916 13.18C20.1849 13.6333 20.7916 13.86 21.5116 13.86C22.5516 13.86 23.2916 13.4133 23.7316 12.52H26.7516C26.4316 13.5867 25.8182 14.4667 24.9116 15.16C24.0049 15.84 22.8916 16.18 21.5716 16.18C20.5049 16.18 19.5449 15.9467 18.6916 15.48C17.8516 15 17.1916 14.3267 16.7116 13.46C16.2449 12.5933 16.0116 11.5933 16.0116 10.46C16.0116 9.31333 16.2449 8.30667 16.7116 7.44C17.1782 6.57333 17.8316 5.90667 18.6716 5.44C19.5116 4.97333 20.4782 4.74 21.5716 4.74C22.6249 4.74 23.5649 4.96667 24.3916 5.42C25.2316 5.87333 25.8782 6.52 26.3316 7.36C26.7982 8.18667 27.0316 9.14 27.0316 10.22ZM24.1316 9.42C24.1182 8.7 23.8582 8.12667 23.3516 7.7C22.8449 7.26 22.2249 7.04 21.4916 7.04C20.7982 7.04 20.2116 7.25333 19.7316 7.68C19.2649 8.09333 18.9782 8.67333 18.8716 9.42H24.1316ZM31.8753 6.64C32.2353 6.05333 32.702 5.59333 33.2753 5.26C33.862 4.92667 34.5286 4.76 35.2753 4.76V7.7H34.5353C33.6553 7.7 32.9886 7.90667 32.5353 8.32C32.0953 8.73333 31.8753 9.45333 31.8753 10.48V16H29.0753V4.92H31.8753V6.64ZM40.4213 7.22V12.58C40.4213 12.9533 40.5079 13.2267 40.6813 13.4C40.8679 13.56 41.1746 13.64 41.6013 13.64H42.9013V16H41.1413C38.7813 16 37.6013 14.8533 37.6013 12.56V7.22H36.2813V4.92H37.6013V2.18H40.4213V4.92H42.9013V7.22H40.4213ZM57.4552 2.04L52.3352 16H48.9352L43.8152 2.04H46.8152L50.6552 13.14L54.4752 2.04H57.4552ZM69.4339 10.22C69.4339 10.62 69.4072 10.98 69.3539 11.3H61.2539C61.3206 12.1 61.6006 12.7267 62.0939 13.18C62.5872 13.6333 63.1939 13.86 63.9139 13.86C64.9539 13.86 65.6939 13.4133 66.1339 12.52H69.1539C68.8339 13.5867 68.2206 14.4667 67.3139 15.16C66.4072 15.84 65.2939 16.18 63.9739 16.18C62.9072 16.18 61.9472 15.9467 61.0939 15.48C60.2539 15 59.5939 14.3267 59.1139 13.46C58.6472 12.5933 58.4139 11.5933 58.4139 10.46C58.4139 9.31333 58.6472 8.30667 59.1139 7.44C59.5806 6.57333 60.2339 5.90667 61.0739 5.44C61.9139 4.97333 62.8806 4.74 63.9739 4.74C65.0272 4.74 65.9672 4.96667 66.7939 5.42C67.6339 5.87333 68.2806 6.52 68.7339 7.36C69.2006 8.18667 69.4339 9.14 69.4339 10.22ZM66.5339 9.42C66.5206 8.7 66.2606 8.12667 65.7539 7.7C65.2472 7.26 64.6272 7.04 63.8939 7.04C63.2006 7.04 62.6139 7.25333 62.1339 7.68C61.6672 8.09333 61.3806 8.67333 61.2739 9.42H66.5339ZM74.2777 6.64C74.6377 6.05333 75.1043 5.59333 75.6777 5.26C76.2643 4.92667 76.931 4.76 77.6777 4.76V7.7H76.9377C76.0577 7.7 75.391 7.90667 74.9377 8.32C74.4977 8.73333 74.2777 9.45333 74.2777 10.48V16H71.4777V4.92H74.2777V6.64ZM80.9836 3.6C80.4903 3.6 80.0769 3.44667 79.7436 3.14C79.4236 2.82 79.2636 2.42667 79.2636 1.96C79.2636 1.49333 79.4236 1.10667 79.7436 0.799999C80.0769 0.479999 80.4903 0.319999 80.9836 0.319999C81.4769 0.319999 81.8836 0.479999 82.2036 0.799999C82.5369 1.10667 82.7036 1.49333 82.7036 1.96C82.7036 2.42667 82.5369 2.82 82.2036 3.14C81.8836 3.44667 81.4769 3.6 80.9836 3.6ZM82.3636 4.92V16H79.5636V4.92H82.3636ZM90.21 7.22H88.27V16H85.43V7.22H84.17V4.92H85.43V4.36C85.43 3 85.8167 2 86.59 1.36C87.3633 0.719999 88.53 0.42 90.09 0.46V2.82C89.41 2.80667 88.9367 2.92 88.67 3.16C88.4033 3.4 88.27 3.83333 88.27 4.46V4.92H90.21V7.22ZM102.625 4.92L95.7645 21.24H92.7845L95.1845 15.72L90.7445 4.92H93.8845L96.7445 12.66L99.6445 4.92H102.625Z"
					fill="black"
				/>
			</svg>
			<ul className={styles.SidebarList}>
				{SidebarData.map((value, key) => {
					return (
						<li
							key={key}
							className={styles.elemnt}
							onClick={() => {
								// window.location.pathname = value.link;
							}}>
							<div id={styles.hov}>
								<svg width="11" height="37" viewBox="0 0 11 37" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M0.248718 19.5082C0.2571 31.0322 -0.213395 38.6615 0.248806 36.6899C0.711007 34.7194 4.61904 30.6736 6.85101 27.7053C12.3423 20.4018 12.3771 15.9159 6.98872 9.672C4.7783 7.11178 0.768513 2.1019 0.248837 0.27203C-0.306762 -1.68755 0.240337 7.16707 0.248718 19.5082Z"
										fill="#0C21C1"
									/>
								</svg>
							</div>
							<div id={styles.icon} className={selected == value.title ? styles.blue : ""}>
								{value.icon}
							</div>
							<div id="title">{value.title}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}