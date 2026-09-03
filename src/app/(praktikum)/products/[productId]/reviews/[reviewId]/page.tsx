type Props = {
    params: {
        productId: string; 
        reviewId: string;
    };
};

export default function ReviewDetail({ params }: Props) {
    return (
        <div>
            <h1>Details about product {params.productId}</h1>
            <h1>Review ID: {params.reviewId}</h1>
        </div>
    );
}