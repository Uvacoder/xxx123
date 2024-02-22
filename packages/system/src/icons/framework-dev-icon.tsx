import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { IconProps } from './shared-icon-types'

export const FrameworkDevIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function FrameworkDevIcon(
		{ className, size, color = '#191C1D', ...props },
		ref,
	) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				width="198"
				height="34"
				viewBox="0 0 198 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M49.7813 13V15.5H42.375V13H49.7813ZM44.0703 25V12.1328C44.0703 11.263 44.2396 10.5417 44.5781 9.96875C44.9219 9.39583 45.3906 8.96614 45.9844 8.67969C46.5781 8.39323 47.2526 8.25 48.0078 8.25C48.5182 8.25 48.9844 8.28906 49.4063 8.36719C49.8333 8.44531 50.151 8.51562 50.3594 8.57812L49.7656 11.0781C49.6354 11.0365 49.474 10.9974 49.2812 10.9609C49.0937 10.9245 48.901 10.9062 48.7031 10.9062C48.2135 10.9062 47.8724 11.0208 47.6797 11.25C47.487 11.474 47.3906 11.7891 47.3906 12.1953V25H44.0703ZM51.1545 25V13H54.381V15.0937H54.506C54.7248 14.349 55.092 13.7865 55.6076 13.4063C56.1232 13.0208 56.717 12.8281 57.3888 12.8281C57.5555 12.8281 57.7352 12.8385 57.9279 12.8594C58.1206 12.8802 58.2899 12.9089 58.4357 12.9453V15.8984C58.2795 15.8516 58.0633 15.8099 57.7873 15.7734C57.5112 15.737 57.2586 15.7188 57.0295 15.7188C56.5399 15.7188 56.1024 15.8255 55.717 16.0391C55.3367 16.2474 55.0347 16.5391 54.8107 16.9141C54.592 17.2891 54.4826 17.7214 54.4826 18.2109V25H51.1545ZM62.5745 25.2266C61.8089 25.2266 61.1266 25.0938 60.5277 24.8281C59.9287 24.5573 59.4547 24.1589 59.1058 23.6328C58.762 23.1016 58.5902 22.4401 58.5902 21.6484C58.5902 20.9818 58.7126 20.4219 58.9573 19.9687C59.2021 19.5156 59.5355 19.151 59.9573 18.875C60.3792 18.599 60.8584 18.3906 61.3948 18.25C61.9365 18.1094 62.5042 18.0104 63.098 17.9531C63.7959 17.8802 64.3584 17.8125 64.7855 17.75C65.2126 17.6823 65.5224 17.5833 65.7152 17.4531C65.9079 17.3229 66.0042 17.1302 66.0042 16.875V16.8281C66.0042 16.3333 65.848 15.9505 65.5355 15.6797C65.2282 15.4089 64.7907 15.2734 64.223 15.2734C63.624 15.2734 63.1474 15.4062 62.7933 15.6719C62.4391 15.9323 62.2047 16.2604 62.0902 16.6562L59.012 16.4062C59.1683 15.6771 59.4756 15.0469 59.9339 14.5156C60.3922 13.9792 60.9834 13.5677 61.7073 13.2812C62.4365 12.9896 63.2803 12.8438 64.2386 12.8438C64.9053 12.8438 65.5433 12.9219 66.1527 13.0781C66.7672 13.2344 67.3115 13.4766 67.7855 13.8047C68.2646 14.1328 68.6422 14.5547 68.9183 15.0703C69.1943 15.5807 69.3323 16.1927 69.3323 16.9062V25H66.1761V23.3359H66.0823C65.8896 23.7109 65.6318 24.0417 65.3089 24.3281C64.986 24.6094 64.598 24.8307 64.1448 24.9922C63.6917 25.1484 63.1683 25.2266 62.5745 25.2266ZM63.5277 22.9297C64.0172 22.9297 64.4495 22.8333 64.8245 22.6406C65.1995 22.4427 65.4938 22.1771 65.7073 21.8438C65.9209 21.5104 66.0277 21.1328 66.0277 20.7109V19.4375C65.9235 19.5052 65.7803 19.5677 65.598 19.625C65.4209 19.6771 65.2204 19.7266 64.9964 19.7734C64.7724 19.8151 64.5485 19.8542 64.3245 19.8906C64.1006 19.9219 63.8974 19.9505 63.7152 19.9766C63.3245 20.0339 62.9834 20.125 62.6917 20.25C62.4001 20.375 62.1735 20.5443 62.012 20.7578C61.8506 20.9661 61.7698 21.2266 61.7698 21.5391C61.7698 21.9922 61.9339 22.3385 62.262 22.5781C62.5954 22.8125 63.0172 22.9297 63.5277 22.9297ZM71.2544 25V13H74.4263V15.1172H74.5669C74.8169 14.4141 75.2335 13.8594 75.8169 13.4531C76.4002 13.0469 77.0981 12.8438 77.9106 12.8438C78.7335 12.8438 79.4341 13.0495 80.0122 13.4609C80.5903 13.8672 80.9757 14.4193 81.1684 15.1172H81.2934C81.5382 14.4297 81.9809 13.8802 82.6216 13.4687C83.2674 13.0521 84.0304 12.8438 84.9106 12.8438C86.0304 12.8438 86.9393 13.2005 87.6372 13.9141C88.3403 14.6224 88.6919 15.6276 88.6919 16.9297V25H85.3716V17.5859C85.3716 16.9193 85.1945 16.4193 84.8403 16.0859C84.4861 15.7526 84.0434 15.5859 83.5122 15.5859C82.908 15.5859 82.4367 15.7786 82.0981 16.1641C81.7596 16.5443 81.5903 17.0469 81.5903 17.6719V25H78.3638V17.5156C78.3638 16.9271 78.1945 16.4583 77.8559 16.1094C77.5226 15.7604 77.0825 15.5859 76.5356 15.5859C76.1658 15.5859 75.8325 15.6797 75.5356 15.8672C75.244 16.0495 75.0122 16.3073 74.8403 16.6406C74.6684 16.9687 74.5825 17.3542 74.5825 17.7969V25H71.2544ZM96.1295 25.2344C94.8952 25.2344 93.8327 24.9844 92.942 24.4844C92.0566 23.9792 91.3743 23.2656 90.8952 22.3437C90.416 21.4167 90.1764 20.3203 90.1764 19.0547C90.1764 17.8203 90.416 16.737 90.8952 15.8047C91.3743 14.8724 92.0488 14.1458 92.9186 13.625C93.7936 13.1042 94.8196 12.8438 95.9967 12.8438C96.7884 12.8438 97.5254 12.9714 98.2077 13.2266C98.8952 13.4766 99.4941 13.8542 100.005 14.3594C100.52 14.8646 100.921 15.5 101.208 16.2656C101.494 17.026 101.637 17.9167 101.637 18.9375V19.8516H91.5045V17.7891H98.5045C98.5045 17.3099 98.4004 16.8854 98.192 16.5156C97.9837 16.1458 97.6946 15.8568 97.3248 15.6484C96.9603 15.4349 96.5358 15.3281 96.0514 15.3281C95.5462 15.3281 95.0983 15.4453 94.7077 15.6797C94.3222 15.9089 94.0202 16.2187 93.8014 16.6094C93.5827 16.9948 93.4707 17.4245 93.4655 17.8984V19.8594C93.4655 20.4531 93.5748 20.9661 93.7936 21.3984C94.0176 21.8307 94.3327 22.1641 94.7389 22.3984C95.1452 22.6328 95.6269 22.75 96.1842 22.75C96.554 22.75 96.8926 22.6979 97.1998 22.5938C97.5071 22.4896 97.7702 22.3333 97.9889 22.125C98.2077 21.9167 98.3743 21.6615 98.4889 21.3594L101.567 21.5625C101.411 22.3021 101.09 22.9479 100.606 23.5C100.127 24.0469 99.5071 24.474 98.7467 24.7813C97.9915 25.0833 97.1191 25.2344 96.1295 25.2344ZM105.43 25L102.165 13H105.532L107.391 21.0625H107.501L109.438 13H112.743L114.712 21.0156H114.813L116.641 13H120.001L116.743 25H113.22L111.157 17.4531H111.009L108.946 25H105.43ZM126.237 25.2344C125.024 25.2344 123.974 24.9766 123.089 24.4609C122.209 23.9401 121.529 23.2161 121.05 22.2891C120.571 21.3568 120.331 20.276 120.331 19.0469C120.331 17.8073 120.571 16.724 121.05 15.7969C121.529 14.8646 122.209 14.1406 123.089 13.625C123.974 13.1042 125.024 12.8438 126.237 12.8438C127.451 12.8438 128.498 13.1042 129.378 13.625C130.263 14.1406 130.946 14.8646 131.425 15.7969C131.904 16.724 132.144 17.8073 132.144 19.0469C132.144 20.276 131.904 21.3568 131.425 22.2891C130.946 23.2161 130.263 23.9401 129.378 24.4609C128.498 24.9766 127.451 25.2344 126.237 25.2344ZM126.253 22.6562C126.805 22.6562 127.266 22.5 127.636 22.1875C128.005 21.8698 128.284 21.4375 128.472 20.8906C128.664 20.3437 128.761 19.7214 128.761 19.0234C128.761 18.3255 128.664 17.7031 128.472 17.1562C128.284 16.6094 128.005 16.1771 127.636 15.8594C127.266 15.5417 126.805 15.3828 126.253 15.3828C125.696 15.3828 125.227 15.5417 124.847 15.8594C124.472 16.1771 124.188 16.6094 123.995 17.1562C123.808 17.7031 123.714 18.3255 123.714 19.0234C123.714 19.7214 123.808 20.3437 123.995 20.8906C124.188 21.4375 124.472 21.8698 124.847 22.1875C125.227 22.5 125.696 22.6562 126.253 22.6562ZM133.648 25V13H136.874V15.0937H136.999C137.218 14.349 137.585 13.7865 138.101 13.4063C138.616 13.0208 139.21 12.8281 139.882 12.8281C140.049 12.8281 140.228 12.8385 140.421 12.8594C140.614 12.8802 140.783 12.9089 140.929 12.9453V15.8984C140.773 15.8516 140.556 15.8099 140.28 15.7734C140.004 15.737 139.752 15.7188 139.523 15.7188C139.033 15.7188 138.595 15.8255 138.21 16.0391C137.83 16.2474 137.528 16.5391 137.304 16.9141C137.085 17.2891 136.976 17.7214 136.976 18.2109V25H133.648ZM145.005 21.5469L145.013 17.5547H145.497L149.341 13H153.161L147.997 19.0313H147.208L145.005 21.5469ZM141.99 25V9H145.318V25H141.99ZM149.49 25L145.958 19.7734L148.177 17.4219L153.388 25H149.49ZM156.08 25.2031C155.564 25.2031 155.121 25.0208 154.751 24.6562C154.387 24.2865 154.205 23.8437 154.205 23.3281C154.205 22.8177 154.387 22.3802 154.751 22.0156C155.121 21.651 155.564 21.4687 156.08 21.4687C156.58 21.4687 157.017 21.651 157.392 22.0156C157.767 22.3802 157.955 22.8177 157.955 23.3281C157.955 23.6719 157.866 23.987 157.689 24.2734C157.517 24.5547 157.29 24.7812 157.009 24.9531C156.728 25.1198 156.418 25.2031 156.08 25.2031ZM164.449 25.1953C163.537 25.1953 162.712 24.9609 161.972 24.4922C161.238 24.0182 160.655 23.3229 160.222 22.4062C159.795 21.4844 159.582 20.3542 159.582 19.0156C159.582 17.6406 159.803 16.4974 160.246 15.5859C160.688 14.6693 161.277 13.9844 162.011 13.5313C162.751 13.0729 163.561 12.8438 164.441 12.8438C165.113 12.8438 165.673 12.9583 166.121 13.1875C166.574 13.4115 166.938 13.6927 167.214 14.0312C167.496 14.3646 167.709 14.6927 167.855 15.0156H167.957V9H171.277V25H167.996V23.0781H167.855C167.699 23.4115 167.477 23.7422 167.191 24.0703C166.91 24.3932 166.543 24.6615 166.089 24.875C165.642 25.0885 165.095 25.1953 164.449 25.1953ZM165.504 22.5469C166.04 22.5469 166.493 22.401 166.863 22.1094C167.238 21.8125 167.524 21.3984 167.722 20.8672C167.925 20.3359 168.027 19.7135 168.027 19C168.027 18.2865 167.928 17.6667 167.73 17.1406C167.532 16.6146 167.246 16.2083 166.871 15.9219C166.496 15.6354 166.04 15.4922 165.504 15.4922C164.957 15.4922 164.496 15.6406 164.121 15.9375C163.746 16.2344 163.462 16.6458 163.269 17.1719C163.076 17.6979 162.98 18.3073 162.98 19C162.98 19.6979 163.076 20.3151 163.269 20.8516C163.467 21.3828 163.751 21.7995 164.121 22.1016C164.496 22.3984 164.957 22.5469 165.504 22.5469ZM178.822 25.2344C177.588 25.2344 176.525 24.9844 175.635 24.4844C174.749 23.9792 174.067 23.2656 173.588 22.3437C173.108 21.4167 172.869 20.3203 172.869 19.0547C172.869 17.8203 173.108 16.737 173.588 15.8047C174.067 14.8724 174.741 14.1458 175.611 13.625C176.486 13.1042 177.512 12.8438 178.689 12.8438C179.481 12.8438 180.218 12.9714 180.9 13.2266C181.588 13.4766 182.187 13.8542 182.697 14.3594C183.213 14.8646 183.614 15.5 183.9 16.2656C184.187 17.026 184.33 17.9167 184.33 18.9375V19.8516H174.197V17.7891H181.197C181.197 17.3099 181.093 16.8854 180.885 16.5156C180.676 16.1458 180.387 15.8568 180.017 15.6484C179.653 15.4349 179.228 15.3281 178.744 15.3281C178.239 15.3281 177.791 15.4453 177.4 15.6797C177.015 15.9089 176.713 16.2187 176.494 16.6094C176.275 16.9948 176.163 17.4245 176.158 17.8984V19.8594C176.158 20.4531 176.267 20.9661 176.486 21.3984C176.71 21.8307 177.025 22.1641 177.431 22.3984C177.838 22.6328 178.319 22.75 178.877 22.75C179.247 22.75 179.585 22.6979 179.892 22.5938C180.2 22.4896 180.463 22.3333 180.681 22.125C180.9 21.9167 181.067 21.6615 181.181 21.3594L184.26 21.5625C184.103 22.3021 183.783 22.9479 183.299 23.5C182.819 24.0469 182.2 24.474 181.439 24.7813C180.684 25.0833 179.812 25.2344 178.822 25.2344ZM196.707 13L192.512 25H188.762L184.566 13H188.082L190.574 21.5859H190.699L193.184 13H196.707Z"
					fill={color}
				/>
				<path
					d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
					fill="#191C1D"
				/>
				<path
					d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
					fill="url(#paint0_linear_1545_145924)"
					fillOpacity="0.2"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17 33.1053C25.8947 33.1053 33.1053 25.8947 33.1053 17C33.1053 8.10531 25.8947 0.894737 17 0.894737C8.10531 0.894737 0.894737 8.10531 0.894737 17C0.894737 25.8947 8.10531 33.1053 17 33.1053ZM17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
					fill="#747778"
				/>
				<path
					d="M19 25V22.9834C17.578 22.9834 17.29 22.4081 17.29 21.1881V19.3422C17.29 18.3686 16.894 17.4962 15.154 17.1233V16.8704C16.894 16.4974 17.29 15.625 17.29 14.6578V12.8119C17.29 11.5855 17.578 11.0103 19 11.0103V9C16.576 9 14.842 9.42355 14.842 12.5401V13.9372C14.842 15.2331 14.38 15.7831 13 15.7831V18.2106C14.38 18.2106 14.842 18.7606 14.842 20.0565V21.4599C14.842 24.5765 16.576 25 19 25Z"
					fill="white"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1545_145924"
						x1="0"
						y1="0"
						x2="34"
						y2="34"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" />
						<stop offset="1" stopColor="white" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
		)
	},
)
