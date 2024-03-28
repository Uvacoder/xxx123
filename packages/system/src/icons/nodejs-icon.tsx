import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { type IconProps } from './shared-icon-types'

export const NodejsIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function NodejsIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				width="44"
				height="50"
				viewBox="0 0 44 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M22.0927 49.2739C21.424 49.2739 20.7998 49.0956 20.2203 48.7835L14.2905 45.2613C13.3988 44.7709 13.8446 44.5926 14.1121 44.5034C15.3159 44.1022 15.5388 44.013 16.7871 43.2995C16.921 43.2104 17.0993 43.2549 17.2329 43.3441L21.7806 46.0638C21.959 46.153 22.1819 46.153 22.3156 46.0638L40.1048 35.7649C40.2832 35.6758 40.3723 35.4974 40.3723 35.2745V14.721C40.3723 14.4981 40.2832 14.3198 40.1048 14.2306L22.3156 3.97619C22.1373 3.88703 21.9144 3.88703 21.7806 3.97619L3.99144 14.2308C3.81311 14.32 3.72394 14.5429 3.72394 14.7212L3.72394 35.2745C3.72394 35.4529 3.81311 35.6758 3.99144 35.7649L8.85125 38.5736C11.4818 39.9111 13.1312 38.3507 13.1312 36.7903L13.1312 16.5043C13.1312 16.2368 13.3542 15.9694 13.6663 15.9694H15.9402C16.2077 15.9694 16.4752 16.1923 16.4752 16.5043V36.7902C16.4752 40.3123 14.558 42.3631 11.2141 42.3631C10.1887 42.3631 9.38624 42.3631 7.11254 41.2486L2.43105 38.5736C1.27191 37.9047 0.558594 36.6564 0.558594 35.3189L0.558594 14.7658C0.558594 13.4283 1.27191 12.18 2.43105 11.5111L20.2203 1.21226C21.3348 0.588102 22.8506 0.588102 23.9652 1.21226L41.7544 11.5111C42.9135 12.1799 43.6268 13.4282 43.6268 14.7658V35.3191C43.6268 36.6566 42.9135 37.9049 41.7544 38.5736L23.9652 48.8728C23.3856 49.1403 22.7169 49.2741 22.0927 49.2741V49.2739ZM27.5765 35.1406C19.7743 35.1406 18.1693 31.574 18.1693 28.5423C18.1693 28.2748 18.3922 28.0073 18.7043 28.0073H21.0226C21.2901 28.0073 21.5131 28.1856 21.5131 28.4531C21.8698 30.816 22.8952 31.9753 27.6211 31.9753C31.3662 31.9753 32.9713 31.1282 32.9713 29.122C32.9713 27.9627 32.5255 27.1156 26.6849 26.5359C21.8252 26.0455 18.7934 24.9755 18.7934 21.0968C18.7934 17.4853 21.8251 15.3454 26.9078 15.3454C32.6145 15.3454 35.4233 17.307 35.78 21.5871C35.78 21.7208 35.7354 21.8546 35.6463 21.9883C35.5571 22.0775 35.4233 22.1666 35.2896 22.1666H32.9713C32.7482 22.1666 32.5255 21.9883 32.4807 21.7654C31.9457 19.3134 30.5637 18.5109 26.9078 18.5109C22.8062 18.5109 22.3156 19.9375 22.3156 21.0075C22.3156 22.3006 22.8952 22.7016 28.4236 23.4149C33.9075 24.1283 36.4933 25.1538 36.4933 28.9881C36.4487 32.9115 33.2388 35.1406 27.5765 35.1406V35.1406Z"
					fill="#539E43"
				/>
			</svg>
		)
	},
)
