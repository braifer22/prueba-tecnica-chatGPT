import { GithubIcon } from './GithubIcon';

export function Footer() {
    return (
        <footer className="p-4 bg-neutral-900 flex items-center">
            <div className="w-full max-w-screen-lg mx-auto flex justify-between">
                <div>Alexis ©{new Date().getFullYear()}💛</div>
                <a
                    href="https://github.com/braifer22/prueba-tecnica-dashboard-users"
                    target="_blank"
                    className="flex items-center gap-2"
                >
                    Repository
                    <GithubIcon />
                </a>
            </div>
        </footer>
    );
}
