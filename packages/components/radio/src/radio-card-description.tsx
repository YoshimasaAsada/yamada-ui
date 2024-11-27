import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useRadioCardContext } from "./radio-context"

export interface RadioCardDescriptionProps extends HTMLUIProps {}

export const RadioCardDescription = forwardRef<
  RadioCardDescriptionProps,
  "div"
>(({ className, ...rest }, ref) => {
  const { styles } = useRadioCardContext()

  const css: CSSUIObject = { ...styles.description }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-radio-card__description", className)}
      __css={css}
      {...rest}
    />
  )
})

RadioCardDescription.displayName = "RadioCardDescription"
RadioCardDescription.__ui__ = "RadioCardDescription"
