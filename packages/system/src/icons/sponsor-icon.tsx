import classNames from 'classnames'
import React from 'react'
import { iconStyle } from './icon.css'
import { type IconProps } from './shared-icon-types'

export const SponsorIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function SponsorIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				width="132"
				height="56"
				viewBox="0 0 132 56"
				fill="none"
				ref={ref}
				{...props}
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="131.6" height="16" fill="#13B6DA" />
				<path
					d="M32.3048 11.096C31.8568 11.096 31.4274 11.0373 31.0168 10.92C30.6061 10.7973 30.2754 10.64 30.0248 10.448L30.4648 9.472C30.7048 9.64267 30.9874 9.784 31.3128 9.896C31.6434 10.0027 31.9768 10.056 32.3128 10.056C32.5688 10.056 32.7741 10.032 32.9288 9.984C33.0888 9.93067 33.2061 9.85867 33.2808 9.768C33.3554 9.67733 33.3928 9.57333 33.3928 9.456C33.3928 9.30667 33.3341 9.18933 33.2168 9.104C33.0994 9.01333 32.9448 8.94133 32.7528 8.888C32.5608 8.82933 32.3474 8.776 32.1128 8.728C31.8834 8.67467 31.6514 8.61067 31.4168 8.536C31.1874 8.46133 30.9768 8.36533 30.7848 8.248C30.5928 8.13067 30.4354 7.976 30.3128 7.784C30.1954 7.592 30.1368 7.34667 30.1368 7.048C30.1368 6.728 30.2221 6.43733 30.3928 6.176C30.5688 5.90933 30.8301 5.69867 31.1768 5.544C31.5288 5.384 31.9688 5.304 32.4968 5.304C32.8488 5.304 33.1954 5.34667 33.5368 5.432C33.8781 5.512 34.1794 5.63467 34.4408 5.8L34.0408 6.784C33.7794 6.63467 33.5181 6.52533 33.2568 6.456C32.9954 6.38133 32.7394 6.344 32.4888 6.344C32.2381 6.344 32.0328 6.37333 31.8728 6.432C31.7128 6.49067 31.5981 6.568 31.5288 6.664C31.4594 6.75467 31.4248 6.86133 31.4248 6.984C31.4248 7.128 31.4834 7.24533 31.6008 7.336C31.7181 7.42133 31.8728 7.49067 32.0648 7.544C32.2568 7.59733 32.4674 7.65067 32.6968 7.704C32.9314 7.75733 33.1634 7.81867 33.3928 7.888C33.6274 7.95733 33.8408 8.05067 34.0328 8.168C34.2248 8.28533 34.3794 8.44 34.4968 8.632C34.6194 8.824 34.6808 9.06667 34.6808 9.36C34.6808 9.67467 34.5928 9.96267 34.4168 10.224C34.2408 10.4853 33.9768 10.696 33.6248 10.856C33.2781 11.016 32.8381 11.096 32.3048 11.096ZM35.8863 11V5.4H38.3103C38.8117 5.4 39.2437 5.48267 39.6063 5.648C39.969 5.808 40.249 6.04 40.4463 6.344C40.6437 6.648 40.7423 7.01067 40.7423 7.432C40.7423 7.848 40.6437 8.208 40.4463 8.512C40.249 8.816 39.969 9.05067 39.6063 9.216C39.2437 9.376 38.8117 9.456 38.3103 9.456H36.6063L37.1823 8.872V11H35.8863ZM37.1823 9.016L36.6063 8.4H38.2383C38.6383 8.4 38.937 8.31467 39.1343 8.144C39.3317 7.97333 39.4303 7.736 39.4303 7.432C39.4303 7.12267 39.3317 6.88267 39.1343 6.712C38.937 6.54133 38.6383 6.456 38.2383 6.456H36.6063L37.1823 5.84V9.016ZM44.7857 11.096C44.3431 11.096 43.9324 11.024 43.5537 10.88C43.1804 10.736 42.8551 10.5333 42.5777 10.272C42.3057 10.0107 42.0924 9.704 41.9377 9.352C41.7884 9 41.7137 8.616 41.7137 8.2C41.7137 7.784 41.7884 7.4 41.9377 7.048C42.0924 6.696 42.3084 6.38933 42.5857 6.128C42.8631 5.86667 43.1884 5.664 43.5617 5.52C43.9351 5.376 44.3404 5.304 44.7777 5.304C45.2204 5.304 45.6257 5.376 45.9937 5.52C46.3671 5.664 46.6897 5.86667 46.9617 6.128C47.2391 6.38933 47.4551 6.696 47.6097 7.048C47.7644 7.39467 47.8417 7.77867 47.8417 8.2C47.8417 8.616 47.7644 9.00267 47.6097 9.36C47.4551 9.712 47.2391 10.0187 46.9617 10.28C46.6897 10.536 46.3671 10.736 45.9937 10.88C45.6257 11.024 45.2231 11.096 44.7857 11.096ZM44.7777 9.992C45.0284 9.992 45.2577 9.94933 45.4657 9.864C45.6791 9.77867 45.8657 9.656 46.0257 9.496C46.1857 9.336 46.3084 9.14667 46.3937 8.928C46.4844 8.70933 46.5297 8.46667 46.5297 8.2C46.5297 7.93333 46.4844 7.69067 46.3937 7.472C46.3084 7.25333 46.1857 7.064 46.0257 6.904C45.8711 6.744 45.6871 6.62133 45.4737 6.536C45.2604 6.45067 45.0284 6.408 44.7777 6.408C44.5271 6.408 44.2951 6.45067 44.0817 6.536C43.8737 6.62133 43.6897 6.744 43.5297 6.904C43.3697 7.064 43.2444 7.25333 43.1537 7.472C43.0684 7.69067 43.0257 7.93333 43.0257 8.2C43.0257 8.46133 43.0684 8.704 43.1537 8.928C43.2444 9.14667 43.3671 9.336 43.5217 9.496C43.6817 9.656 43.8684 9.77867 44.0817 9.864C44.2951 9.94933 44.5271 9.992 44.7777 9.992ZM49.1357 11V5.4H50.2077L53.5117 9.432H52.9917V5.4H54.2717V11H53.2077L49.8957 6.968H50.4157V11H49.1357ZM57.7567 11.096C57.3087 11.096 56.8793 11.0373 56.4687 10.92C56.058 10.7973 55.7273 10.64 55.4767 10.448L55.9167 9.472C56.1567 9.64267 56.4393 9.784 56.7647 9.896C57.0953 10.0027 57.4287 10.056 57.7647 10.056C58.0207 10.056 58.226 10.032 58.3807 9.984C58.5407 9.93067 58.658 9.85867 58.7327 9.768C58.8073 9.67733 58.8447 9.57333 58.8447 9.456C58.8447 9.30667 58.786 9.18933 58.6687 9.104C58.5513 9.01333 58.3967 8.94133 58.2047 8.888C58.0127 8.82933 57.7993 8.776 57.5647 8.728C57.3353 8.67467 57.1033 8.61067 56.8687 8.536C56.6393 8.46133 56.4287 8.36533 56.2367 8.248C56.0447 8.13067 55.8873 7.976 55.7647 7.784C55.6473 7.592 55.5887 7.34667 55.5887 7.048C55.5887 6.728 55.674 6.43733 55.8447 6.176C56.0207 5.90933 56.282 5.69867 56.6287 5.544C56.9807 5.384 57.4207 5.304 57.9487 5.304C58.3007 5.304 58.6473 5.34667 58.9887 5.432C59.33 5.512 59.6313 5.63467 59.8927 5.8L59.4927 6.784C59.2313 6.63467 58.97 6.52533 58.7087 6.456C58.4473 6.38133 58.1913 6.344 57.9407 6.344C57.69 6.344 57.4847 6.37333 57.3247 6.432C57.1647 6.49067 57.05 6.568 56.9807 6.664C56.9113 6.75467 56.8767 6.86133 56.8767 6.984C56.8767 7.128 56.9353 7.24533 57.0527 7.336C57.17 7.42133 57.3247 7.49067 57.5167 7.544C57.7087 7.59733 57.9193 7.65067 58.1487 7.704C58.3833 7.75733 58.6153 7.81867 58.8447 7.888C59.0793 7.95733 59.2927 8.05067 59.4847 8.168C59.6767 8.28533 59.8313 8.44 59.9487 8.632C60.0713 8.824 60.1327 9.06667 60.1327 9.36C60.1327 9.67467 60.0447 9.96267 59.8687 10.224C59.6927 10.4853 59.4287 10.696 59.0767 10.856C58.73 11.016 58.29 11.096 57.7567 11.096ZM64.0582 11.096C63.6156 11.096 63.2049 11.024 62.8262 10.88C62.4529 10.736 62.1276 10.5333 61.8502 10.272C61.5782 10.0107 61.3649 9.704 61.2102 9.352C61.0609 9 60.9862 8.616 60.9862 8.2C60.9862 7.784 61.0609 7.4 61.2102 7.048C61.3649 6.696 61.5809 6.38933 61.8582 6.128C62.1356 5.86667 62.4609 5.664 62.8342 5.52C63.2076 5.376 63.6129 5.304 64.0502 5.304C64.4929 5.304 64.8982 5.376 65.2662 5.52C65.6396 5.664 65.9622 5.86667 66.2342 6.128C66.5116 6.38933 66.7276 6.696 66.8822 7.048C67.0369 7.39467 67.1142 7.77867 67.1142 8.2C67.1142 8.616 67.0369 9.00267 66.8822 9.36C66.7276 9.712 66.5116 10.0187 66.2342 10.28C65.9622 10.536 65.6396 10.736 65.2662 10.88C64.8982 11.024 64.4956 11.096 64.0582 11.096ZM64.0502 9.992C64.3009 9.992 64.5302 9.94933 64.7382 9.864C64.9516 9.77867 65.1382 9.656 65.2982 9.496C65.4582 9.336 65.5809 9.14667 65.6662 8.928C65.7569 8.70933 65.8022 8.46667 65.8022 8.2C65.8022 7.93333 65.7569 7.69067 65.6662 7.472C65.5809 7.25333 65.4582 7.064 65.2982 6.904C65.1436 6.744 64.9596 6.62133 64.7462 6.536C64.5329 6.45067 64.3009 6.408 64.0502 6.408C63.7996 6.408 63.5676 6.45067 63.3542 6.536C63.1462 6.62133 62.9622 6.744 62.8022 6.904C62.6422 7.064 62.5169 7.25333 62.4262 7.472C62.3409 7.69067 62.2982 7.93333 62.2982 8.2C62.2982 8.46133 62.3409 8.704 62.4262 8.928C62.5169 9.14667 62.6396 9.336 62.7942 9.496C62.9542 9.656 63.1409 9.77867 63.3542 9.864C63.5676 9.94933 63.7996 9.992 64.0502 9.992ZM68.4082 11V5.4H70.8322C71.3336 5.4 71.7656 5.48267 72.1282 5.648C72.4909 5.808 72.7709 6.04 72.9682 6.344C73.1656 6.648 73.2642 7.01067 73.2642 7.432C73.2642 7.848 73.1656 8.208 72.9682 8.512C72.7709 8.81067 72.4909 9.04 72.1282 9.2C71.7656 9.36 71.3336 9.44 70.8322 9.44H69.1282L69.7042 8.872V11H68.4082ZM71.9682 11L70.5682 8.968H71.9522L73.3682 11H71.9682ZM69.7042 9.016L69.1282 8.408H70.7602C71.1602 8.408 71.4589 8.32267 71.6562 8.152C71.8536 7.976 71.9522 7.736 71.9522 7.432C71.9522 7.12267 71.8536 6.88267 71.6562 6.712C71.4589 6.54133 71.1602 6.456 70.7602 6.456H69.1282L69.7042 5.84V9.016ZM75.803 7.656H78.499V8.664H75.803V7.656ZM75.899 9.96H78.947V11H74.611V5.4H78.843V6.44H75.899V9.96ZM80.2982 11V5.4H82.8422C83.4502 5.4 83.9862 5.51733 84.4502 5.752C84.9142 5.98133 85.2769 6.304 85.5382 6.72C85.7996 7.136 85.9302 7.62933 85.9302 8.2C85.9302 8.76533 85.7996 9.25867 85.5382 9.68C85.2769 10.096 84.9142 10.4213 84.4502 10.656C83.9862 10.8853 83.4502 11 82.8422 11H80.2982ZM81.5942 9.936H82.7782C83.1516 9.936 83.4742 9.86667 83.7462 9.728C84.0236 9.584 84.2369 9.38133 84.3862 9.12C84.5409 8.85867 84.6182 8.552 84.6182 8.2C84.6182 7.84267 84.5409 7.536 84.3862 7.28C84.2369 7.01867 84.0236 6.81867 83.7462 6.68C83.4742 6.536 83.1516 6.464 82.7782 6.464H81.5942V9.936ZM89.8132 11V5.4H92.5492C93.2532 5.4 93.7812 5.53333 94.1332 5.8C94.4906 6.06667 94.6692 6.41867 94.6692 6.856C94.6692 7.14933 94.5972 7.40533 94.4532 7.624C94.3092 7.83733 94.1119 8.00267 93.8612 8.12C93.6106 8.23733 93.3226 8.296 92.9972 8.296L93.1492 7.968C93.5012 7.968 93.8132 8.02667 94.0852 8.144C94.3572 8.256 94.5679 8.424 94.7172 8.648C94.8719 8.872 94.9492 9.14667 94.9492 9.472C94.9492 9.952 94.7599 10.328 94.3812 10.6C94.0026 10.8667 93.4452 11 92.7092 11H89.8132ZM91.1012 10.024H92.6132C92.9492 10.024 93.2026 9.97067 93.3732 9.864C93.5492 9.752 93.6372 9.576 93.6372 9.336C93.6372 9.10133 93.5492 8.928 93.3732 8.816C93.2026 8.69867 92.9492 8.64 92.6132 8.64H91.0052V7.696H92.3892C92.7039 7.696 92.9439 7.64267 93.1092 7.536C93.2799 7.424 93.3652 7.256 93.3652 7.032C93.3652 6.81333 93.2799 6.65067 93.1092 6.544C92.9439 6.432 92.7039 6.376 92.3892 6.376H91.1012V10.024ZM97.5252 11V8.712L97.8212 9.496L95.3572 5.4H96.7332L98.6212 8.544H97.8292L99.7252 5.4H100.997L98.5332 9.496L98.8212 8.712V11H97.5252Z"
					fill="white"
				/>
				<rect
					width="131.6"
					height="40"
					transform="translate(0 16)"
					fill="#ECF1F7"
				/>
				<path
					d="M15.3717 26.6569H12.0117V24.4561H21.3429V26.6569H17.9829V37.0873H15.3717V26.6569Z"
					fill="#646E8B"
				/>
				<path
					d="M27.1016 24.4561H29.708V30.0841H34.2176V24.4561H36.8144V37.0873H34.2176V32.2873H29.708V37.0873H27.1016V24.4561Z"
					fill="#646E8B"
				/>
				<path
					d="M46.171 24.4561V37.0873H43.5742V24.4561H46.171Z"
					fill="#646E8B"
				/>
				<path
					d="M52.3047 33.7274H54.9447C55.0335 34.6298 55.6647 35.0618 56.5503 35.0618C57.4359 35.0618 58.0119 34.5386 58.0119 33.7274C58.0119 32.9162 57.5055 32.4458 55.7919 31.7426C53.2767 30.7058 52.3839 29.5154 52.3839 27.6626C52.3839 25.5866 53.8983 24.2354 56.3343 24.2354C58.5879 24.2354 60.2847 25.5698 60.2847 27.7706H57.6447C57.6447 26.9954 57.1407 26.4722 56.2935 26.4722C55.4463 26.4722 55.0119 26.9954 55.0119 27.6266C55.0119 28.3826 55.5351 28.8266 57.3015 29.5826C59.8287 30.665 60.6399 31.8002 60.6399 33.569C60.6399 35.7962 59.0535 37.2938 56.5095 37.2938C53.9655 37.2938 52.4487 35.7482 52.3047 33.7274Z"
					fill="#646E8B"
				/>
				<path
					d="M73.3403 37.0873H69.1211V24.4561H73.3403C77.4371 24.4561 80.1947 26.7649 80.1947 30.7681C80.1947 34.7713 77.4371 37.0873 73.3403 37.0873ZM73.3595 26.6617H71.7179V34.8817H73.3595C75.7235 34.8817 77.5619 33.5113 77.5619 30.7873C77.5619 28.0633 75.7235 26.6569 73.3595 26.6569V26.6617Z"
					fill="#646E8B"
				/>
				<path
					d="M111.628 26.6569H108.254V24.4561H117.6V26.6569H114.223V37.0873H111.628V26.6569Z"
					fill="#646E8B"
				/>
				<path
					d="M94.2467 34.5862C96.4152 34.5862 98.1731 32.8283 98.1731 30.6598C98.1731 28.4913 96.4152 26.7334 94.2467 26.7334C92.0782 26.7334 90.3203 28.4913 90.3203 30.6598C90.3203 32.8283 92.0782 34.5862 94.2467 34.5862Z"
					fill="#F46663"
				/>
				<path
					d="M100.311 24.3481H97.0781L101.926 30.6601L97.0781 36.9745H100.311L105.159 30.6601L100.311 24.3481Z"
					fill="#9FACCC"
				/>
				<path
					d="M88.1839 24.3481H91.4167L86.5687 30.6601L91.4167 36.9745H88.1839L83.3359 30.6601L88.1839 24.3481Z"
					fill="#9FACCC"
				/>
				<path
					d="M46.9398 45.8552C46.782 45.4853 46.7031 45.0882 46.7031 44.6639C46.7031 44.2396 46.782 43.8438 46.9398 43.4766C47.1002 43.1067 47.3165 42.7939 47.5885 42.5382C47.8632 42.2798 48.1882 42.0772 48.5636 41.9303C48.939 41.7834 49.3388 41.71 49.7631 41.71C50.1874 41.71 50.5873 41.7834 50.9626 41.9303C51.338 42.0772 51.6617 42.2798 51.9337 42.5382C52.2084 42.7939 52.4246 43.1067 52.5824 43.4766C52.7429 43.8438 52.8231 44.2396 52.8231 44.6639C52.8231 45.0882 52.7429 45.4853 52.5824 45.8552C52.4246 46.2224 52.2084 46.5352 51.9337 46.7936C51.6617 47.0493 51.338 47.2506 50.9626 47.3975C50.5873 47.5444 50.1874 47.6178 49.7631 47.6178C49.3388 47.6178 48.939 47.5444 48.5636 47.3975C48.1882 47.2506 47.8632 47.0493 47.5885 46.7936C47.3165 46.5352 47.1002 46.2224 46.9398 45.8552ZM48.433 43.2685C48.074 43.633 47.8945 44.0981 47.8945 44.6639C47.8945 45.2296 48.074 45.6948 48.433 46.0592C48.7921 46.4237 49.2354 46.606 49.7631 46.606C50.2908 46.606 50.7342 46.4237 51.0932 46.0592C51.4522 45.6948 51.6318 45.2296 51.6318 44.6639C51.6318 44.0981 51.4522 43.633 51.0932 43.2685C50.7342 42.904 50.2908 42.7218 49.7631 42.7218C49.2354 42.7218 48.7921 42.904 48.433 43.2685Z"
					fill="#F46663"
				/>
				<path
					d="M57.2257 46.0348H56.5239V47.5199H55.3489V41.8079H57.2257C57.5739 41.8079 57.8935 41.8623 58.1845 41.9711C58.4755 42.0799 58.7176 42.2295 58.9107 42.4199C59.1039 42.6076 59.2535 42.8306 59.3595 43.089C59.4656 43.3474 59.5187 43.6248 59.5187 43.9213C59.5187 44.2178 59.4656 44.4952 59.3595 44.7536C59.2535 45.012 59.1039 45.2364 58.9107 45.4268C58.7176 45.6145 58.4755 45.7628 58.1845 45.8716C57.8935 45.9804 57.5739 46.0348 57.2257 46.0348ZM58.0131 44.7577C58.2226 44.5592 58.3273 44.2804 58.3273 43.9213C58.3273 43.5623 58.2226 43.2835 58.0131 43.0849C57.8064 42.8864 57.5113 42.7871 57.1278 42.7871H56.5239V45.0556H57.1278C57.5113 45.0556 57.8064 44.9563 58.0131 44.7577Z"
					fill="#F46663"
				/>
				<path
					d="M61.969 47.5199V41.8079H65.4778V42.8034H63.1441V44.3375H65.1025V45.333H63.1441V46.5244H65.5513V47.5199H61.969Z"
					fill="#F46663"
				/>
				<path
					d="M68.2465 47.5199V41.8079H69.1114L71.8287 45.3901V41.8079H73.0038V47.5199H72.1388L69.4215 43.9295V47.5199H68.2465Z"
					fill="#F46663"
				/>
				<path
					d="M79.6864 47.6178C79.1261 47.6178 78.6773 47.4668 78.34 47.1649C78.0028 46.863 77.8178 46.4754 77.7852 46.0021H78.9765C78.9956 46.2007 79.069 46.3516 79.1968 46.455C79.3274 46.5556 79.496 46.606 79.7028 46.606C79.904 46.606 80.0645 46.5516 80.1842 46.4428C80.3039 46.3312 80.3637 46.1844 80.3637 46.0021C80.3637 45.8172 80.293 45.6608 80.1516 45.5329C80.0101 45.4051 79.7463 45.2623 79.36 45.1045C78.7997 44.8733 78.4026 44.6149 78.1687 44.3293C77.9348 44.041 77.8178 43.6847 77.8178 43.2604C77.8178 42.7898 77.9783 42.4144 78.2992 42.1343C78.6202 41.8514 79.0554 41.71 79.6048 41.71C80.1271 41.71 80.5555 41.8555 80.89 42.1465C81.2246 42.4348 81.3919 42.8224 81.3919 43.3093H80.2005C80.2005 43.1325 80.1461 42.9911 80.0373 42.885C79.9285 42.7762 79.7789 42.7218 79.5885 42.7218C79.4008 42.7218 79.2567 42.7708 79.156 42.8687C79.0581 42.9666 79.0092 43.0917 79.0092 43.244C79.0092 43.4154 79.0812 43.5636 79.2254 43.6888C79.3723 43.8112 79.6456 43.958 80.0455 44.1294C80.6031 44.3688 80.9934 44.6272 81.2164 44.9046C81.4422 45.1793 81.5551 45.522 81.5551 45.9328C81.5551 46.4414 81.3864 46.8494 81.0492 47.1568C80.7119 47.4641 80.2576 47.6178 79.6864 47.6178Z"
					fill="#F46663"
				/>
				<path
					d="M83.4243 45.8552C83.2665 45.4853 83.1876 45.0882 83.1876 44.6639C83.1876 44.2396 83.2665 43.8438 83.4243 43.4766C83.5848 43.1067 83.801 42.7939 84.073 42.5382C84.3477 42.2798 84.6728 42.0772 85.0481 41.9303C85.4235 41.7834 85.8233 41.71 86.2476 41.71C86.672 41.71 87.0718 41.7834 87.4472 41.9303C87.8225 42.0772 88.1462 42.2798 88.4182 42.5382C88.6929 42.7939 88.9092 43.1067 89.0669 43.4766C89.2274 43.8438 89.3076 44.2396 89.3076 44.6639C89.3076 45.0882 89.2274 45.4853 89.0669 45.8552C88.9092 46.2224 88.6929 46.5352 88.4182 46.7936C88.1462 47.0493 87.8225 47.2506 87.4472 47.3975C87.0718 47.5444 86.672 47.6178 86.2476 47.6178C85.8233 47.6178 85.4235 47.5444 85.0481 47.3975C84.6728 47.2506 84.3477 47.0493 84.073 46.7936C83.801 46.5352 83.5848 46.2224 83.4243 45.8552ZM84.9176 43.2685C84.5585 43.633 84.379 44.0981 84.379 44.6639C84.379 45.2296 84.5585 45.6948 84.9176 46.0592C85.2766 46.4237 85.72 46.606 86.2476 46.606C86.7753 46.606 87.2187 46.4237 87.5777 46.0592C87.9368 45.6948 88.1163 45.2296 88.1163 44.6639C88.1163 44.0981 87.9368 43.633 87.5777 43.2685C87.2187 42.904 86.7753 42.7218 86.2476 42.7218C85.72 42.7218 85.2766 42.904 84.9176 43.2685Z"
					fill="#F46663"
				/>
				<path
					d="M94.669 47.4668C94.3861 47.5675 94.0774 47.6178 93.7429 47.6178C93.4083 47.6178 93.0982 47.5675 92.8126 47.4668C92.5297 47.3635 92.2768 47.2125 92.0537 47.014C91.8334 46.8127 91.6593 46.5488 91.5315 46.2224C91.4064 45.896 91.3438 45.5234 91.3438 45.1045V41.8079H92.5189V45.178C92.5189 45.42 92.5515 45.6349 92.6168 45.8226C92.6848 46.0103 92.7759 46.1599 92.8901 46.2714C93.0071 46.3829 93.1377 46.4672 93.2818 46.5244C93.426 46.5788 93.5797 46.606 93.7429 46.606C93.9061 46.606 94.0597 46.5788 94.2039 46.5244C94.3481 46.4672 94.4773 46.3829 94.5915 46.2714C94.7085 46.1599 94.7996 46.0103 94.8649 45.8226C94.9329 45.6349 94.9669 45.42 94.9669 45.178V41.8079H96.1419V45.1045C96.1419 45.5234 96.078 45.896 95.9501 46.2224C95.825 46.5488 95.6509 46.8127 95.4279 47.014C95.2076 47.2125 94.9546 47.3635 94.669 47.4668Z"
					fill="#F46663"
				/>
				<path
					d="M99.765 45.8552V47.5199H98.59V41.8079H100.557C101.242 41.8079 101.789 41.9983 102.197 42.3791C102.605 42.7572 102.809 43.2332 102.809 43.8071C102.809 44.1906 102.715 44.5306 102.527 44.8271C102.342 45.1236 102.082 45.3493 101.748 45.5044C102.335 45.8716 102.67 46.4863 102.752 47.3485L102.768 47.5199H101.625L101.609 47.3648C101.56 46.8943 101.409 46.5257 101.156 46.2592C100.906 45.9899 100.581 45.8552 100.181 45.8552H99.765ZM99.765 42.7871V44.876H100.532C100.864 44.876 101.128 44.7863 101.324 44.6068C101.519 44.4245 101.617 44.1661 101.617 43.8316C101.617 43.497 101.519 43.24 101.324 43.0604C101.128 42.8782 100.864 42.7871 100.532 42.7871H99.765Z"
					fill="#F46663"
				/>
				<path
					d="M104.76 45.8634C104.6 45.4935 104.52 45.0936 104.52 44.6639C104.52 44.2341 104.6 43.8343 104.76 43.4644C104.921 43.0944 105.138 42.7816 105.413 42.526C105.691 42.2703 106.016 42.0704 106.388 41.9262C106.764 41.782 107.161 41.71 107.58 41.71C108.276 41.71 108.893 41.899 109.432 42.2771C109.973 42.6524 110.335 43.1543 110.517 43.7826H109.261C109.106 43.4535 108.877 43.1951 108.575 43.0074C108.273 42.817 107.941 42.7218 107.58 42.7218C107.242 42.7218 106.932 42.802 106.649 42.9625C106.367 43.1203 106.139 43.3488 105.968 43.648C105.797 43.9472 105.711 44.2858 105.711 44.6639C105.711 45.042 105.797 45.3806 105.968 45.6798C106.139 45.979 106.367 46.2088 106.649 46.3693C106.932 46.5271 107.242 46.606 107.58 46.606C107.941 46.606 108.273 46.5121 108.575 46.3244C108.877 46.134 109.106 45.8743 109.261 45.5452H110.517C110.335 46.1735 109.973 46.6767 109.432 47.0548C108.893 47.4301 108.276 47.6178 107.58 47.6178C107.161 47.6178 106.764 47.5457 106.388 47.4016C106.016 47.2574 105.691 47.0575 105.413 46.8018C105.138 46.5461 104.921 46.2333 104.76 45.8634Z"
					fill="#F46663"
				/>
				<path
					d="M112.556 47.5199V41.8079H116.065V42.8034H113.731V44.3375H115.69V45.333H113.731V46.5244H116.139V47.5199H112.556Z"
					fill="#F46663"
				/>
			</svg>
		)
	},
)
