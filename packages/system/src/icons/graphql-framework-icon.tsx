import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { type FrameworkIconProps } from './shared-icon-types'

export const GraphQLFrameworkIcon = React.forwardRef<
	SVGSVGElement,
	FrameworkIconProps
>(function GraphQLFrameworkIcon({ className, size, stretched, ...props }, ref) {
	return stretched ? (
		<svg
			className={classNames(className, iconStyle({ size }))}
			width="283"
			height="34"
			viewBox="0 0 283 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<path
				d="M48.7344 29.75C47.6563 29.75 46.7318 29.6016 45.9609 29.3047C45.1953 29.013 44.5859 28.6146 44.1328 28.1094C43.6797 27.6042 43.3854 27.0365 43.25 26.4062L46.3281 25.9922C46.4219 26.2318 46.5703 26.4557 46.7734 26.6641C46.9766 26.8724 47.2448 27.0391 47.5781 27.1641C47.9167 27.2943 48.3281 27.3594 48.8125 27.3594C49.5365 27.3594 50.1328 27.1823 50.6016 26.8281C51.0755 26.4792 51.3125 25.8932 51.3125 25.0703V22.875H51.1719C51.026 23.2083 50.8073 23.5234 50.5156 23.8203C50.224 24.1172 49.849 24.3594 49.3906 24.5469C48.9323 24.7344 48.3854 24.8281 47.75 24.8281C46.849 24.8281 46.0286 24.6198 45.2891 24.2031C44.5547 23.7812 43.9688 23.138 43.5312 22.2734C43.099 21.4036 42.8828 20.3047 42.8828 18.9766C42.8828 17.6172 43.1042 16.4818 43.5469 15.5703C43.9896 14.6589 44.5781 13.9766 45.3125 13.5234C46.0521 13.0703 46.862 12.8438 47.7422 12.8438C48.4141 12.8438 48.9766 12.9583 49.4297 13.1875C49.8828 13.4115 50.2474 13.6927 50.5234 14.0313C50.8047 14.3646 51.0208 14.6927 51.1719 15.0156H51.2969V13H54.6016V25.1172C54.6016 26.138 54.3516 26.9922 53.8516 27.6797C53.3516 28.3672 52.6589 28.8828 51.7734 29.2266C50.8932 29.5755 49.8802 29.75 48.7344 29.75ZM48.8047 22.3281C49.3411 22.3281 49.7943 22.1953 50.1641 21.9297C50.5391 21.6589 50.8255 21.2734 51.0234 20.7734C51.2266 20.2682 51.3281 19.6641 51.3281 18.9609C51.3281 18.2578 51.2292 17.6484 51.0312 17.1328C50.8333 16.612 50.5469 16.2083 50.1719 15.9219C49.7969 15.6354 49.3411 15.4922 48.8047 15.4922C48.2578 15.4922 47.7969 15.6406 47.4219 15.9375C47.0469 16.2292 46.763 16.6354 46.5703 17.1562C46.3776 17.6771 46.2812 18.2786 46.2812 18.9609C46.2812 19.6536 46.3776 20.2526 46.5703 20.7578C46.7682 21.2578 47.0521 21.6458 47.4219 21.9219C47.7969 22.1927 48.2578 22.3281 48.8047 22.3281Z"
				fill="#E10098"
			/>
			<path
				d="M56.59 25V13H59.8166V15.0938H59.9416C60.1603 14.349 60.5275 13.7865 61.0431 13.4063C61.5588 13.0208 62.1525 12.8281 62.8244 12.8281C62.991 12.8281 63.1707 12.8385 63.3634 12.8594C63.5561 12.8802 63.7254 12.9089 63.8713 12.9453V15.8984C63.715 15.8516 63.4989 15.8099 63.2228 15.7734C62.9468 15.737 62.6942 15.7188 62.465 15.7188C61.9754 15.7188 61.5379 15.8255 61.1525 16.0391C60.7723 16.2474 60.4702 16.5391 60.2463 16.9141C60.0275 17.2891 59.9181 17.7214 59.9181 18.2109V25H56.59Z"
				fill="#E10098"
			/>
			<path
				d="M68.0101 25.2266C67.2445 25.2266 66.5622 25.0938 65.9632 24.8281C65.3642 24.5573 64.8903 24.1589 64.5413 23.6328C64.1976 23.1016 64.0257 22.4401 64.0257 21.6484C64.0257 20.9818 64.1481 20.4219 64.3929 19.9688C64.6377 19.5156 64.971 19.151 65.3929 18.875C65.8148 18.599 66.2939 18.3906 66.8304 18.25C67.3721 18.1094 67.9398 18.0104 68.5335 17.9531C69.2314 17.8802 69.7939 17.8125 70.221 17.75C70.6481 17.6823 70.958 17.5833 71.1507 17.4531C71.3434 17.3229 71.4398 17.1302 71.4398 16.875V16.8281C71.4398 16.3333 71.2835 15.9505 70.971 15.6797C70.6637 15.4089 70.2262 15.2734 69.6585 15.2734C69.0596 15.2734 68.583 15.4062 68.2288 15.6719C67.8747 15.9323 67.6403 16.2604 67.5257 16.6563L64.4476 16.4063C64.6038 15.6771 64.9111 15.0469 65.3695 14.5156C65.8278 13.9792 66.4189 13.5677 67.1429 13.2812C67.8721 12.9896 68.7158 12.8438 69.6741 12.8438C70.3408 12.8438 70.9788 12.9219 71.5882 13.0781C72.2028 13.2344 72.7471 13.4766 73.221 13.8047C73.7002 14.1328 74.0778 14.5547 74.3538 15.0703C74.6299 15.5807 74.7679 16.1927 74.7679 16.9063V25H71.6116V23.3359H71.5179C71.3252 23.7109 71.0674 24.0417 70.7445 24.3281C70.4215 24.6094 70.0335 24.8307 69.5804 24.9922C69.1273 25.1484 68.6038 25.2266 68.0101 25.2266ZM68.9632 22.9297C69.4528 22.9297 69.8851 22.8333 70.2601 22.6406C70.6351 22.4427 70.9293 22.1771 71.1429 21.8438C71.3564 21.5104 71.4632 21.1328 71.4632 20.7109V19.4375C71.359 19.5052 71.2158 19.5677 71.0335 19.625C70.8564 19.6771 70.6559 19.7266 70.432 19.7734C70.208 19.8151 69.984 19.8542 69.7601 19.8906C69.5361 19.9219 69.333 19.9505 69.1507 19.9766C68.7601 20.0339 68.4189 20.125 68.1273 20.25C67.8356 20.375 67.609 20.5443 67.4476 20.7578C67.2861 20.9661 67.2054 21.2266 67.2054 21.5391C67.2054 21.9922 67.3695 22.3385 67.6976 22.5781C68.0309 22.8125 68.4528 22.9297 68.9632 22.9297Z"
				fill="#E10098"
			/>
			<path
				d="M76.6899 29.5V13H79.9712V15.0156H80.1196C80.2654 14.6927 80.4764 14.3646 80.7524 14.0313C81.0337 13.6927 81.3983 13.4115 81.8462 13.1875C82.2993 12.9583 82.8618 12.8438 83.5337 12.8438C84.4087 12.8438 85.216 13.0729 85.9555 13.5313C86.6951 13.9844 87.2863 14.6693 87.729 15.5859C88.1717 16.4974 88.393 17.6406 88.393 19.0156C88.393 20.3542 88.1769 21.4844 87.7446 22.4062C87.3175 23.3229 86.7342 24.0182 85.9946 24.4922C85.2602 24.9609 84.4373 25.1953 83.5259 25.1953C82.88 25.1953 82.3305 25.0885 81.8774 24.875C81.4295 24.6615 81.0623 24.3932 80.7759 24.0703C80.4894 23.7422 80.2707 23.4115 80.1196 23.0781H80.018V29.5H76.6899ZM79.9477 19C79.9477 19.7135 80.0467 20.3359 80.2446 20.8672C80.4425 21.3984 80.729 21.8125 81.104 22.1094C81.479 22.401 81.9347 22.5469 82.4712 22.5469C83.0128 22.5469 83.4712 22.3984 83.8462 22.1016C84.2212 21.7995 84.505 21.3828 84.6977 20.8516C84.8957 20.3151 84.9946 19.6979 84.9946 19C84.9946 18.3073 84.8983 17.6979 84.7055 17.1719C84.5128 16.6458 84.229 16.2344 83.854 15.9375C83.479 15.6406 83.018 15.4922 82.4712 15.4922C81.9295 15.4922 81.4712 15.6354 81.0962 15.9219C80.7264 16.2083 80.4425 16.6146 80.2446 17.1406C80.0467 17.6667 79.9477 18.2865 79.9477 19Z"
				fill="#E10098"
			/>
			<path
				d="M93.2799 18.0625V25H89.9518V9H93.1862V15.1172H93.3268C93.5976 14.4089 94.0351 13.8542 94.6393 13.4531C95.2435 13.0469 96.0013 12.8438 96.9127 12.8438C97.7461 12.8438 98.4726 13.026 99.0924 13.3906C99.7174 13.75 100.202 14.2682 100.546 14.9453C100.895 15.6172 101.066 16.4219 101.061 17.3594V25H97.733V17.9531C97.7383 17.2135 97.5508 16.638 97.1705 16.2266C96.7955 15.8151 96.2695 15.6094 95.5924 15.6094C95.1393 15.6094 94.7383 15.7057 94.3893 15.8984C94.0455 16.0911 93.7747 16.3724 93.5768 16.7422C93.3841 17.1068 93.2851 17.5469 93.2799 18.0625Z"
				fill="#E10098"
			/>
			<path
				d="M110.95 29.5V23.0781H110.848C110.692 23.4115 110.471 23.7422 110.184 24.0703C109.903 24.3932 109.536 24.6615 109.083 24.875C108.635 25.0885 108.088 25.1953 107.442 25.1953C106.531 25.1953 105.705 24.9609 104.966 24.4922C104.231 24.0182 103.648 23.3229 103.216 22.4062C102.789 21.4844 102.575 20.3542 102.575 19.0156C102.575 17.6406 102.796 16.4974 103.239 15.5859C103.682 14.6693 104.27 13.9844 105.005 13.5313C105.744 13.0729 106.554 12.8438 107.434 12.8438C108.106 12.8438 108.666 12.9583 109.114 13.1875C109.567 13.4115 109.932 13.6927 110.208 14.0313C110.489 14.3646 110.703 14.6927 110.848 15.0156H110.989V13H114.27V29.5H110.95ZM108.497 22.5469C109.033 22.5469 109.486 22.401 109.856 22.1094C110.231 21.8125 110.518 21.3984 110.716 20.8672C110.919 20.3359 111.02 19.7135 111.02 19C111.02 18.2865 110.921 17.6667 110.723 17.1406C110.526 16.6146 110.239 16.2083 109.864 15.9219C109.489 15.6354 109.033 15.4922 108.497 15.4922C107.95 15.4922 107.489 15.6406 107.114 15.9375C106.739 16.2344 106.455 16.6458 106.263 17.1719C106.07 17.6979 105.973 18.3073 105.973 19C105.973 19.6979 106.07 20.3151 106.263 20.8516C106.46 21.3828 106.744 21.7995 107.114 22.1016C107.489 22.3984 107.95 22.5469 108.497 22.5469Z"
				fill="#E10098"
			/>
			<path d="M119.61 9V25H116.282V9H119.61Z" fill="#E10098" />
			<path
				d="M123.562 25.2031C123.046 25.2031 122.603 25.0208 122.234 24.6562C121.869 24.2865 121.687 23.8438 121.687 23.3281C121.687 22.8177 121.869 22.3802 122.234 22.0156C122.603 21.651 123.046 21.4688 123.562 21.4688C124.062 21.4688 124.499 21.651 124.874 22.0156C125.249 22.3802 125.437 22.8177 125.437 23.3281C125.437 23.6719 125.348 23.987 125.171 24.2734C124.999 24.5547 124.773 24.7812 124.491 24.9531C124.21 25.1198 123.9 25.2031 123.562 25.2031Z"
				fill="#E10098"
			/>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="#191C1D"
			/>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="url(#paint0_linear_2732_129065)"
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
				d="M134.781 13V15.5H127.375V13H134.781ZM129.07 25V12.1328C129.07 11.263 129.24 10.5417 129.578 9.96875C129.922 9.39583 130.391 8.96615 130.984 8.67969C131.578 8.39323 132.253 8.25 133.008 8.25C133.518 8.25 133.984 8.28906 134.406 8.36719C134.833 8.44531 135.151 8.51563 135.359 8.57813L134.766 11.0781C134.635 11.0365 134.474 10.9974 134.281 10.9609C134.094 10.9245 133.901 10.9063 133.703 10.9063C133.214 10.9063 132.872 11.0208 132.68 11.25C132.487 11.474 132.391 11.7891 132.391 12.1953V25H129.07Z"
				fill="#191C1D"
			/>
			<path
				d="M136.154 25V13H139.381V15.0938H139.506C139.725 14.349 140.092 13.7865 140.608 13.4063C141.123 13.0208 141.717 12.8281 142.389 12.8281C142.555 12.8281 142.735 12.8385 142.928 12.8594C143.121 12.8802 143.29 12.9089 143.436 12.9453V15.8984C143.279 15.8516 143.063 15.8099 142.787 15.7734C142.511 15.737 142.259 15.7188 142.029 15.7188C141.54 15.7188 141.102 15.8255 140.717 16.0391C140.337 16.2474 140.035 16.5391 139.811 16.9141C139.592 17.2891 139.483 17.7214 139.483 18.2109V25H136.154Z"
				fill="#191C1D"
			/>
			<path
				d="M147.575 25.2266C146.809 25.2266 146.127 25.0938 145.528 24.8281C144.929 24.5573 144.455 24.1589 144.106 23.6328C143.762 23.1016 143.59 22.4401 143.59 21.6484C143.59 20.9818 143.713 20.4219 143.957 19.9688C144.202 19.5156 144.535 19.151 144.957 18.875C145.379 18.599 145.858 18.3906 146.395 18.25C146.937 18.1094 147.504 18.0104 148.098 17.9531C148.796 17.8802 149.358 17.8125 149.785 17.75C150.213 17.6823 150.522 17.5833 150.715 17.4531C150.908 17.3229 151.004 17.1302 151.004 16.875V16.8281C151.004 16.3333 150.848 15.9505 150.535 15.6797C150.228 15.4089 149.791 15.2734 149.223 15.2734C148.624 15.2734 148.147 15.4063 147.793 15.6719C147.439 15.9323 147.205 16.2604 147.09 16.6563L144.012 16.4063C144.168 15.6771 144.476 15.0469 144.934 14.5156C145.392 13.9792 145.983 13.5677 146.707 13.2812C147.437 12.9896 148.28 12.8438 149.239 12.8438C149.905 12.8438 150.543 12.9219 151.153 13.0781C151.767 13.2344 152.312 13.4766 152.785 13.8047C153.265 14.1328 153.642 14.5547 153.918 15.0703C154.194 15.5807 154.332 16.1927 154.332 16.9063V25H151.176V23.3359H151.082C150.89 23.7109 150.632 24.0417 150.309 24.3281C149.986 24.6094 149.598 24.8307 149.145 24.9922C148.692 25.1484 148.168 25.2266 147.575 25.2266ZM148.528 22.9297C149.017 22.9297 149.45 22.8333 149.825 22.6406C150.2 22.4427 150.494 22.1771 150.707 21.8438C150.921 21.5104 151.028 21.1328 151.028 20.7109V19.4375C150.923 19.5052 150.78 19.5677 150.598 19.625C150.421 19.6771 150.22 19.7266 149.996 19.7734C149.772 19.8151 149.548 19.8542 149.325 19.8906C149.101 19.9219 148.897 19.9505 148.715 19.9766C148.325 20.0339 147.983 20.125 147.692 20.25C147.4 20.375 147.173 20.5443 147.012 20.7578C146.851 20.9661 146.77 21.2266 146.77 21.5391C146.77 21.9922 146.934 22.3385 147.262 22.5781C147.595 22.8125 148.017 22.9297 148.528 22.9297Z"
				fill="#191C1D"
			/>
			<path
				d="M156.254 25V13H159.426V15.1172H159.567C159.817 14.4141 160.234 13.8594 160.817 13.4531C161.4 13.0469 162.098 12.8438 162.911 12.8438C163.734 12.8438 164.434 13.0495 165.012 13.4609C165.59 13.8672 165.976 14.4193 166.168 15.1172H166.293C166.538 14.4297 166.981 13.8802 167.622 13.4688C168.267 13.0521 169.03 12.8438 169.911 12.8438C171.03 12.8438 171.939 13.2005 172.637 13.9141C173.34 14.6224 173.692 15.6276 173.692 16.9297V25H170.372V17.5859C170.372 16.9193 170.194 16.4193 169.84 16.0859C169.486 15.7526 169.043 15.5859 168.512 15.5859C167.908 15.5859 167.437 15.7786 167.098 16.1641C166.76 16.5443 166.59 17.0469 166.59 17.6719V25H163.364V17.5156C163.364 16.9271 163.194 16.4583 162.856 16.1094C162.523 15.7604 162.083 15.5859 161.536 15.5859C161.166 15.5859 160.833 15.6797 160.536 15.8672C160.244 16.0495 160.012 16.3073 159.84 16.6406C159.668 16.9688 159.583 17.3542 159.583 17.7969V25H156.254Z"
				fill="#191C1D"
			/>
			<path
				d="M181.13 25.2344C179.895 25.2344 178.833 24.9844 177.942 24.4844C177.057 23.9792 176.374 23.2656 175.895 22.3438C175.416 21.4167 175.176 20.3203 175.176 19.0547C175.176 17.8203 175.416 16.737 175.895 15.8047C176.374 14.8724 177.049 14.1458 177.919 13.625C178.794 13.1042 179.82 12.8438 180.997 12.8438C181.788 12.8438 182.525 12.9714 183.208 13.2266C183.895 13.4766 184.494 13.8542 185.005 14.3594C185.52 14.8646 185.921 15.5 186.208 16.2656C186.494 17.026 186.637 17.9167 186.637 18.9375V19.8516H176.505V17.7891H183.505C183.505 17.3099 183.4 16.8854 183.192 16.5156C182.984 16.1458 182.695 15.8568 182.325 15.6484C181.96 15.4349 181.536 15.3281 181.051 15.3281C180.546 15.3281 180.098 15.4453 179.708 15.6797C179.322 15.9089 179.02 16.2188 178.801 16.6094C178.583 16.9948 178.471 17.4245 178.465 17.8984V19.8594C178.465 20.4531 178.575 20.9661 178.794 21.3984C179.018 21.8307 179.333 22.1641 179.739 22.3984C180.145 22.6328 180.627 22.75 181.184 22.75C181.554 22.75 181.893 22.6979 182.2 22.5938C182.507 22.4896 182.77 22.3333 182.989 22.125C183.208 21.9167 183.374 21.6615 183.489 21.3594L186.567 21.5625C186.411 22.3021 186.09 22.9479 185.606 23.5C185.127 24.0469 184.507 24.474 183.747 24.7812C182.992 25.0833 182.119 25.2344 181.13 25.2344Z"
				fill="#191C1D"
			/>
			<path
				d="M190.43 25L187.165 13H190.532L192.391 21.0625H192.501L194.438 13H197.743L199.712 21.0156H199.813L201.641 13H205.001L201.743 25H198.22L196.157 17.4531H196.009L193.946 25H190.43Z"
				fill="#191C1D"
			/>
			<path
				d="M211.237 25.2344C210.024 25.2344 208.974 24.9766 208.089 24.4609C207.209 23.9401 206.529 23.2161 206.05 22.2891C205.571 21.3568 205.331 20.276 205.331 19.0469C205.331 17.8073 205.571 16.724 206.05 15.7969C206.529 14.8646 207.209 14.1406 208.089 13.625C208.974 13.1042 210.024 12.8438 211.237 12.8438C212.451 12.8438 213.498 13.1042 214.378 13.625C215.263 14.1406 215.946 14.8646 216.425 15.7969C216.904 16.724 217.144 17.8073 217.144 19.0469C217.144 20.276 216.904 21.3568 216.425 22.2891C215.946 23.2161 215.263 23.9401 214.378 24.4609C213.498 24.9766 212.451 25.2344 211.237 25.2344ZM211.253 22.6563C211.805 22.6563 212.266 22.5 212.636 22.1875C213.005 21.8698 213.284 21.4375 213.472 20.8906C213.664 20.3438 213.761 19.7214 213.761 19.0234C213.761 18.3255 213.664 17.7031 213.472 17.1563C213.284 16.6094 213.005 16.1771 212.636 15.8594C212.266 15.5417 211.805 15.3828 211.253 15.3828C210.696 15.3828 210.227 15.5417 209.847 15.8594C209.472 16.1771 209.188 16.6094 208.995 17.1563C208.808 17.7031 208.714 18.3255 208.714 19.0234C208.714 19.7214 208.808 20.3438 208.995 20.8906C209.188 21.4375 209.472 21.8698 209.847 22.1875C210.227 22.5 210.696 22.6563 211.253 22.6563Z"
				fill="#191C1D"
			/>
			<path
				d="M218.648 25V13H221.874V15.0938H221.999C222.218 14.349 222.585 13.7865 223.101 13.4063C223.616 13.0208 224.21 12.8281 224.882 12.8281C225.049 12.8281 225.228 12.8385 225.421 12.8594C225.614 12.8802 225.783 12.9089 225.929 12.9453V15.8984C225.773 15.8516 225.556 15.8099 225.28 15.7734C225.004 15.737 224.752 15.7188 224.523 15.7188C224.033 15.7188 223.595 15.8255 223.21 16.0391C222.83 16.2474 222.528 16.5391 222.304 16.9141C222.085 17.2891 221.976 17.7214 221.976 18.2109V25H218.648Z"
				fill="#191C1D"
			/>
			<path
				d="M230.005 21.5469L230.013 17.5547H230.497L234.341 13H238.161L232.997 19.0313H232.208L230.005 21.5469ZM226.99 25V9H230.318V25H226.99ZM234.49 25L230.958 19.7734L233.177 17.4219L238.388 25H234.49Z"
				fill="#191C1D"
			/>
			<path
				d="M241.08 25.2031C240.564 25.2031 240.121 25.0208 239.751 24.6562C239.387 24.2865 239.205 23.8438 239.205 23.3281C239.205 22.8177 239.387 22.3802 239.751 22.0156C240.121 21.651 240.564 21.4688 241.08 21.4688C241.58 21.4688 242.017 21.651 242.392 22.0156C242.767 22.3802 242.955 22.8177 242.955 23.3281C242.955 23.6719 242.866 23.987 242.689 24.2734C242.517 24.5547 242.29 24.7812 242.009 24.9531C241.728 25.1198 241.418 25.2031 241.08 25.2031Z"
				fill="#191C1D"
			/>
			<path
				d="M249.449 25.1953C248.537 25.1953 247.712 24.9609 246.972 24.4922C246.238 24.0182 245.655 23.3229 245.222 22.4063C244.795 21.4844 244.582 20.3542 244.582 19.0156C244.582 17.6406 244.803 16.4974 245.246 15.5859C245.688 14.6693 246.277 13.9844 247.011 13.5313C247.751 13.0729 248.561 12.8438 249.441 12.8438C250.113 12.8438 250.673 12.9583 251.121 13.1875C251.574 13.4115 251.938 13.6927 252.214 14.0313C252.496 14.3646 252.709 14.6927 252.855 15.0156H252.957V9H256.277V25H252.996V23.0781H252.855C252.699 23.4115 252.477 23.7422 252.191 24.0703C251.91 24.3932 251.543 24.6615 251.089 24.875C250.642 25.0885 250.095 25.1953 249.449 25.1953ZM250.504 22.5469C251.04 22.5469 251.493 22.401 251.863 22.1094C252.238 21.8125 252.524 21.3984 252.722 20.8672C252.925 20.3359 253.027 19.7135 253.027 19C253.027 18.2865 252.928 17.6667 252.73 17.1406C252.532 16.6146 252.246 16.2083 251.871 15.9219C251.496 15.6354 251.04 15.4922 250.504 15.4922C249.957 15.4922 249.496 15.6406 249.121 15.9375C248.746 16.2344 248.462 16.6458 248.269 17.1719C248.076 17.6979 247.98 18.3073 247.98 19C247.98 19.6979 248.076 20.3151 248.269 20.8516C248.467 21.3828 248.751 21.7995 249.121 22.1016C249.496 22.3984 249.957 22.5469 250.504 22.5469Z"
				fill="#191C1D"
			/>
			<path
				d="M263.822 25.2344C262.588 25.2344 261.525 24.9844 260.635 24.4844C259.749 23.9792 259.067 23.2656 258.588 22.3438C258.108 21.4167 257.869 20.3203 257.869 19.0547C257.869 17.8203 258.108 16.737 258.588 15.8047C259.067 14.8724 259.741 14.1458 260.611 13.625C261.486 13.1042 262.512 12.8438 263.689 12.8438C264.481 12.8438 265.218 12.9714 265.9 13.2266C266.588 13.4766 267.187 13.8542 267.697 14.3594C268.213 14.8646 268.614 15.5 268.9 16.2656C269.187 17.026 269.33 17.9167 269.33 18.9375V19.8516H259.197V17.7891H266.197C266.197 17.3099 266.093 16.8854 265.885 16.5156C265.676 16.1458 265.387 15.8568 265.017 15.6484C264.653 15.4349 264.228 15.3281 263.744 15.3281C263.239 15.3281 262.791 15.4453 262.4 15.6797C262.015 15.9089 261.713 16.2188 261.494 16.6094C261.275 16.9948 261.163 17.4245 261.158 17.8984V19.8594C261.158 20.4531 261.267 20.9661 261.486 21.3984C261.71 21.8307 262.025 22.1641 262.431 22.3984C262.838 22.6328 263.319 22.75 263.877 22.75C264.247 22.75 264.585 22.6979 264.892 22.5938C265.2 22.4896 265.463 22.3333 265.681 22.125C265.9 21.9167 266.067 21.6615 266.181 21.3594L269.26 21.5625C269.103 22.3021 268.783 22.9479 268.299 23.5C267.819 24.0469 267.2 24.474 266.439 24.7812C265.684 25.0833 264.812 25.2344 263.822 25.2344Z"
				fill="#191C1D"
			/>
			<path
				d="M281.707 13L277.512 25H273.762L269.566 13H273.082L275.574 21.5859H275.699L278.184 13H281.707Z"
				fill="#191C1D"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_2732_129065"
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
			ref={ref}
			className={classNames(className, iconStyle({ size }))}
			{...props}
		>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="#191C1D"
			/>
			<path
				d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
				fill="url(#paint0_linear_2725_128135)"
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
				d="M46.8977 16.4545C46.1136 16.4545 45.4413 16.3466 44.8807 16.1307C44.3239 15.9186 43.8807 15.6288 43.5511 15.2614C43.2216 14.8939 43.0076 14.4811 42.9091 14.0227L45.1477 13.7216C45.2159 13.8958 45.3239 14.0587 45.4716 14.2102C45.6193 14.3617 45.8144 14.483 46.0568 14.5739C46.303 14.6686 46.6023 14.7159 46.9545 14.7159C47.4811 14.7159 47.9148 14.5871 48.2557 14.3295C48.6004 14.0758 48.7727 13.6496 48.7727 13.0511V11.4545H48.6705C48.5644 11.697 48.4053 11.9261 48.1932 12.142C47.9811 12.358 47.7083 12.5341 47.375 12.6705C47.0417 12.8068 46.6439 12.875 46.1818 12.875C45.5265 12.875 44.9299 12.7235 44.392 12.4205C43.858 12.1136 43.4318 11.6458 43.1136 11.017C42.7992 10.3845 42.642 9.58523 42.642 8.61932C42.642 7.63068 42.803 6.80492 43.125 6.14205C43.447 5.47917 43.875 4.98295 44.4091 4.65341C44.947 4.32386 45.536 4.15909 46.1761 4.15909C46.6648 4.15909 47.0739 4.24242 47.4034 4.40909C47.733 4.57197 47.9981 4.77652 48.1989 5.02273C48.4034 5.26515 48.5606 5.50379 48.6705 5.73864H48.7614V4.27273H51.1648V13.0852C51.1648 13.8277 50.983 14.4489 50.6193 14.9489C50.2557 15.4489 49.7519 15.8239 49.108 16.0739C48.4678 16.3277 47.7311 16.4545 46.8977 16.4545ZM46.9489 11.0568C47.339 11.0568 47.6686 10.9602 47.9375 10.767C48.2102 10.5701 48.4186 10.2898 48.5625 9.92614C48.7102 9.55871 48.7841 9.11932 48.7841 8.60795C48.7841 8.09659 48.7121 7.65341 48.5682 7.27841C48.4242 6.89962 48.2159 6.60606 47.9432 6.39773C47.6705 6.18939 47.339 6.08523 46.9489 6.08523C46.5511 6.08523 46.2159 6.19318 45.9432 6.40909C45.6705 6.62121 45.464 6.91667 45.3239 7.29545C45.1837 7.67424 45.1136 8.11174 45.1136 8.60795C45.1136 9.11174 45.1837 9.54735 45.3239 9.91477C45.4678 10.2784 45.6742 10.5606 45.9432 10.7614C46.2159 10.9583 46.5511 11.0568 46.9489 11.0568ZM52.6109 13V4.27273H54.9575V5.79545H55.0484C55.2075 5.25379 55.4745 4.8447 55.8495 4.56818C56.2245 4.28788 56.6564 4.14773 57.145 4.14773C57.2662 4.14773 57.3969 4.1553 57.537 4.17045C57.6772 4.18561 57.8003 4.20644 57.9064 4.23295V6.38068C57.7927 6.34659 57.6355 6.31629 57.4348 6.28977C57.234 6.26326 57.0503 6.25 56.8836 6.25C56.5276 6.25 56.2094 6.32765 55.9291 6.48295C55.6526 6.63447 55.4329 6.84659 55.27 7.11932C55.1109 7.39205 55.0314 7.70644 55.0314 8.0625V13H52.6109ZM60.9164 13.1648C60.3596 13.1648 59.8634 13.0682 59.4278 12.875C58.9922 12.678 58.6475 12.3883 58.3937 12.0057C58.1437 11.6193 58.0187 11.1383 58.0187 10.5625C58.0187 10.0777 58.1077 9.67045 58.2857 9.34091C58.4638 9.01136 58.7062 8.74621 59.013 8.54545C59.3198 8.3447 59.6683 8.19318 60.0585 8.09091C60.4524 7.98864 60.8653 7.91667 61.2971 7.875C61.8047 7.82197 62.2138 7.77273 62.5244 7.72727C62.835 7.67803 63.0604 7.60606 63.2005 7.51136C63.3407 7.41667 63.4107 7.27652 63.4107 7.09091V7.05682C63.4107 6.69697 63.2971 6.41856 63.0698 6.22159C62.8463 6.02462 62.5282 5.92614 62.1153 5.92614C61.6797 5.92614 61.3331 6.02273 61.0755 6.21591C60.8179 6.4053 60.6475 6.64394 60.5641 6.93182L58.3255 6.75C58.4391 6.2197 58.6626 5.76136 58.996 5.375C59.3293 4.98485 59.7592 4.68561 60.2857 4.47727C60.816 4.26515 61.4297 4.15909 62.1266 4.15909C62.6115 4.15909 63.0755 4.21591 63.5187 4.32955C63.9657 4.44318 64.3615 4.61932 64.7062 4.85795C65.0547 5.09659 65.3293 5.40341 65.5301 5.77841C65.7308 6.14962 65.8312 6.5947 65.8312 7.11364V13H63.5357V11.7898H63.4676C63.3274 12.0625 63.1399 12.303 62.9051 12.5114C62.6702 12.7159 62.388 12.8769 62.0585 12.9943C61.7289 13.108 61.3482 13.1648 60.9164 13.1648ZM61.6096 11.4943C61.9657 11.4943 62.2801 11.4242 62.5528 11.2841C62.8255 11.1402 63.0395 10.947 63.1948 10.7045C63.3501 10.4621 63.4278 10.1875 63.4278 9.88068V8.95455C63.352 9.00379 63.2479 9.04924 63.1153 9.09091C62.9865 9.12879 62.8407 9.16477 62.6778 9.19886C62.5149 9.22917 62.352 9.25758 62.1891 9.28409C62.0263 9.30682 61.8785 9.32765 61.746 9.34659C61.4619 9.38826 61.2138 9.45455 61.0016 9.54545C60.7895 9.63636 60.6248 9.75947 60.5073 9.91477C60.3899 10.0663 60.3312 10.2557 60.3312 10.483C60.3312 10.8125 60.4505 11.0644 60.6891 11.2386C60.9316 11.4091 61.2384 11.4943 61.6096 11.4943ZM67.229 16.2727V4.27273H69.6154V5.73864H69.7234C69.8294 5.50379 69.9828 5.26515 70.1836 5.02273C70.3881 4.77652 70.6533 4.57197 70.979 4.40909C71.3086 4.24242 71.7177 4.15909 72.2063 4.15909C72.8427 4.15909 73.4298 4.32576 73.9677 4.65909C74.5055 4.98864 74.9355 5.48674 75.2574 6.15341C75.5794 6.81629 75.7404 7.64773 75.7404 8.64773C75.7404 9.62121 75.5832 10.4432 75.2688 11.1136C74.9582 11.7803 74.534 12.286 73.9961 12.6307C73.462 12.9716 72.8635 13.142 72.2006 13.142C71.7309 13.142 71.3313 13.0644 71.0018 12.9091C70.676 12.7538 70.409 12.5587 70.2006 12.3239C69.9923 12.0852 69.8332 11.8447 69.7234 11.6023H69.6495V16.2727H67.229ZM69.5984 8.63636C69.5984 9.1553 69.6703 9.60795 69.8143 9.99432C69.9582 10.3807 70.1665 10.6818 70.4393 10.8977C70.712 11.1098 71.0434 11.2159 71.4336 11.2159C71.8275 11.2159 72.1609 11.108 72.4336 10.892C72.7063 10.6723 72.9127 10.3693 73.0529 9.98295C73.1968 9.5928 73.2688 9.14394 73.2688 8.63636C73.2688 8.13258 73.1987 7.68939 73.0586 7.30682C72.9184 6.92424 72.712 6.625 72.4393 6.40909C72.1665 6.19318 71.8313 6.08523 71.4336 6.08523C71.0396 6.08523 70.7063 6.18939 70.4336 6.39773C70.1646 6.60606 69.9582 6.90151 69.8143 7.28409C69.6703 7.66667 69.5984 8.11742 69.5984 8.63636ZM79.2945 7.95455V13H76.874V1.36364H79.2263V5.8125H79.3286C79.5256 5.29735 79.8437 4.89394 80.2831 4.60227C80.7225 4.30682 81.2737 4.15909 81.9365 4.15909C82.5426 4.15909 83.071 4.29167 83.5218 4.55682C83.9763 4.81818 84.3286 5.19508 84.5786 5.6875C84.8324 6.17614 84.9574 6.76136 84.9536 7.44318V13H82.5331V7.875C82.5369 7.33712 82.4006 6.91856 82.124 6.61932C81.8513 6.32008 81.4687 6.17045 80.9763 6.17045C80.6468 6.17045 80.3551 6.24053 80.1013 6.38068C79.8513 6.52083 79.6543 6.72538 79.5104 6.99432C79.3702 7.25947 79.2983 7.57955 79.2945 7.95455ZM92.1455 16.2727V11.6023H92.0716C91.958 11.8447 91.797 12.0852 91.5886 12.3239C91.3841 12.5587 91.117 12.7538 90.7875 12.9091C90.4617 13.0644 90.064 13.142 89.5943 13.142C88.9314 13.142 88.3311 12.9716 87.7932 12.6307C87.2591 12.286 86.8348 11.7803 86.5205 11.1136C86.2098 10.4432 86.0545 9.62121 86.0545 8.64773C86.0545 7.64773 86.2155 6.81629 86.5375 6.15341C86.8595 5.48674 87.2875 4.98864 87.8216 4.65909C88.3595 4.32576 88.9485 4.15909 89.5886 4.15909C90.0773 4.15909 90.4845 4.24242 90.8102 4.40909C91.1398 4.57197 91.4049 4.77652 91.6057 5.02273C91.8102 5.26515 91.9655 5.50379 92.0716 5.73864H92.1739V4.27273H94.5602V16.2727H92.1455ZM90.3614 11.2159C90.7515 11.2159 91.0811 11.1098 91.35 10.8977C91.6227 10.6818 91.8311 10.3807 91.975 9.99432C92.1227 9.60795 92.1966 9.1553 92.1966 8.63636C92.1966 8.11742 92.1246 7.66667 91.9807 7.28409C91.8367 6.90151 91.6284 6.60606 91.3557 6.39773C91.083 6.18939 90.7515 6.08523 90.3614 6.08523C89.9636 6.08523 89.6284 6.19318 89.3557 6.40909C89.083 6.625 88.8765 6.92424 88.7364 7.30682C88.5962 7.68939 88.5261 8.13258 88.5261 8.63636C88.5261 9.14394 88.5962 9.5928 88.7364 9.98295C88.8803 10.3693 89.0867 10.6723 89.3557 10.892C89.6284 11.108 89.9636 11.2159 90.3614 11.2159ZM98.4439 1.36364V13H96.0234V1.36364H98.4439ZM101.318 13.1477C100.943 13.1477 100.621 13.0152 100.352 12.75C100.086 12.4811 99.9539 12.1591 99.9539 11.7841C99.9539 11.4129 100.086 11.0947 100.352 10.8295C100.621 10.5644 100.943 10.4318 101.318 10.4318C101.681 10.4318 101.999 10.5644 102.272 10.8295C102.545 11.0947 102.681 11.4129 102.681 11.7841C102.681 12.0341 102.617 12.2633 102.488 12.4716C102.363 12.6761 102.198 12.8409 101.994 12.9659C101.789 13.0871 101.564 13.1477 101.318 13.1477Z"
				fill="#E10098"
			/>
			<path
				d="M47.6591 22.2727V24.0909H42.2727V22.2727H47.6591ZM43.5057 31V21.642C43.5057 21.0095 43.6288 20.4848 43.875 20.0682C44.125 19.6515 44.4659 19.339 44.8977 19.1307C45.3295 18.9223 45.8201 18.8182 46.3693 18.8182C46.7405 18.8182 47.0795 18.8466 47.3864 18.9034C47.697 18.9602 47.928 19.0114 48.0795 19.0568L47.6477 20.875C47.553 20.8447 47.4356 20.8163 47.2955 20.7898C47.1591 20.7633 47.0189 20.75 46.875 20.75C46.5189 20.75 46.2708 20.8333 46.1307 21C45.9905 21.1629 45.9205 21.392 45.9205 21.6875V31H43.5057ZM48.6578 31V22.2727H51.0044V23.7955H51.0953C51.2544 23.2538 51.5214 22.8447 51.8964 22.5682C52.2714 22.2879 52.7032 22.1477 53.1919 22.1477C53.3131 22.1477 53.4438 22.1553 53.5839 22.1705C53.7241 22.1856 53.8472 22.2064 53.9532 22.233V24.3807C53.8396 24.3466 53.6824 24.3163 53.4816 24.2898C53.2809 24.2633 53.0972 24.25 52.9305 24.25C52.5745 24.25 52.2563 24.3277 51.976 24.483C51.6995 24.6345 51.4798 24.8466 51.3169 25.1193C51.1578 25.392 51.0782 25.7064 51.0782 26.0625V31H48.6578ZM56.9633 31.1648C56.4065 31.1648 55.9103 31.0682 55.4747 30.875C55.0391 30.678 54.6944 30.3883 54.4406 30.0057C54.1906 29.6193 54.0656 29.1383 54.0656 28.5625C54.0656 28.0777 54.1546 27.6705 54.3326 27.3409C54.5106 27.0114 54.7531 26.7462 55.0599 26.5455C55.3667 26.3447 55.7152 26.1932 56.1053 26.0909C56.4993 25.9886 56.9122 25.9167 57.344 25.875C57.8516 25.822 58.2606 25.7727 58.5712 25.7273C58.8819 25.678 59.1072 25.6061 59.2474 25.5114C59.3875 25.4167 59.4576 25.2765 59.4576 25.0909V25.0568C59.4576 24.697 59.344 24.4186 59.1167 24.2216C58.8932 24.0246 58.575 23.9261 58.1622 23.9261C57.7266 23.9261 57.38 24.0227 57.1224 24.2159C56.8648 24.4053 56.6944 24.6439 56.611 24.9318L54.3724 24.75C54.486 24.2197 54.7095 23.7614 55.0428 23.375C55.3762 22.9848 55.8061 22.6856 56.3326 22.4773C56.8629 22.2652 57.4766 22.1591 58.1735 22.1591C58.6584 22.1591 59.1224 22.2159 59.5656 22.3295C60.0125 22.4432 60.4084 22.6193 60.7531 22.858C61.1016 23.0966 61.3762 23.4034 61.5769 23.7784C61.7777 24.1496 61.8781 24.5947 61.8781 25.1136V31H59.5826V29.7898H59.5144C59.3743 30.0625 59.1868 30.303 58.9519 30.5114C58.7171 30.7159 58.4349 30.8769 58.1053 30.9943C57.7758 31.108 57.3951 31.1648 56.9633 31.1648ZM57.6565 29.4943C58.0125 29.4943 58.3269 29.4242 58.5997 29.2841C58.8724 29.1402 59.0864 28.947 59.2417 28.7045C59.397 28.4621 59.4747 28.1875 59.4747 27.8807V26.9545C59.3989 27.0038 59.2947 27.0492 59.1622 27.0909C59.0334 27.1288 58.8875 27.1648 58.7247 27.1989C58.5618 27.2292 58.3989 27.2576 58.236 27.2841C58.0731 27.3068 57.9254 27.3277 57.7928 27.3466C57.5088 27.3883 57.2606 27.4545 57.0485 27.5455C56.8364 27.6364 56.6716 27.7595 56.5542 27.9148C56.4368 28.0663 56.3781 28.2557 56.3781 28.483C56.3781 28.8125 56.4974 29.0644 56.736 29.2386C56.9784 29.4091 57.2853 29.4943 57.6565 29.4943ZM63.2759 31V22.2727H65.5827V23.8125H65.685C65.8668 23.3011 66.1698 22.8977 66.5941 22.6023C67.0183 22.3068 67.5259 22.1591 68.1168 22.1591C68.7153 22.1591 69.2248 22.3087 69.6452 22.608C70.0657 22.9034 70.346 23.3049 70.4861 23.8125H70.577C70.7551 23.3125 71.077 22.9129 71.543 22.6136C72.0127 22.3106 72.5676 22.1591 73.2077 22.1591C74.0221 22.1591 74.6831 22.4186 75.1907 22.9375C75.702 23.4527 75.9577 24.1837 75.9577 25.1307V31H73.543V25.608C73.543 25.1231 73.4142 24.7595 73.1566 24.517C72.899 24.2746 72.577 24.1534 72.1907 24.1534C71.7513 24.1534 71.4085 24.2936 71.1623 24.5739C70.9161 24.8504 70.793 25.2159 70.793 25.6705V31H68.4464V25.5568C68.4464 25.1288 68.3233 24.7879 68.077 24.5341C67.8346 24.2803 67.5145 24.1534 67.1168 24.1534C66.8479 24.1534 66.6055 24.2216 66.3895 24.358C66.1774 24.4905 66.0089 24.678 65.8839 24.9205C65.7589 25.1591 65.6964 25.4394 65.6964 25.7614V31H63.2759ZM81.3669 31.1705C80.4692 31.1705 79.6965 30.9886 79.0488 30.625C78.4048 30.2576 77.9086 29.7386 77.5601 29.0682C77.2116 28.3939 77.0374 27.5966 77.0374 26.6761C77.0374 25.7784 77.2116 24.9905 77.5601 24.3125C77.9086 23.6345 78.3991 23.1061 79.0317 22.7273C79.6681 22.3485 80.4143 22.1591 81.2703 22.1591C81.8461 22.1591 82.3821 22.2519 82.8783 22.4375C83.3783 22.6193 83.8139 22.8939 84.1851 23.2614C84.5601 23.6288 84.8518 24.0909 85.0601 24.6477C85.2684 25.2008 85.3726 25.8485 85.3726 26.5909V27.2557H78.0033V25.7557H83.0942C83.0942 25.4072 83.0184 25.0985 82.8669 24.8295C82.7154 24.5606 82.5052 24.3504 82.2363 24.1989C81.9711 24.0436 81.6624 23.9659 81.3101 23.9659C80.9427 23.9659 80.6169 24.0511 80.3328 24.2216C80.0525 24.3883 79.8328 24.6136 79.6738 24.8977C79.5147 25.178 79.4332 25.4905 79.4294 25.8352V27.2614C79.4294 27.6932 79.509 28.0663 79.6681 28.3807C79.8309 28.6951 80.0601 28.9375 80.3556 29.108C80.651 29.2784 81.0014 29.3636 81.4067 29.3636C81.6756 29.3636 81.9219 29.3258 82.1453 29.25C82.3688 29.1742 82.5601 29.0606 82.7192 28.9091C82.8783 28.7576 82.9995 28.572 83.0828 28.3523L85.3215 28.5C85.2078 29.0379 84.9749 29.5076 84.6226 29.9091C84.2741 30.3068 83.8234 30.6174 83.2703 30.8409C82.7211 31.0606 82.0866 31.1705 81.3669 31.1705ZM88.1312 31L85.7562 22.2727H88.2051L89.5574 28.1364H89.6369L91.046 22.2727H93.4494L94.8812 28.1023H94.9551L96.2847 22.2727H98.7278L96.3585 31H93.796L92.296 25.5114H92.1881L90.6881 31H88.1312ZM103.263 31.1705C102.381 31.1705 101.618 30.983 100.974 30.608C100.334 30.2292 99.8392 29.7027 99.4907 29.0284C99.1423 28.3504 98.968 27.5644 98.968 26.6705C98.968 25.7689 99.1423 24.9811 99.4907 24.3068C99.8392 23.6288 100.334 23.1023 100.974 22.7273C101.618 22.3485 102.381 22.1591 103.263 22.1591C104.146 22.1591 104.907 22.3485 105.548 22.7273C106.191 23.1023 106.688 23.6288 107.036 24.3068C107.385 24.9811 107.559 25.7689 107.559 26.6705C107.559 27.5644 107.385 28.3504 107.036 29.0284C106.688 29.7027 106.191 30.2292 105.548 30.608C104.907 30.983 104.146 31.1705 103.263 31.1705ZM103.275 29.2955C103.676 29.2955 104.012 29.1818 104.281 28.9545C104.549 28.7235 104.752 28.4091 104.888 28.0114C105.029 27.6136 105.099 27.161 105.099 26.6534C105.099 26.1458 105.029 25.6932 104.888 25.2955C104.752 24.8977 104.549 24.5833 104.281 24.3523C104.012 24.1212 103.676 24.0057 103.275 24.0057C102.87 24.0057 102.529 24.1212 102.252 24.3523C101.979 24.5833 101.773 24.8977 101.633 25.2955C101.496 25.6932 101.428 26.1458 101.428 26.6534C101.428 27.161 101.496 27.6136 101.633 28.0114C101.773 28.4091 101.979 28.7235 102.252 28.9545C102.529 29.1818 102.87 29.2955 103.275 29.2955ZM108.653 31V22.2727H110.999V23.7955H111.09C111.249 23.2538 111.516 22.8447 111.891 22.5682C112.266 22.2879 112.698 22.1477 113.187 22.1477C113.308 22.1477 113.439 22.1553 113.579 22.1705C113.719 22.1856 113.842 22.2064 113.948 22.233V24.3807C113.835 24.3466 113.677 24.3163 113.477 24.2898C113.276 24.2633 113.092 24.25 112.926 24.25C112.569 24.25 112.251 24.3277 111.971 24.483C111.694 24.6345 111.475 24.8466 111.312 25.1193C111.153 25.392 111.073 25.7064 111.073 26.0625V31H108.653ZM116.913 28.4886L116.919 25.5852H117.271L120.066 22.2727H122.845L119.089 26.6591H118.515L116.913 28.4886ZM114.72 31V19.3636H117.14V31H114.72ZM120.174 31L117.606 27.1989L119.22 25.4886L123.009 31H120.174ZM124.967 31.1477C124.592 31.1477 124.27 31.0152 124.001 30.75C123.736 30.4811 123.603 30.1591 123.603 29.7841C123.603 29.4129 123.736 29.0947 124.001 28.8295C124.27 28.5644 124.592 28.4318 124.967 28.4318C125.331 28.4318 125.649 28.5644 125.921 28.8295C126.194 29.0947 126.331 29.4129 126.331 29.7841C126.331 30.0341 126.266 30.2633 126.137 30.4716C126.012 30.6761 125.848 30.8409 125.643 30.9659C125.439 31.0871 125.213 31.1477 124.967 31.1477ZM131.054 31.142C130.391 31.142 129.79 30.9716 129.253 30.6307C128.718 30.286 128.294 29.7803 127.98 29.1136C127.669 28.4432 127.514 27.6212 127.514 26.6477C127.514 25.6477 127.675 24.8163 127.997 24.1534C128.319 23.4867 128.747 22.9886 129.281 22.6591C129.819 22.3258 130.408 22.1591 131.048 22.1591C131.537 22.1591 131.944 22.2424 132.27 22.4091C132.599 22.572 132.864 22.7765 133.065 23.0227C133.27 23.2652 133.425 23.5038 133.531 23.7386H133.605V19.3636H136.02V31H133.633V29.6023H133.531C133.417 29.8447 133.256 30.0852 133.048 30.3239C132.843 30.5587 132.576 30.7538 132.247 30.9091C131.921 31.0644 131.523 31.142 131.054 31.142ZM131.821 29.2159C132.211 29.2159 132.54 29.1098 132.809 28.8977C133.082 28.6818 133.29 28.3807 133.434 27.9943C133.582 27.608 133.656 27.1553 133.656 26.6364C133.656 26.1174 133.584 25.6667 133.44 25.2841C133.296 24.9015 133.088 24.6061 132.815 24.3977C132.542 24.1894 132.211 24.0852 131.821 24.0852C131.423 24.0852 131.088 24.1932 130.815 24.4091C130.542 24.625 130.336 24.9242 130.196 25.3068C130.056 25.6894 129.986 26.1326 129.986 26.6364C129.986 27.1439 130.056 27.5928 130.196 27.983C130.34 28.3693 130.546 28.6723 130.815 28.892C131.088 29.108 131.423 29.2159 131.821 29.2159ZM141.507 31.1705C140.609 31.1705 139.836 30.9886 139.189 30.625C138.545 30.2576 138.049 29.7386 137.7 29.0682C137.352 28.3939 137.177 27.5966 137.177 26.6761C137.177 25.7784 137.352 24.9905 137.7 24.3125C138.049 23.6345 138.539 23.1061 139.172 22.7273C139.808 22.3485 140.554 22.1591 141.41 22.1591C141.986 22.1591 142.522 22.2519 143.018 22.4375C143.518 22.6193 143.954 22.8939 144.325 23.2614C144.7 23.6288 144.992 24.0909 145.2 24.6477C145.408 25.2008 145.513 25.8485 145.513 26.5909V27.2557H138.143V25.7557H143.234C143.234 25.4072 143.158 25.0985 143.007 24.8295C142.855 24.5606 142.645 24.3504 142.376 24.1989C142.111 24.0436 141.802 23.9659 141.45 23.9659C141.083 23.9659 140.757 24.0511 140.473 24.2216C140.193 24.3883 139.973 24.6136 139.814 24.8977C139.655 25.178 139.573 25.4905 139.569 25.8352V27.2614C139.569 27.6932 139.649 28.0663 139.808 28.3807C139.971 28.6951 140.2 28.9375 140.496 29.108C140.791 29.2784 141.141 29.3636 141.547 29.3636C141.816 29.3636 142.062 29.3258 142.285 29.25C142.509 29.1742 142.7 29.0606 142.859 28.9091C143.018 28.7576 143.14 28.572 143.223 28.3523L145.461 28.5C145.348 29.0379 145.115 29.5076 144.763 29.9091C144.414 30.3068 143.963 30.6174 143.41 30.8409C142.861 31.0606 142.227 31.1705 141.507 31.1705ZM154.514 22.2727L151.463 31H148.736L145.685 22.2727H148.241L150.054 28.517H150.145L151.952 22.2727H154.514Z"
				fill="#191C1D"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_2725_128135"
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
