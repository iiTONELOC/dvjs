import NextHead from 'next/head';

export default function Head({ title, description }) {
    return (
        <NextHead>
            <title>{title}</title>
            <meta name="author" content="Anthony Tropeano / iiTONELOC" />
            <meta name="description" content={description} />
            <link rel="icon" type="image/png" href="icon.png" />
        </NextHead>
    );
}