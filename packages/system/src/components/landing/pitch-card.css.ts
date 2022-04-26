import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { pxToRem } from "../../util/style-utils"

export const pitchCardStyle = style([
	sprinkles({
		layout: { desktop: "row", mobile: "stack" },
		alignItems: "center",
		gap: { desktop: 64, mobile: 32 },
		paddingX: { desktop: 64, mobile: "auto" },
		paddingY: 48,
		justifyContent: 'center'
	}),

])

export const pitchCardHeadingStyle = style([
	sprinkles({
		color: "regularText",
		paddingRight: 16,
		textStyle: { desktop: "h400", mobile: 'h200' },
	}),
	{
		maxWidth: pxToRem(436),
	},
])

export const pitchCardHeadingSoftStyle = sprinkles({
	color: "softText",
	paddingRight: 16,
})

export const pitchCardImage = style({
	maxWidth: pxToRem(451),
	maxHeight: pxToRem(580),
})
