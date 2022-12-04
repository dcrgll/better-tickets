import './styles.css'
import useAnalytics from '../lib/splitbee'

export default function Layout({ children }: { children: React.ReactNode }) {
	useAnalytics()
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
