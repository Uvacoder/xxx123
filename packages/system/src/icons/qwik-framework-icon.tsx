import classNames from "classnames"
import React from "react"
import { iconStyle } from "./icon.css"
import { FrameworkIconProps } from "./shared-icon-types"

export const QwikFrameworkIcon = React.forwardRef<
	SVGSVGElement,
	FrameworkIconProps
>(function QwikFrameworkIcon({ className, size, stretched, ...props }, ref) {
	return stretched ? (
		<svg
			className={classNames(className, iconStyle({ size }))}
			width="254"
			height="34"
			viewBox="0 0 254 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<path
				d="M51.2578 29.5V23.0781H51.1562C51 23.4115 50.7786 23.7422 50.4922 24.0703C50.2109 24.3932 49.8438 24.6615 49.3906 24.875C48.9427 25.0885 48.3958 25.1953 47.75 25.1953C46.8385 25.1953 46.013 24.9609 45.2734 24.4922C44.5391 24.0182 43.9557 23.3229 43.5234 22.4063C43.0964 21.4844 42.8828 20.3542 42.8828 19.0156C42.8828 17.6406 43.1042 16.4974 43.5469 15.5859C43.9896 14.6693 44.5781 13.9844 45.3125 13.5313C46.0521 13.0729 46.862 12.8438 47.7422 12.8438C48.4141 12.8438 48.974 12.9583 49.4219 13.1875C49.875 13.4115 50.2396 13.6927 50.5156 14.0313C50.7969 14.3646 51.0104 14.6927 51.1562 15.0156H51.2969V13H54.5781V29.5H51.2578ZM48.8047 22.5469C49.3411 22.5469 49.7943 22.401 50.1641 22.1094C50.5391 21.8125 50.8255 21.3984 51.0234 20.8672C51.2266 20.3359 51.3281 19.7135 51.3281 19C51.3281 18.2865 51.2292 17.6667 51.0312 17.1406C50.8333 16.6146 50.5469 16.2083 50.1719 15.9219C49.7969 15.6354 49.3411 15.4922 48.8047 15.4922C48.2578 15.4922 47.7969 15.6406 47.4219 15.9375C47.0469 16.2344 46.763 16.6458 46.5703 17.1719C46.3776 17.6979 46.2812 18.3073 46.2812 19C46.2812 19.6979 46.3776 20.3151 46.5703 20.8516C46.7682 21.3828 47.0521 21.7995 47.4219 22.1016C47.7969 22.3984 48.2578 22.5469 48.8047 22.5469Z"
				fill="#9052F0"
			/>
			<path
				d="M58.9572 25L55.6916 13H59.0588L60.9181 21.0625H61.0275L62.965 13H66.2697L68.2384 21.0156H68.34L70.1681 13H73.5275L70.2697 25H66.7463L64.6838 17.4531H64.5353L62.4728 25H58.9572Z"
				fill="#9052F0"
			/>
			<path
				d="M74.6429 25V13H77.971V25H74.6429ZM76.3148 11.4531C75.82 11.4531 75.3955 11.2891 75.0413 10.9609C74.6924 10.6276 74.5179 10.2292 74.5179 9.76562C74.5179 9.30729 74.6924 8.91406 75.0413 8.58594C75.3955 8.2526 75.82 8.08594 76.3148 8.08594C76.8096 8.08594 77.2314 8.2526 77.5804 8.58594C77.9346 8.91406 78.1116 9.30729 78.1116 9.76562C78.1116 10.2292 77.9346 10.6276 77.5804 10.9609C77.2314 11.2891 76.8096 11.4531 76.3148 11.4531Z"
				fill="#9052F0"
			/>
			<path
				d="M82.9927 21.5469L83.0005 17.5547H83.4848L87.3286 13H91.1489L85.9848 19.0313H85.1958L82.9927 21.5469ZM79.977 25V9H83.3052V25H79.977ZM87.477 25L83.9458 19.7734L86.1645 17.4219L91.3755 25H87.477Z"
				fill="#9052F0"
			/>
			<path
				d="M94.067 25.2031C93.5514 25.2031 93.1087 25.0208 92.7389 24.6562C92.3743 24.2865 92.192 23.8438 92.192 23.3281C92.192 22.8177 92.3743 22.3802 92.7389 22.0156C93.1087 21.651 93.5514 21.4688 94.067 21.4688C94.567 21.4688 95.0045 21.651 95.3795 22.0156C95.7545 22.3802 95.942 22.8177 95.942 23.3281C95.942 23.6719 95.8535 23.987 95.6764 24.2734C95.5045 24.5547 95.278 24.7812 94.9967 24.9531C94.7155 25.1198 94.4056 25.2031 94.067 25.2031Z"
				fill="#9052F0"
			/>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="#191C1D"
			/>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="url(#paint0_linear_2732_129072)"
				fillOpacity="0.2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17 33.1053C25.8947 33.1053 33.1053 25.8947 33.1053 17C33.1053 8.10531 25.8947 0.894737 17 0.894737C8.10531 0.894737 0.894737 8.10531 0.894737 17C0.894737 25.8947 8.10531 33.1053 17 33.1053ZM17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
				fill="#757778"
			/>
			<path
				d="M19 25V22.9834C17.578 22.9834 17.29 22.4081 17.29 21.1881V19.3422C17.29 18.3686 16.894 17.4962 15.154 17.1233V16.8704C16.894 16.4974 17.29 15.625 17.29 14.6578V12.8119C17.29 11.5855 17.578 11.0103 19 11.0103V9C16.576 9 14.842 9.42355 14.842 12.5401V13.9372C14.842 15.2331 14.38 15.7831 13 15.7831V18.2106C14.38 18.2106 14.842 18.7606 14.842 20.0565V21.4599C14.842 24.5765 16.576 25 19 25Z"
				fill="white"
			/>
			<path
				d="M105.781 13V15.5H98.375V13H105.781ZM100.07 25V12.1328C100.07 11.263 100.24 10.5417 100.578 9.96875C100.922 9.39583 101.391 8.96615 101.984 8.67969C102.578 8.39323 103.253 8.25 104.008 8.25C104.518 8.25 104.984 8.28906 105.406 8.36719C105.833 8.44531 106.151 8.51563 106.359 8.57813L105.766 11.0781C105.635 11.0365 105.474 10.9974 105.281 10.9609C105.094 10.9245 104.901 10.9063 104.703 10.9063C104.214 10.9063 103.872 11.0208 103.68 11.25C103.487 11.474 103.391 11.7891 103.391 12.1953V25H100.07Z"
				fill="#191C1D"
			/>
			<path
				d="M107.154 25V13H110.381V15.0938H110.506C110.725 14.349 111.092 13.7865 111.608 13.4063C112.123 13.0208 112.717 12.8281 113.389 12.8281C113.555 12.8281 113.735 12.8385 113.928 12.8594C114.121 12.8802 114.29 12.9089 114.436 12.9453V15.8984C114.279 15.8516 114.063 15.8099 113.787 15.7734C113.511 15.737 113.259 15.7188 113.029 15.7188C112.54 15.7188 112.102 15.8255 111.717 16.0391C111.337 16.2474 111.035 16.5391 110.811 16.9141C110.592 17.2891 110.483 17.7214 110.483 18.2109V25H107.154Z"
				fill="#191C1D"
			/>
			<path
				d="M118.575 25.2266C117.809 25.2266 117.127 25.0938 116.528 24.8281C115.929 24.5573 115.455 24.1589 115.106 23.6328C114.762 23.1016 114.59 22.4401 114.59 21.6484C114.59 20.9818 114.713 20.4219 114.957 19.9688C115.202 19.5156 115.535 19.151 115.957 18.875C116.379 18.599 116.858 18.3906 117.395 18.25C117.937 18.1094 118.504 18.0104 119.098 17.9531C119.796 17.8802 120.358 17.8125 120.785 17.75C121.213 17.6823 121.522 17.5833 121.715 17.4531C121.908 17.3229 122.004 17.1302 122.004 16.875V16.8281C122.004 16.3333 121.848 15.9505 121.535 15.6797C121.228 15.4089 120.791 15.2734 120.223 15.2734C119.624 15.2734 119.147 15.4063 118.793 15.6719C118.439 15.9323 118.205 16.2604 118.09 16.6563L115.012 16.4063C115.168 15.6771 115.476 15.0469 115.934 14.5156C116.392 13.9792 116.983 13.5677 117.707 13.2812C118.437 12.9896 119.28 12.8438 120.239 12.8438C120.905 12.8438 121.543 12.9219 122.153 13.0781C122.767 13.2344 123.312 13.4766 123.785 13.8047C124.265 14.1328 124.642 14.5547 124.918 15.0703C125.194 15.5807 125.332 16.1927 125.332 16.9063V25H122.176V23.3359H122.082C121.89 23.7109 121.632 24.0417 121.309 24.3281C120.986 24.6094 120.598 24.8307 120.145 24.9922C119.692 25.1484 119.168 25.2266 118.575 25.2266ZM119.528 22.9297C120.017 22.9297 120.45 22.8333 120.825 22.6406C121.2 22.4427 121.494 22.1771 121.707 21.8438C121.921 21.5104 122.028 21.1328 122.028 20.7109V19.4375C121.923 19.5052 121.78 19.5677 121.598 19.625C121.421 19.6771 121.22 19.7266 120.996 19.7734C120.772 19.8151 120.548 19.8542 120.325 19.8906C120.101 19.9219 119.897 19.9505 119.715 19.9766C119.325 20.0339 118.983 20.125 118.692 20.25C118.4 20.375 118.173 20.5443 118.012 20.7578C117.851 20.9661 117.77 21.2266 117.77 21.5391C117.77 21.9922 117.934 22.3385 118.262 22.5781C118.595 22.8125 119.017 22.9297 119.528 22.9297Z"
				fill="#191C1D"
			/>
			<path
				d="M127.254 25V13H130.426V15.1172H130.567C130.817 14.4141 131.234 13.8594 131.817 13.4531C132.4 13.0469 133.098 12.8438 133.911 12.8438C134.734 12.8438 135.434 13.0495 136.012 13.4609C136.59 13.8672 136.976 14.4193 137.168 15.1172H137.293C137.538 14.4297 137.981 13.8802 138.622 13.4688C139.267 13.0521 140.03 12.8438 140.911 12.8438C142.03 12.8438 142.939 13.2005 143.637 13.9141C144.34 14.6224 144.692 15.6276 144.692 16.9297V25H141.372V17.5859C141.372 16.9193 141.194 16.4193 140.84 16.0859C140.486 15.7526 140.043 15.5859 139.512 15.5859C138.908 15.5859 138.437 15.7786 138.098 16.1641C137.76 16.5443 137.59 17.0469 137.59 17.6719V25H134.364V17.5156C134.364 16.9271 134.194 16.4583 133.856 16.1094C133.523 15.7604 133.083 15.5859 132.536 15.5859C132.166 15.5859 131.833 15.6797 131.536 15.8672C131.244 16.0495 131.012 16.3073 130.84 16.6406C130.668 16.9688 130.583 17.3542 130.583 17.7969V25H127.254Z"
				fill="#191C1D"
			/>
			<path
				d="M152.13 25.2344C150.895 25.2344 149.833 24.9844 148.942 24.4844C148.057 23.9792 147.374 23.2656 146.895 22.3438C146.416 21.4167 146.176 20.3203 146.176 19.0547C146.176 17.8203 146.416 16.737 146.895 15.8047C147.374 14.8724 148.049 14.1458 148.919 13.625C149.794 13.1042 150.82 12.8438 151.997 12.8438C152.788 12.8438 153.525 12.9714 154.208 13.2266C154.895 13.4766 155.494 13.8542 156.005 14.3594C156.52 14.8646 156.921 15.5 157.208 16.2656C157.494 17.026 157.637 17.9167 157.637 18.9375V19.8516H147.505V17.7891H154.505C154.505 17.3099 154.4 16.8854 154.192 16.5156C153.984 16.1458 153.695 15.8568 153.325 15.6484C152.96 15.4349 152.536 15.3281 152.051 15.3281C151.546 15.3281 151.098 15.4453 150.708 15.6797C150.322 15.9089 150.02 16.2188 149.801 16.6094C149.583 16.9948 149.471 17.4245 149.465 17.8984V19.8594C149.465 20.4531 149.575 20.9661 149.794 21.3984C150.018 21.8307 150.333 22.1641 150.739 22.3984C151.145 22.6328 151.627 22.75 152.184 22.75C152.554 22.75 152.893 22.6979 153.2 22.5938C153.507 22.4896 153.77 22.3333 153.989 22.125C154.208 21.9167 154.374 21.6615 154.489 21.3594L157.567 21.5625C157.411 22.3021 157.09 22.9479 156.606 23.5C156.127 24.0469 155.507 24.474 154.747 24.7812C153.992 25.0833 153.119 25.2344 152.13 25.2344Z"
				fill="#191C1D"
			/>
			<path
				d="M161.43 25L158.165 13H161.532L163.391 21.0625H163.501L165.438 13H168.743L170.712 21.0156H170.813L172.641 13H176.001L172.743 25H169.22L167.157 17.4531H167.009L164.946 25H161.43Z"
				fill="#191C1D"
			/>
			<path
				d="M182.237 25.2344C181.024 25.2344 179.974 24.9766 179.089 24.4609C178.209 23.9401 177.529 23.2161 177.05 22.2891C176.571 21.3568 176.331 20.276 176.331 19.0469C176.331 17.8073 176.571 16.724 177.05 15.7969C177.529 14.8646 178.209 14.1406 179.089 13.625C179.974 13.1042 181.024 12.8438 182.237 12.8438C183.451 12.8438 184.498 13.1042 185.378 13.625C186.263 14.1406 186.946 14.8646 187.425 15.7969C187.904 16.724 188.144 17.8073 188.144 19.0469C188.144 20.276 187.904 21.3568 187.425 22.2891C186.946 23.2161 186.263 23.9401 185.378 24.4609C184.498 24.9766 183.451 25.2344 182.237 25.2344ZM182.253 22.6563C182.805 22.6563 183.266 22.5 183.636 22.1875C184.005 21.8698 184.284 21.4375 184.472 20.8906C184.664 20.3438 184.761 19.7214 184.761 19.0234C184.761 18.3255 184.664 17.7031 184.472 17.1563C184.284 16.6094 184.005 16.1771 183.636 15.8594C183.266 15.5417 182.805 15.3828 182.253 15.3828C181.696 15.3828 181.227 15.5417 180.847 15.8594C180.472 16.1771 180.188 16.6094 179.995 17.1563C179.808 17.7031 179.714 18.3255 179.714 19.0234C179.714 19.7214 179.808 20.3438 179.995 20.8906C180.188 21.4375 180.472 21.8698 180.847 22.1875C181.227 22.5 181.696 22.6563 182.253 22.6563Z"
				fill="#191C1D"
			/>
			<path
				d="M189.648 25V13H192.874V15.0938H192.999C193.218 14.349 193.585 13.7865 194.101 13.4063C194.616 13.0208 195.21 12.8281 195.882 12.8281C196.049 12.8281 196.228 12.8385 196.421 12.8594C196.614 12.8802 196.783 12.9089 196.929 12.9453V15.8984C196.773 15.8516 196.556 15.8099 196.28 15.7734C196.004 15.737 195.752 15.7188 195.523 15.7188C195.033 15.7188 194.595 15.8255 194.21 16.0391C193.83 16.2474 193.528 16.5391 193.304 16.9141C193.085 17.2891 192.976 17.7214 192.976 18.2109V25H189.648Z"
				fill="#191C1D"
			/>
			<path
				d="M201.005 21.5469L201.013 17.5547H201.497L205.341 13H209.161L203.997 19.0313H203.208L201.005 21.5469ZM197.99 25V9H201.318V25H197.99ZM205.49 25L201.958 19.7734L204.177 17.4219L209.388 25H205.49Z"
				fill="#191C1D"
			/>
			<path
				d="M212.08 25.2031C211.564 25.2031 211.121 25.0208 210.751 24.6562C210.387 24.2865 210.205 23.8438 210.205 23.3281C210.205 22.8177 210.387 22.3802 210.751 22.0156C211.121 21.651 211.564 21.4688 212.08 21.4688C212.58 21.4688 213.017 21.651 213.392 22.0156C213.767 22.3802 213.955 22.8177 213.955 23.3281C213.955 23.6719 213.866 23.987 213.689 24.2734C213.517 24.5547 213.29 24.7812 213.009 24.9531C212.728 25.1198 212.418 25.2031 212.08 25.2031Z"
				fill="#191C1D"
			/>
			<path
				d="M220.449 25.1953C219.537 25.1953 218.712 24.9609 217.972 24.4922C217.238 24.0182 216.655 23.3229 216.222 22.4063C215.795 21.4844 215.582 20.3542 215.582 19.0156C215.582 17.6406 215.803 16.4974 216.246 15.5859C216.688 14.6693 217.277 13.9844 218.011 13.5313C218.751 13.0729 219.561 12.8438 220.441 12.8438C221.113 12.8438 221.673 12.9583 222.121 13.1875C222.574 13.4115 222.938 13.6927 223.214 14.0313C223.496 14.3646 223.709 14.6927 223.855 15.0156H223.957V9H227.277V25H223.996V23.0781H223.855C223.699 23.4115 223.477 23.7422 223.191 24.0703C222.91 24.3932 222.543 24.6615 222.089 24.875C221.642 25.0885 221.095 25.1953 220.449 25.1953ZM221.504 22.5469C222.04 22.5469 222.493 22.401 222.863 22.1094C223.238 21.8125 223.524 21.3984 223.722 20.8672C223.925 20.3359 224.027 19.7135 224.027 19C224.027 18.2865 223.928 17.6667 223.73 17.1406C223.532 16.6146 223.246 16.2083 222.871 15.9219C222.496 15.6354 222.04 15.4922 221.504 15.4922C220.957 15.4922 220.496 15.6406 220.121 15.9375C219.746 16.2344 219.462 16.6458 219.269 17.1719C219.076 17.6979 218.98 18.3073 218.98 19C218.98 19.6979 219.076 20.3151 219.269 20.8516C219.467 21.3828 219.751 21.7995 220.121 22.1016C220.496 22.3984 220.957 22.5469 221.504 22.5469Z"
				fill="#191C1D"
			/>
			<path
				d="M234.822 25.2344C233.588 25.2344 232.525 24.9844 231.635 24.4844C230.749 23.9792 230.067 23.2656 229.588 22.3438C229.108 21.4167 228.869 20.3203 228.869 19.0547C228.869 17.8203 229.108 16.737 229.588 15.8047C230.067 14.8724 230.741 14.1458 231.611 13.625C232.486 13.1042 233.512 12.8438 234.689 12.8438C235.481 12.8438 236.218 12.9714 236.9 13.2266C237.588 13.4766 238.187 13.8542 238.697 14.3594C239.213 14.8646 239.614 15.5 239.9 16.2656C240.187 17.026 240.33 17.9167 240.33 18.9375V19.8516H230.197V17.7891H237.197C237.197 17.3099 237.093 16.8854 236.885 16.5156C236.676 16.1458 236.387 15.8568 236.017 15.6484C235.653 15.4349 235.228 15.3281 234.744 15.3281C234.239 15.3281 233.791 15.4453 233.4 15.6797C233.015 15.9089 232.713 16.2188 232.494 16.6094C232.275 16.9948 232.163 17.4245 232.158 17.8984V19.8594C232.158 20.4531 232.267 20.9661 232.486 21.3984C232.71 21.8307 233.025 22.1641 233.431 22.3984C233.838 22.6328 234.319 22.75 234.877 22.75C235.247 22.75 235.585 22.6979 235.892 22.5938C236.2 22.4896 236.463 22.3333 236.681 22.125C236.9 21.9167 237.067 21.6615 237.181 21.3594L240.26 21.5625C240.103 22.3021 239.783 22.9479 239.299 23.5C238.819 24.0469 238.2 24.474 237.439 24.7812C236.684 25.0833 235.812 25.2344 234.822 25.2344Z"
				fill="#191C1D"
			/>
			<path
				d="M252.707 13L248.512 25H244.762L240.566 13H244.082L246.574 21.5859H246.699L249.184 13H252.707Z"
				fill="#191C1D"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_2732_129072"
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
	) : (
		<svg
			width="155"
			height="34"
			viewBox="0 0 155 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="#191C1D"
			/>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="url(#paint0_linear_2725_128162)"
				fillOpacity="0.2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17 33.1053C25.8947 33.1053 33.1053 25.8947 33.1053 17C33.1053 8.10531 25.8947 0.894737 17 0.894737C8.10531 0.894737 0.894737 8.10531 0.894737 17C0.894737 25.8947 8.10531 33.1053 17 33.1053ZM17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
				fill="#757778"
			/>
			<path
				d="M19 25V22.9834C17.578 22.9834 17.29 22.4081 17.29 21.1881V19.3422C17.29 18.3686 16.894 17.4962 15.154 17.1233V16.8704C16.894 16.4974 17.29 15.625 17.29 14.6578V12.8119C17.29 11.5855 17.578 11.0103 19 11.0103V9C16.576 9 14.842 9.42355 14.842 12.5401V13.9372C14.842 15.2331 14.38 15.7831 13 15.7831V18.2106C14.38 18.2106 14.842 18.7606 14.842 20.0565V21.4599C14.842 24.5765 16.576 25 19 25Z"
				fill="white"
			/>
			<path
				d="M48.733 16.2727V11.6023H48.6591C48.5455 11.8447 48.3845 12.0852 48.1761 12.3239C47.9716 12.5587 47.7045 12.7538 47.375 12.9091C47.0492 13.0644 46.6515 13.142 46.1818 13.142C45.5189 13.142 44.9186 12.9716 44.3807 12.6307C43.8466 12.286 43.4223 11.7803 43.108 11.1136C42.7973 10.4432 42.642 9.62121 42.642 8.64773C42.642 7.64773 42.803 6.81629 43.125 6.15341C43.447 5.48674 43.875 4.98864 44.4091 4.65909C44.947 4.32576 45.536 4.15909 46.1761 4.15909C46.6648 4.15909 47.072 4.24242 47.3977 4.40909C47.7273 4.57197 47.9924 4.77652 48.1932 5.02273C48.3977 5.26515 48.553 5.50379 48.6591 5.73864H48.7614V4.27273H51.1477V16.2727H48.733ZM46.9489 11.2159C47.339 11.2159 47.6686 11.1098 47.9375 10.8977C48.2102 10.6818 48.4186 10.3807 48.5625 9.99432C48.7102 9.60795 48.7841 9.1553 48.7841 8.63636C48.7841 8.11742 48.7121 7.66667 48.5682 7.28409C48.4242 6.90151 48.2159 6.60606 47.9432 6.39773C47.6705 6.18939 47.339 6.08523 46.9489 6.08523C46.5511 6.08523 46.2159 6.19318 45.9432 6.40909C45.6705 6.625 45.464 6.92424 45.3239 7.30682C45.1837 7.68939 45.1136 8.13258 45.1136 8.63636C45.1136 9.14394 45.1837 9.5928 45.3239 9.98295C45.4678 10.3693 45.6742 10.6723 45.9432 10.892C46.2159 11.108 46.5511 11.2159 46.9489 11.2159ZM54.3325 13L51.9575 4.27273H54.4064L55.7586 10.1364H55.8382L57.2473 4.27273H59.6507L61.0825 10.1023H61.1564L62.4859 4.27273H64.9291L62.5598 13H59.9973L58.4973 7.51136H58.3893L56.8893 13H54.3325ZM65.7403 13V4.27273H68.1607V13H65.7403ZM66.9562 3.14773C66.5963 3.14773 66.2876 3.02841 66.0301 2.78977C65.7763 2.54735 65.6494 2.25758 65.6494 1.92045C65.6494 1.58712 65.7763 1.30114 66.0301 1.0625C66.2876 0.820075 66.5963 0.698863 66.9562 0.698863C67.316 0.698863 67.6229 0.820075 67.8766 1.0625C68.1342 1.30114 68.263 1.58712 68.263 1.92045C68.263 2.25758 68.1342 2.54735 67.8766 2.78977C67.6229 3.02841 67.316 3.14773 66.9562 3.14773ZM71.8128 10.4886L71.8185 7.58523H72.1708L74.9662 4.27273H77.7447L73.989 8.65909H73.4151L71.8128 10.4886ZM69.6197 13V1.36364H72.0401V13H69.6197ZM75.0742 13L72.506 9.19886L74.1197 7.48864L77.9094 13H75.0742ZM79.8669 13.1477C79.4919 13.1477 79.17 13.0152 78.901 12.75C78.6359 12.4811 78.5033 12.1591 78.5033 11.7841C78.5033 11.4129 78.6359 11.0947 78.901 10.8295C79.17 10.5644 79.4919 10.4318 79.8669 10.4318C80.2306 10.4318 80.5488 10.5644 80.8215 10.8295C81.0942 11.0947 81.2306 11.4129 81.2306 11.7841C81.2306 12.0341 81.1662 12.2633 81.0374 12.4716C80.9124 12.6761 80.7476 12.8409 80.5431 12.9659C80.3385 13.0871 80.1131 13.1477 79.8669 13.1477Z"
				fill="#9052F0"
			/>
			<path
				d="M47.6591 22.2727V24.0909H42.2727V22.2727H47.6591ZM43.5057 31V21.642C43.5057 21.0095 43.6288 20.4848 43.875 20.0682C44.125 19.6515 44.4659 19.339 44.8977 19.1307C45.3295 18.9223 45.8201 18.8182 46.3693 18.8182C46.7405 18.8182 47.0795 18.8466 47.3864 18.9034C47.697 18.9602 47.928 19.0114 48.0795 19.0568L47.6477 20.875C47.553 20.8447 47.4356 20.8163 47.2955 20.7898C47.1591 20.7633 47.0189 20.75 46.875 20.75C46.5189 20.75 46.2708 20.8333 46.1307 21C45.9905 21.1629 45.9205 21.392 45.9205 21.6875V31H43.5057ZM48.6578 31V22.2727H51.0044V23.7955H51.0953C51.2544 23.2538 51.5214 22.8447 51.8964 22.5682C52.2714 22.2879 52.7032 22.1477 53.1919 22.1477C53.3131 22.1477 53.4438 22.1553 53.5839 22.1705C53.7241 22.1856 53.8472 22.2064 53.9532 22.233V24.3807C53.8396 24.3466 53.6824 24.3163 53.4816 24.2898C53.2809 24.2633 53.0972 24.25 52.9305 24.25C52.5745 24.25 52.2563 24.3277 51.976 24.483C51.6995 24.6345 51.4798 24.8466 51.3169 25.1193C51.1578 25.392 51.0782 25.7064 51.0782 26.0625V31H48.6578ZM56.9633 31.1648C56.4065 31.1648 55.9103 31.0682 55.4747 30.875C55.0391 30.678 54.6944 30.3883 54.4406 30.0057C54.1906 29.6193 54.0656 29.1383 54.0656 28.5625C54.0656 28.0777 54.1546 27.6705 54.3326 27.3409C54.5106 27.0114 54.7531 26.7462 55.0599 26.5455C55.3667 26.3447 55.7152 26.1932 56.1053 26.0909C56.4993 25.9886 56.9122 25.9167 57.344 25.875C57.8516 25.822 58.2606 25.7727 58.5712 25.7273C58.8819 25.678 59.1072 25.6061 59.2474 25.5114C59.3875 25.4167 59.4576 25.2765 59.4576 25.0909V25.0568C59.4576 24.697 59.344 24.4186 59.1167 24.2216C58.8932 24.0246 58.575 23.9261 58.1622 23.9261C57.7266 23.9261 57.38 24.0227 57.1224 24.2159C56.8648 24.4053 56.6944 24.6439 56.611 24.9318L54.3724 24.75C54.486 24.2197 54.7095 23.7614 55.0428 23.375C55.3762 22.9848 55.8061 22.6856 56.3326 22.4773C56.8629 22.2652 57.4766 22.1591 58.1735 22.1591C58.6584 22.1591 59.1224 22.2159 59.5656 22.3295C60.0125 22.4432 60.4084 22.6193 60.7531 22.858C61.1016 23.0966 61.3762 23.4034 61.5769 23.7784C61.7777 24.1496 61.8781 24.5947 61.8781 25.1136V31H59.5826V29.7898H59.5144C59.3743 30.0625 59.1868 30.303 58.9519 30.5114C58.7171 30.7159 58.4349 30.8769 58.1053 30.9943C57.7758 31.108 57.3951 31.1648 56.9633 31.1648ZM57.6565 29.4943C58.0125 29.4943 58.3269 29.4242 58.5997 29.2841C58.8724 29.1402 59.0864 28.947 59.2417 28.7045C59.397 28.4621 59.4747 28.1875 59.4747 27.8807V26.9545C59.3989 27.0038 59.2947 27.0492 59.1622 27.0909C59.0334 27.1288 58.8875 27.1648 58.7247 27.1989C58.5618 27.2292 58.3989 27.2576 58.236 27.2841C58.0731 27.3068 57.9254 27.3277 57.7928 27.3466C57.5088 27.3883 57.2606 27.4545 57.0485 27.5455C56.8364 27.6364 56.6716 27.7595 56.5542 27.9148C56.4368 28.0663 56.3781 28.2557 56.3781 28.483C56.3781 28.8125 56.4974 29.0644 56.736 29.2386C56.9784 29.4091 57.2853 29.4943 57.6565 29.4943ZM63.2759 31V22.2727H65.5827V23.8125H65.685C65.8668 23.3011 66.1698 22.8977 66.5941 22.6023C67.0183 22.3068 67.5259 22.1591 68.1168 22.1591C68.7153 22.1591 69.2248 22.3087 69.6452 22.608C70.0657 22.9034 70.346 23.3049 70.4861 23.8125H70.577C70.7551 23.3125 71.077 22.9129 71.543 22.6136C72.0127 22.3106 72.5676 22.1591 73.2077 22.1591C74.0221 22.1591 74.6831 22.4186 75.1907 22.9375C75.702 23.4527 75.9577 24.1837 75.9577 25.1307V31H73.543V25.608C73.543 25.1231 73.4142 24.7595 73.1566 24.517C72.899 24.2746 72.577 24.1534 72.1907 24.1534C71.7513 24.1534 71.4085 24.2936 71.1623 24.5739C70.9161 24.8504 70.793 25.2159 70.793 25.6705V31H68.4464V25.5568C68.4464 25.1288 68.3233 24.7879 68.077 24.5341C67.8346 24.2803 67.5145 24.1534 67.1168 24.1534C66.8479 24.1534 66.6055 24.2216 66.3895 24.358C66.1774 24.4905 66.0089 24.678 65.8839 24.9205C65.7589 25.1591 65.6964 25.4394 65.6964 25.7614V31H63.2759ZM81.3669 31.1705C80.4692 31.1705 79.6965 30.9886 79.0488 30.625C78.4048 30.2576 77.9086 29.7386 77.5601 29.0682C77.2116 28.3939 77.0374 27.5966 77.0374 26.6761C77.0374 25.7784 77.2116 24.9905 77.5601 24.3125C77.9086 23.6345 78.3991 23.1061 79.0317 22.7273C79.6681 22.3485 80.4143 22.1591 81.2703 22.1591C81.8461 22.1591 82.3821 22.2519 82.8783 22.4375C83.3783 22.6193 83.8139 22.8939 84.1851 23.2614C84.5601 23.6288 84.8518 24.0909 85.0601 24.6477C85.2684 25.2008 85.3726 25.8485 85.3726 26.5909V27.2557H78.0033V25.7557H83.0942C83.0942 25.4072 83.0184 25.0985 82.8669 24.8295C82.7154 24.5606 82.5052 24.3504 82.2363 24.1989C81.9711 24.0436 81.6624 23.9659 81.3101 23.9659C80.9427 23.9659 80.6169 24.0511 80.3328 24.2216C80.0525 24.3883 79.8328 24.6136 79.6738 24.8977C79.5147 25.178 79.4332 25.4905 79.4294 25.8352V27.2614C79.4294 27.6932 79.509 28.0663 79.6681 28.3807C79.8309 28.6951 80.0601 28.9375 80.3556 29.108C80.651 29.2784 81.0014 29.3636 81.4067 29.3636C81.6756 29.3636 81.9219 29.3258 82.1453 29.25C82.3688 29.1742 82.5601 29.0606 82.7192 28.9091C82.8783 28.7576 82.9995 28.572 83.0828 28.3523L85.3215 28.5C85.2078 29.0379 84.9749 29.5076 84.6226 29.9091C84.2741 30.3068 83.8234 30.6174 83.2703 30.8409C82.7211 31.0606 82.0866 31.1705 81.3669 31.1705ZM88.1312 31L85.7562 22.2727H88.2051L89.5574 28.1364H89.6369L91.046 22.2727H93.4494L94.8812 28.1023H94.9551L96.2847 22.2727H98.7278L96.3585 31H93.796L92.296 25.5114H92.1881L90.6881 31H88.1312ZM103.263 31.1705C102.381 31.1705 101.618 30.983 100.974 30.608C100.334 30.2292 99.8392 29.7027 99.4907 29.0284C99.1423 28.3504 98.968 27.5644 98.968 26.6705C98.968 25.7689 99.1423 24.9811 99.4907 24.3068C99.8392 23.6288 100.334 23.1023 100.974 22.7273C101.618 22.3485 102.381 22.1591 103.263 22.1591C104.146 22.1591 104.907 22.3485 105.548 22.7273C106.191 23.1023 106.688 23.6288 107.036 24.3068C107.385 24.9811 107.559 25.7689 107.559 26.6705C107.559 27.5644 107.385 28.3504 107.036 29.0284C106.688 29.7027 106.191 30.2292 105.548 30.608C104.907 30.983 104.146 31.1705 103.263 31.1705ZM103.275 29.2955C103.676 29.2955 104.012 29.1818 104.281 28.9545C104.549 28.7235 104.752 28.4091 104.888 28.0114C105.029 27.6136 105.099 27.161 105.099 26.6534C105.099 26.1458 105.029 25.6932 104.888 25.2955C104.752 24.8977 104.549 24.5833 104.281 24.3523C104.012 24.1212 103.676 24.0057 103.275 24.0057C102.87 24.0057 102.529 24.1212 102.252 24.3523C101.979 24.5833 101.773 24.8977 101.633 25.2955C101.496 25.6932 101.428 26.1458 101.428 26.6534C101.428 27.161 101.496 27.6136 101.633 28.0114C101.773 28.4091 101.979 28.7235 102.252 28.9545C102.529 29.1818 102.87 29.2955 103.275 29.2955ZM108.653 31V22.2727H110.999V23.7955H111.09C111.249 23.2538 111.516 22.8447 111.891 22.5682C112.266 22.2879 112.698 22.1477 113.187 22.1477C113.308 22.1477 113.439 22.1553 113.579 22.1705C113.719 22.1856 113.842 22.2064 113.948 22.233V24.3807C113.835 24.3466 113.677 24.3163 113.477 24.2898C113.276 24.2633 113.092 24.25 112.926 24.25C112.569 24.25 112.251 24.3277 111.971 24.483C111.694 24.6345 111.475 24.8466 111.312 25.1193C111.153 25.392 111.073 25.7064 111.073 26.0625V31H108.653ZM116.913 28.4886L116.919 25.5852H117.271L120.066 22.2727H122.845L119.089 26.6591H118.515L116.913 28.4886ZM114.72 31V19.3636H117.14V31H114.72ZM120.174 31L117.606 27.1989L119.22 25.4886L123.009 31H120.174ZM124.967 31.1477C124.592 31.1477 124.27 31.0152 124.001 30.75C123.736 30.4811 123.603 30.1591 123.603 29.7841C123.603 29.4129 123.736 29.0947 124.001 28.8295C124.27 28.5644 124.592 28.4318 124.967 28.4318C125.331 28.4318 125.649 28.5644 125.921 28.8295C126.194 29.0947 126.331 29.4129 126.331 29.7841C126.331 30.0341 126.266 30.2633 126.137 30.4716C126.012 30.6761 125.848 30.8409 125.643 30.9659C125.439 31.0871 125.213 31.1477 124.967 31.1477ZM131.054 31.142C130.391 31.142 129.79 30.9716 129.253 30.6307C128.718 30.286 128.294 29.7803 127.98 29.1136C127.669 28.4432 127.514 27.6212 127.514 26.6477C127.514 25.6477 127.675 24.8163 127.997 24.1534C128.319 23.4867 128.747 22.9886 129.281 22.6591C129.819 22.3258 130.408 22.1591 131.048 22.1591C131.537 22.1591 131.944 22.2424 132.27 22.4091C132.599 22.572 132.864 22.7765 133.065 23.0227C133.27 23.2652 133.425 23.5038 133.531 23.7386H133.605V19.3636H136.02V31H133.633V29.6023H133.531C133.417 29.8447 133.256 30.0852 133.048 30.3239C132.843 30.5587 132.576 30.7538 132.247 30.9091C131.921 31.0644 131.523 31.142 131.054 31.142ZM131.821 29.2159C132.211 29.2159 132.54 29.1098 132.809 28.8977C133.082 28.6818 133.29 28.3807 133.434 27.9943C133.582 27.608 133.656 27.1553 133.656 26.6364C133.656 26.1174 133.584 25.6667 133.44 25.2841C133.296 24.9015 133.088 24.6061 132.815 24.3977C132.542 24.1894 132.211 24.0852 131.821 24.0852C131.423 24.0852 131.088 24.1932 130.815 24.4091C130.542 24.625 130.336 24.9242 130.196 25.3068C130.056 25.6894 129.986 26.1326 129.986 26.6364C129.986 27.1439 130.056 27.5928 130.196 27.983C130.34 28.3693 130.546 28.6723 130.815 28.892C131.088 29.108 131.423 29.2159 131.821 29.2159ZM141.507 31.1705C140.609 31.1705 139.836 30.9886 139.189 30.625C138.545 30.2576 138.049 29.7386 137.7 29.0682C137.352 28.3939 137.177 27.5966 137.177 26.6761C137.177 25.7784 137.352 24.9905 137.7 24.3125C138.049 23.6345 138.539 23.1061 139.172 22.7273C139.808 22.3485 140.554 22.1591 141.41 22.1591C141.986 22.1591 142.522 22.2519 143.018 22.4375C143.518 22.6193 143.954 22.8939 144.325 23.2614C144.7 23.6288 144.992 24.0909 145.2 24.6477C145.408 25.2008 145.513 25.8485 145.513 26.5909V27.2557H138.143V25.7557H143.234C143.234 25.4072 143.158 25.0985 143.007 24.8295C142.855 24.5606 142.645 24.3504 142.376 24.1989C142.111 24.0436 141.802 23.9659 141.45 23.9659C141.083 23.9659 140.757 24.0511 140.473 24.2216C140.193 24.3883 139.973 24.6136 139.814 24.8977C139.655 25.178 139.573 25.4905 139.569 25.8352V27.2614C139.569 27.6932 139.649 28.0663 139.808 28.3807C139.971 28.6951 140.2 28.9375 140.496 29.108C140.791 29.2784 141.141 29.3636 141.547 29.3636C141.816 29.3636 142.062 29.3258 142.285 29.25C142.509 29.1742 142.7 29.0606 142.859 28.9091C143.018 28.7576 143.14 28.572 143.223 28.3523L145.461 28.5C145.348 29.0379 145.115 29.5076 144.763 29.9091C144.414 30.3068 143.963 30.6174 143.41 30.8409C142.861 31.0606 142.227 31.1705 141.507 31.1705ZM154.514 22.2727L151.463 31H148.736L145.685 22.2727H148.241L150.054 28.517H150.145L151.952 22.2727H154.514Z"
				fill="#191C1D"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_2725_128162"
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
})
