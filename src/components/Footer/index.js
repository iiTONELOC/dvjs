export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex w-full flex-row items-center justify-center p-1 ">
            <p className="text-center">&#169; {currentYear} Hairy Turtle</p>
        </footer>
    );
}
