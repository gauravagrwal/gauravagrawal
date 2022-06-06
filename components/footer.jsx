import Image from 'next/image'
import ThemeSwitch from './themeSwitch'

export default function Footer() {
    return (
        <footer className="flex flex-1 px-0 py-8 border-t border-solid justify-center items-center">
            <a className="flex justify-center items-center grow"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className="h-4 ml-2">
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
            <ThemeSwitch />
        </footer>
    )
}
