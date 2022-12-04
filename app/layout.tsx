import './styles.css'
import { AnalyticsWrapper } from './components/analytics'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				{children}
				<AnalyticsWrapper />
			</body>
		</html>
	)
}
