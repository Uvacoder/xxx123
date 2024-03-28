import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { type IconProps } from './shared-icon-types'

export const GraphQLIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function GraphQLIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				width="40"
				height="46"
				viewBox="0 0 40 46"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<g clipPath="url(#clip0_1863_101945)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M23.84 5.26492L33.0816 10.7194C33.3484 10.4309 33.6546 10.1832 33.9907 9.98408C35.9072 8.85772 38.3519 9.52647 39.4652 11.4858C40.5671 13.4451 39.9128 15.944 37.9961 17.082C37.6626 17.2783 37.3031 17.4246 36.9288 17.5164V28.4294C37.299 28.5214 37.6545 28.6667 37.9847 28.861C39.9128 29.999 40.5671 32.498 39.4538 34.4574C38.3519 36.4165 35.8958 37.0853 33.9791 35.9591C33.6078 35.7413 33.2733 35.4637 32.9885 35.137L23.8032 40.5579C23.9377 40.9743 24.006 41.41 24.0055 41.8485C24.0055 44.1011 22.2152 45.9431 20 45.9431C17.7849 45.9431 15.9946 44.1127 15.9946 41.8485C15.9946 41.446 16.0511 41.0572 16.1566 40.69L6.91754 35.2371C6.65366 35.52 6.35178 35.7631 6.02098 35.9591C4.09285 37.0853 1.64816 36.4165 0.54629 34.4574C-0.555428 32.498 0.0987903 29.999 2.01535 28.861C2.34552 28.6666 2.70106 28.5213 3.07129 28.4293V17.5164C2.69698 17.4246 2.33752 17.2783 2.00395 17.082C0.0872278 15.9558 -0.566991 13.4451 0.534884 11.4858C1.63676 9.52647 4.0927 8.85772 6.00941 9.98408C6.34365 10.1821 6.64832 10.4282 6.9141 10.7148L16.1583 5.25885C16.0493 4.88077 15.9942 4.48863 15.9946 4.09448C15.9946 1.83042 17.7849 0 20 0C22.2152 0 24.0055 1.83026 24.0055 4.09448C24.0055 4.50145 23.9477 4.89421 23.84 5.26492ZM22.8772 6.94552L32.1408 12.4128C31.9933 12.9399 31.951 13.4919 32.0164 14.0361C32.0818 14.5802 32.2536 15.1054 32.5216 15.5803C33.0855 16.583 34.0041 17.2478 35.0236 17.5068V28.4334C34.9716 28.4464 34.9199 28.4606 34.8685 28.4756L22.7696 7.05493C22.8061 7.01915 22.8421 6.98274 22.8772 6.94568V6.94552ZM17.233 7.05733L5.13426 28.4777C5.08194 28.4622 5.02933 28.4478 4.97645 28.4345V17.5068C5.99598 17.2478 6.91457 16.583 7.47848 15.5803C7.74698 15.1044 7.91894 14.5782 7.98409 14.033C8.04924 13.4877 8.00626 12.9346 7.85769 12.4067L17.1186 6.94105C17.156 6.9805 17.1941 7.01931 17.233 7.05717V7.05733ZM21.1193 8.02764L33.2152 29.4432C32.9381 29.7135 32.7006 30.0231 32.51 30.3627C32.3199 30.7002 32.1778 31.0637 32.0878 31.4421H7.91254C7.82249 31.0637 7.68024 30.7002 7.49004 30.3627C7.29879 30.0255 7.06174 29.7177 6.78598 29.4485L18.8843 8.0286C19.247 8.13536 19.6226 8.18934 20 8.18896C20.3886 8.18896 20.7641 8.13274 21.1193 8.02764ZM22.9622 39.0901L32.1657 33.6583C32.1381 33.5696 32.1134 33.48 32.0917 33.3896H7.90738C7.89455 33.4427 7.8807 33.4955 7.86582 33.5481L17.1143 39.0066C17.4877 38.6096 17.9359 38.294 18.4319 38.0787C18.9278 37.8634 19.4612 37.753 20 37.754C20.5577 37.753 21.1093 37.8714 21.6195 38.1015C22.1297 38.3316 22.5871 38.6684 22.9622 39.0901Z"
						fill="#E535AB"
					/>
				</g>
				<defs>
					<clipPath id="clip0_1863_101945">
						<rect width="40" height="46" fill="white" />
					</clipPath>
				</defs>
			</svg>
		)
	},
)
