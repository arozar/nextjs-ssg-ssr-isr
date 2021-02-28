import { useRouter } from 'next/router';

export default function Page(props) {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <>Preview of content</>;
    }

    return <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div>
}