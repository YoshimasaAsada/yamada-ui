import type { ComponentMultiStyle } from "@yamada-ui/core"
import { shadeColor, tintColor } from "@yamada-ui/utils"

export const Card: ComponentMultiStyle<"Card"> = {
  baseStyle: {
    container: {},
    header: {},
    body: {
      flex: "1",
    },
    footer: {},
  },

  variants: {
    elevated: {
      container: {
        boxShadow: ["md", "dark-md"],
      },
    },
    outline: {
      container: {
        borderWidth: "1px",
      },
    },
    solid: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      container: {
        bg: [tintColor(`${c}.600`, 16)(t, m), shadeColor(`${c}.600`, 16)(t, m)],
        color: "white",
      },
    }),
    subtle: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      container: {
        bg: [`${c}.100`, shadeColor(`${c}.300`, 58)(t, m)],
      },
    }),
    unstyled: {
      container: { rounded: 0 },
      header: { p: 0 },
      body: { p: 0 },
      footer: { p: 0 },
    },
  },

  sizes: {
    sm: {
      container: { rounded: "base" },
      header: { pt: "sm", px: "sm", gap: "sm" },
      body: { py: "sm", px: "sm", gap: "sm" },
      footer: { pb: "sm", px: "sm", gap: "sm" },
    },
    md: {
      container: { rounded: "md" },
      header: { pt: "md", px: "md", gap: "md" },
      body: { py: "md", px: "md", gap: "md" },
      footer: { pb: "md", px: "md", gap: "md" },
    },
    normal: {
      container: { rounded: "lg" },
      header: { pt: "normal", px: "normal", gap: "normal" },
      body: { py: "normal", px: "normal", gap: "normal" },
      footer: { pb: "normal", px: "normal", gap: "normal" },
    },
    lg: {
      container: { rounded: "xl" },
      header: { pt: "lg", px: "lg", gap: "lg" },
      body: { py: "lg", px: "lg", gap: "lg" },
      footer: { pb: "lg", px: "lg", gap: "lg" },
    },
  },

  defaultProps: {
    variant: "elevated",
    colorScheme: "primary",
    size: "md",
  },
}
