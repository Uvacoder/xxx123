import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { type IconProps } from './shared-icon-types'

export const ReactIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function ReactIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				viewBox="0 0 26.25 23.358"
				width="26.25"
				height="23.358"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M 13.125 13.999 C 14.42 13.999 15.469 12.95 15.469 11.655 C 15.469 10.361 14.42 9.312 13.125 9.312 C 11.831 9.312 10.782 10.361 10.782 11.655 C 10.782 12.95 11.831 13.999 13.125 13.999 Z"
					fill="#14D9FA"
				/>
				<path
					d="M 13.125 17.029 C 10.308 17.097 7.498 16.717 4.8 15.904 C 3.554 15.509 2.392 14.887 1.372 14.068 C 0.983 13.789 0.659 13.428 0.422 13.012 C 0.185 12.595 0.041 12.133 0 11.655 C 0 10.106 1.703 8.587 4.555 7.593 C 7.325 6.712 10.219 6.286 13.125 6.329 C 15.993 6.289 18.848 6.708 21.583 7.571 C 22.784 7.953 23.907 8.545 24.9 9.32 C 25.283 9.586 25.602 9.934 25.835 10.337 C 26.069 10.741 26.21 11.191 26.25 11.655 C 26.25 13.266 24.347 14.898 21.282 15.912 C 18.636 16.699 15.885 17.076 13.125 17.029 Z M 13.125 7.451 C 10.345 7.413 7.576 7.819 4.923 8.652 C 2.298 9.568 1.122 10.821 1.122 11.652 C 1.122 12.522 2.386 13.89 5.163 14.84 C 7.744 15.614 10.431 15.975 13.125 15.908 C 15.766 15.955 18.398 15.598 20.93 14.848 C 23.813 13.893 25.125 12.523 25.125 11.655 C 25.078 11.357 24.969 11.072 24.806 10.819 C 24.643 10.565 24.43 10.348 24.178 10.181 C 23.289 9.493 22.286 8.969 21.215 8.63 C 18.598 7.808 15.867 7.41 13.125 7.451 Z"
					fill="#14D9FA"
				/>
				<path
					d="M 7.8 23.345 C 7.363 23.355 6.93 23.249 6.547 23.038 C 5.205 22.263 4.74 20.03 5.303 17.063 C 5.925 14.223 7.001 11.503 8.491 9.007 C 9.888 6.503 11.678 4.239 13.791 2.3 C 14.722 1.451 15.796 0.774 16.963 0.3 C 17.385 0.102 17.846 0 18.312 0 C 18.778 0 19.239 0.102 19.661 0.3 C 21.057 1.105 21.519 3.568 20.868 6.731 C 20.227 9.416 19.179 11.988 17.759 14.355 C 16.411 16.83 14.678 19.074 12.625 21.005 C 11.66 21.887 10.541 22.583 9.322 23.057 C 8.835 23.238 8.32 23.336 7.8 23.345 Z M 9.462 9.564 C 8.041 11.954 7.009 14.555 6.406 17.269 C 5.887 20.002 6.385 21.645 7.109 22.064 C 7.859 22.498 9.68 22.086 11.89 20.155 C 13.85 18.305 15.504 16.157 16.791 13.789 C 18.151 11.526 19.157 9.067 19.773 6.499 C 20.386 3.523 19.856 1.7 19.104 1.267 C 18.822 1.159 18.521 1.111 18.22 1.125 C 17.918 1.139 17.623 1.216 17.353 1.35 C 16.314 1.779 15.359 2.388 14.531 3.148 C 12.512 5.005 10.803 7.173 9.469 9.569 L 9.462 9.564 Z"
					fill="#14D9FA"
				/>
				<path
					d="M 18.449 23.357 C 17.178 23.357 15.565 22.588 13.885 21.144 C 11.735 19.187 9.915 16.896 8.497 14.359 C 7.026 11.898 5.958 9.216 5.334 6.418 C 5.063 5.186 5.013 3.916 5.186 2.668 C 5.226 2.204 5.367 1.755 5.599 1.352 C 5.831 0.95 6.149 0.603 6.53 0.336 C 7.924 -0.471 10.289 0.358 12.704 2.502 C 14.71 4.397 16.415 6.59 17.757 9.002 C 19.227 11.406 20.306 14.029 20.954 16.771 C 21.236 18.048 21.279 19.366 21.082 20.658 C 21.035 21.135 20.886 21.596 20.644 22.009 C 20.402 22.423 20.074 22.779 19.681 23.053 C 19.305 23.262 18.879 23.367 18.449 23.357 Z M 9.467 13.795 C 10.828 16.22 12.566 18.412 14.616 20.291 C 16.724 22.105 18.397 22.495 19.116 22.072 C 19.866 21.636 20.419 19.857 19.849 16.978 C 19.225 14.359 18.19 11.856 16.783 9.561 C 15.502 7.252 13.875 5.153 11.959 3.336 C 9.687 1.318 7.844 0.868 7.093 1.303 C 6.859 1.493 6.667 1.729 6.529 1.998 C 6.391 2.266 6.31 2.56 6.291 2.861 C 6.142 3.974 6.191 5.106 6.435 6.203 C 7.035 8.88 8.059 11.443 9.468 13.797 L 9.467 13.795 Z"
					fill="#14D9FA"
				/>
			</svg>
		)
	},
)
