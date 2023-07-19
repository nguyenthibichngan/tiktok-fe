import ContentItem from './ContentItem';

function Content({ data = [] }) {
    console.log(data);
    return (
        <div>
            {data.map((account) => (
                <ContentItem key={account.id} data={account} />
            ))}
        </div>
    );
}

export default Content;
