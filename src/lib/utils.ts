export default function baseStaticUrl(src = '') {
  const { VITE_APP_STATIC_URL } = import.meta.env
  if (src) {
    return `${VITE_APP_STATIC_URL}${src}`
  }
  // "pre-commit": "lint-staged"
  // hooksPath = .husky
  // "lint-staged": {
  //   "*.{ts,tsx,vue,js,jsx}": [
  // 		"npm run lint",
  //     "prettier --write",
  //     "git add"
  //   ]
  // }
  return VITE_APP_STATIC_URL as string
}
