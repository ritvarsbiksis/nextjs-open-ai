import { Noto_Sans_Display } from 'next/font/google'

import { NavigExample } from '../components/navig-example/navig-example'
import { Providers } from '../components/providers/providers'

interface RootLayoutProps {
  children: React.ReactNode
}

const notoSansDisplay = Noto_Sans_Display({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
})

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body suppressHydrationWarning={true} className={notoSansDisplay.className}>
      <Providers>
        <NavigExample />
        {children}
      </Providers>
    </body>
  </html>
)

export default RootLayout
