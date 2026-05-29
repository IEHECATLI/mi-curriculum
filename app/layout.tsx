import './globals.css';

export const metadata = {
  title: 'Jesús Caín Portfolio',
  description: 'Professional CV Website'
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
